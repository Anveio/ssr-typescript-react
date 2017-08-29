import * as express from 'express';
import { config } from './config';
import serverRender from './renderers/server';
// import * as pug from 'pug';

const app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req: express.Request, res: express.Response) => {
  res.render('index', { title: 'My Apperino', content: serverRender() });
});

app.listen(config.port, () => {
  // tslint:disable-next-line:no-console
  console.info(`Running on ${config.port}`);
});
