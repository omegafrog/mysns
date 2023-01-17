const {pool} = require("../../data");

exports.register = async ctx=>{
    let {email, password, name} = ctx.params;
    let {affectedRows, insertId} = register(email, password, name);
    if(affectedRows<0){
        ctx.body={result:"fail"};
    }else{
        ctx.body={
            result:"ok",
            id:insertId
        }
    }
}