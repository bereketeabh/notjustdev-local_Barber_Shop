const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken")

class Userservices {
  static async Registration(email, password) {
    try {
      const UserReg = new UserModel({ email, password });
      return await UserReg.save();
    } catch (err) {
      throw err;
    }
  }
  static async Login(email) {
    try {
      return await UserModel.findOne({email}) ;
    } catch (err) {
      throw err;
    }
  }
  static async GenerateToken(tokenData, secretKey, jwt_expire)
  {
   return jwt.sign(tokenData,secretKey,{expiresIn: jwt_expire})
  }
}

module.exports = Userservices;
