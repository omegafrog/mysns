const Router= require('@koa/router');
const router = new Router();

exports.list=ctx=>{
    ctx.body="피드 리스트입니다.";
}

exports.write=ctx=>{
    let body = ctx.request.body;
    ctx.body = body;
}

exports.update=ctx=>{
    let body = ctx.request.body;
    ctx.body="업데이트";
}
exports.show=ctx=>{
    ctx.body="보여주기";
}
exports.delete=ctx=>{
    ctx.body="삭제하기";
}
