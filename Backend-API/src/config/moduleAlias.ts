import *  as path from 'path';
import moduleAlas from "module-alias";


const files = path.resolve(__dirname, '../../');


moduleAlas.addAliases(
    {
        '@config': path.join(files, 'src/config'),
        '@infrastructure': path.join(files, 'src/infrastructure'),
        '@domain': path.join(files, 'src/domain'),
    }
)