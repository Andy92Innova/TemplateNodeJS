const express = require('require');
const router = express.Router();

router.get('/healthcheck', async (req,res)=>{
    return res.send({message: 'This api is ok'})
});

router.use('/home', require('./home.route'));
router.use('/security', require('./security.routes'));

router.get('*', (req,res)=> {
    res.status(404);
    res.send({error:'Not Found'});
});

module.exports = router;