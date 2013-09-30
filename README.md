getopt.jsx
===========================================

Synopsis
---------------

JSX version of [node-getopt](https://github.com/davepacheco/node-getopt).

Code Example
---------------

```js
import "getopt.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        var parser = new BasicParser('o:(output)h(help)', argv);

        var help = false;
        var output = '';
        var source = [] : string[];

        var opt = parser.getopt();
        while (opt)
        {
            switch (opt.option)
            {
            case 'o':
                output = opt.optarg;
                break;
            case 'h':
                help = true;
                break;
            default:
                source.push(opt.option);
                break;
            }
            opt = parser.getopt();
        }
        if (help || source.length == 0)
        {
            console.log('''
$ getopt-sample [options] source...

options:
  -o file, --output=file : set output file
  -h, --help             : show this message
            ''');
        }
        else
        {
            // do some task here
            console.log("source:", source.join(', '));
            console.log("output:", output);
        }
    }
}
```

Motivation
---------------

It provides command line parsing feature to your cool JSX program.

Installation
---------------

```sh
$ npm install getopt.jsx
```

API Reference
------------------

`class BasicParser(opt : string, argv : string[])`

    It receives command pattern as first parameter and actual options as second parameter.

`BasicParser.getopt() : CommandOption`

    It returns analysing parameter. If it consumes all parameters, it returns `null`.

`class CommandOption`

    it has `option`, `optarg` parameter. If argument has parameter, option is a short name of command and
    parameter is set to `optarg` (see case sentenses of the above sample).

    If needed parameter is not provided, `error` flag become `true`.
    
    Extra arguments are set to option (see default block of the above sample).

Option Pattern
-------------------

`s(long)`

    it become flag option (no parameter). BasicParser can accept `-s` and `--long`.

`s:(long)`

    it become flag option with parameter. BasicParser can accept `-s option` and `--long=option`.

Development
-------------

## Repository

* Repository: git://github.com/shibukawa/getopt.jsx.git
* Issues: https://github.com/shibukawa/getopt.jsx.git/issues

## Run Test

```sh
$ grunt test
```

## Build

```sh
# Generate API reference
$ grunt doc

# Build application or library for JS project
$ grunt build
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

MIT

Complete license is written in `LICENSE.md`.

Original Version
---------------------

* Author: David Pacheco
* github: https://github.com/davepacheco/node-getopt
* License: MIT
