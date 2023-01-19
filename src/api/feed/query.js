const {pool} = require('../../data');

exports.list=async ()=>{
    const query = `SELECT * FROM feed`;
    let result = await pool(query, []);
    return (result<0)?null:result;
}
exports.write = async (user_id, image_id, content)=>{
    const query = `INSERT INTO feed (user_id, image_id, content)
    values (?,?,?)`;
    return await pool(query, [Number(user_id), image_id, content]);
}
exports.update= async(feed_id, user_id, image_id, content)=>{
    const query = `UPDATE feed SET user_id=?, image_id=?, content=?
    WHERE id=?`;
    return await pool(query, [ user_id, image_id, content,feed_id]);
}
exports.remove = async(id)=>{
    const query = `DELETE FROM feed WHERE id=?`;
    return await pool(query, [id]);
}
exports.show = async(id)=>{
    const query = `SELECT * FROM feed WHERE id = ?`;
    return await pool(query, [id]);
}

