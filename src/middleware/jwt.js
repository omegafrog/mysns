const jwt = require('jsonwebtoken');

exports.verify = async(ctx, next)=>{
    let token = ctx.request.headers['token'];
    console.log("cookietoken : "+token);
    await jwt.verify(token,process.env.APP_KEY,async(e,d)=>{
        if(e){
            ctx.response.status=400;
            ctx.body='error';
        }else{
            await next();
        }
    });
}

