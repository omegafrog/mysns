const {pool} = require("../../data");
const jwt = require('jsonwebtoken');

const {login, register} = require("./query");
const crypto = require('crypto');
const { resolve } = require("path");

exports.register = async ctx=>{
    let {email, password, name} = ctx.request.body;
    let cryptedPassword = crypto.pbkdf2Sync(password, process.env.APP_KEY, 40, 255, 'sha512');
    let {affectedRows, insertId} = register(email, cryptedPassword, name);
    if(affectedRows<0){
        ctx.body={result:"fail"};
    }else{
        ctx.body={
            result:"ok",
            id:insertId
        }
    }
}
let generateToken = (payload)=>{
    return new Promise((resolve, reject)=>{
        jwt.sign(payload, "salt", (error, token)=>{
            if(error){ reject(error);}
            resolve(token);
        })
    })
}
exports.login = async(ctx, next)=>{
    let {email, password} = ctx.request.body;
    let result =  crypto.pbkdf2Sync(password, process.env.APP_KEY, 40, 255, 'sha512');

    let item = await login(email, result.toString('base64'));
    
    if(item == null){
        ctx.body = {result:"fail"};
    }else{
        let token = await generateToken({name:item.id});
        ctx.body=token;
    }
}

