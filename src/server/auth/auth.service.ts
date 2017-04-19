import * as jwt from 'jsonwebtoken';
// import compose from 'composable-middleware';
var compose = require('composable-middleware');
import User from '../api/user/user.model';
import config from '../config/config';


export function createToken(user: Object) {
  return jwt.sign(user, config.jwtSecret, { expiresIn: '90 days' })
}

/*export function verifyToken(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, (err, verifiedJwt) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(verifiedJwt);
      }
    })
  })
}*/
/*export function hasRole(roleRequired) {
  if (!roleRequired) {
    console.log('role is required');
    // throw new Error('Role is required');
  }

  return compose()
    .use(isAuthenticated())
    .use((req, res, next) => {
      if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
        return next();
      }
      else {
        return res.status(403).send('Forbidden');
      }
    })
}*/
export function isAuthenticated() {
  return compose()
    .use((req, res, next) => {
      const authorizationHeader = req.headers.authorization;
      let token;

      if(authorizationHeader) {
        token = authorizationHeader.split(' ')[0];
      }
      if (token) {
        jwt.verify(token, config.jwtSecret, (err, verifiedJwt) => {
          if(err) {
            return res.status(401).json({ error: 'Failed to authenticate' });
          }
          else {
            req.user = verifiedJwt;
            next();
          }
        })
      }
    })
    .use((req, res, next) => {
      User.findOne(req.user._id)
        .exec((err, user) => {
          if(err) {
            return res.status(400).json({error: err});
          }
          else if(!user) {
            return res.status(404).json({error: 'No such user'});
          }
          req.user = user;
          next();
        })
    })
}
