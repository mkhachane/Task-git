const varifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app){
      const controller = require('../controller/controller.js');
      
      app.post('/api/auth/signup', [varifySignUp.checkDuplicateUserNameOrEmail, varifySignUp.checkRolesExisted], controller.signup);

      app.post('/api/auth/signin', controller.signin);

      app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);
	
	app.get('/api/test/superuser', [authJwt.verifyToken, authJwt.isSuperuserOrAdmin], controller.managementBoard);
	
	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

}