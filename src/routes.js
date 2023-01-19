const Router = require('@koa/router');
const router = new Router();
const multer = require('@koa/multer');
const path = require('path');
const {verify} = require('./middleware/jwt');
const upload = multer({
    dest: path.resolve(__dirname, '../', 'storage')
});

router.get('/', require('./web/controller').home);

router.get('/page/:content', require('./web/controller').content);

router.post('/user/register', require('./api/user/controller').register);
router.post('/user/login', require('./api/user/controller').login);

router.get('/feed', verify, require('./api/feed/controller').list);
router.post('/feed', require('./api/feed/controller').write);
router.put('/feed/:id', require('./api/feed/controller').update);
router.delete('/feed/:id', require('./api/feed/controller').delete);
router.get('/feed/:id', require('./api/feed/controller').show);

// 함수 쓰는 위치에 따라서 우선순위가 정해진다.
router.post('/file/upload', upload.single('file'), require('./api/file/controller').upload);
router.get('/file/:id', require('./api/file/controller').download);

router.post('/user/register', require('./api/user/controller').register);
module.exports = router;