import * as express from 'express';
import { config } from './config';

const app = express();
app.use(express.static('public'));

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
