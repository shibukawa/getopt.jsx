import "console.jsx";
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
