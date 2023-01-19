const {pool} = require('../../data');

/**
 * 유저의 정보를 db에 저장해 회원가입 진행.
 * @param {string} email 유저 이메일
 * @param {string} password 유저 비밀번호
 * @param {string} name 유저 이름
 * @returns {int, int} affectedRows, insertId
 */
exports.register=async(email, password, name)=>{
    const query = `INSERT INTO user (email, password, name) values(?,?,?)`;
    return await pool(query, [email, password, name]);
}

exports.login=async(email)=>{
    const query = `SELECT * FROM user WHERE email=?`;
    let result = await pool(query, [email]);
    return (result<0)?null:result[0];
}