const Router = require('@koa/router');
const router = new Router();

exports.home=ctx=>{
    ctx.body="홈페이지 입니다.";
}

exports.content=ctx=>{
    let contentType = ctx.params.content;
    
    switch (contentType) {
        case "terms":
            ctx.body="이용약관 페이지입니다.";
            break;
        case "policy":
            ctx.body="정책 페이지입니다.";
            break;
        default:
            break;
    }
}
