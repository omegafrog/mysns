const {list, write,update, show, remove} = require('./query');

exports.list=ctx=>{
    let result = list();
    ctx.body = result;
}

exports.write=ctx=>{
    let {user_id, image_id, content} = ctx.request.body;
    console.log(user_id, image_id, content);
    
    let {affectedRows, insertId} = write(user_id, image_id, content);
    if(affectedRows<0){
        ctx.body={result:"fail"};
    }else{
        ctx.body={result:"ok",id:insertId};
    }
}

exports.update=ctx=>{
    let {user_id, image_id, content} = ctx.request.body;
    let feed_id = ctx.params.id;
    let {affectedRows, updatedId} = update(feed_id, user_id, image_id, content);
    if(affectedRows<0){
        ctx.body = {result:"fail"}
    }else{
        ctx.body={result:"ok", updatedId:updatedId}
    }
    
}
exports.show=ctx=>{
    let feed_id = ctx.params.id;
    let result = show(feed_id);
    ctx.body={result:result}
}
exports.delete=ctx=>{
    let id = ctx.params.id;
    let {affectedRows} = remove(id);
    if(affectedRows<0){
        ctx.body={result:"failed"}
    }else{
        ctx.body={result:"success"}
    }
}
