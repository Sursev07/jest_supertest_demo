const {User} = require('../models')
const {encrypt, comparePassword} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')

class userController{
    static register (req, res, next){
        const obj = {
            email: req.body.email, 
            password: encrypt(req.body.password)
        }

        User.create(obj)
        .then(response => {
            res.status(201).json({message: 'Successfully Register'})
        })
        .catch(err => {
            console.log(err)
        })
    }

    static login(req, res, next) {
        const { email, password } = req.body;
        User.findOne({
          where: {
            email: email || ''
          }
        })
          .then(response => {
            if (response) {
              if (comparePassword(password || '', response.password)) {
                const payload = {
                  id: response.id,
                  email: response.email
                };
                const access_token = generateToken(payload);
                res.status(200).json({
                  access_token
                });
              } else {
                next({
                  status: 400,
                  message: 'Invalid email or password'
                });
              }
            } else {
              next({
                status: 400,
                message: 'Invalid email or password'
              });
            }
          })
          .catch(err => next(err));
        }
}
module.exports = userController