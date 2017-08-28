import * as express from 'express';
import { config } from './config';

const app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req: express.Request, res: express.Response) => {
  res.render('index', { answer: 42 });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
