export default  {
  jwtSecret: 'jwtsecretofuserinclassifiedapp',
  mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/classifiedApp',
  port: process.env.PORT || 8000,
  userRoles: ['guest', 'user', 'admin']
};