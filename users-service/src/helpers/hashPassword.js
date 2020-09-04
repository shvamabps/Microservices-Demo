import bcrypt from "bcryptjs";

const hashPassword = (passord) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export default hashPassword;
