const {pool} = require('../../data');

/**
 * 
 * @param {string} name 파일 이름
 * @param {string} path mulpart로 받은 파일 경로
 * @param {int} size 파일 사이즈
 * @returns files 테이블에 파일을 업로드함.
 */
exports.create = async(name, path, size)=>{
    const query = `INSERT INTO files
    (original_name, file_path, file_size)
    values(?,?,?)`;
    return await pool(query, [name, path, size]);
}


/**
 * files 테이블에서 id에 해당하는 row를 리턴
 * @param {int} id 
 * @returns {array} result
 */
exports.show=async(id)=>{
    const query = `SELECT * FROM files WHERE id = ?`;
    let result = await pool(query, [id]);
    return (result<0)?null:result[0];
}

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