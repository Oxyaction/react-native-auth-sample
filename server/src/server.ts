import Koa from 'koa';
import { koaBody } from 'koa-body';
import { router } from './routes';

const app = new Koa();

app.use(koaBody());
app.use(router.routes());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
