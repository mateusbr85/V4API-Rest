import * as dotenv from 'dotenv';
import path from 'path';

const doteEnvConfig = dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export default doteEnvConfig