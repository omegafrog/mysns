const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');


const port = process.env.PORT || 3000;

app.use(bodyParser({formLimit:'5mb'}));

router.use(require('./src/routes').routes());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, ()=>{
    console.log('웹 구동');
})