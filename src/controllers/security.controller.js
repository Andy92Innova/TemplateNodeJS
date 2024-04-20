
const PostgreSQLRepository = require('../persistences/repositories/psql.repository');
const MySQLRepository = require('../persistences/repositories/mysql.repository');
const UserService = require('../services/user.service');

const psqlRespoitory = new PostgreSQLRepository();
const mySQLRepository = new MySQLRepository();
const userService = new UserService(psqlRespoitory); // here we're using pgsql as repository

const connect = async(req,res) => {
    const {user_email , user_pass} = req.body;

    const user = await userService.findUser(user_email);
    
    if(!user){
        return res.status(401).json({ message:'User or pass not valid'});
    }

    const validPassword = await comparePassword(user_pass, user.hash_password);

    if(!validPassword){
        return res.status(401).json({ message:'User or pass not valid'});
    }

    const token = generateToken(user);
    res.json({token});
}


const comparePassword = async(plain_password, hashed_password) => {
    return await bcrypt.compare(plain_password, hashed_password,);
}

const generateToken = (user)=>{
    return jwt.sign({
        id: user.user_id,
        email: user.user_email}, 
        secretKey,
        {expiresIn: '1h'});
}


module.exports = { connect }