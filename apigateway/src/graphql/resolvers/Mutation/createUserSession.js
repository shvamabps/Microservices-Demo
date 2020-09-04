import UsersService from "#root/adapters/UsersService";

const createUserResolver = async (obj, { email, password }, context) => {
  const userSession = UsersService.createUserSession({ email, password });

  context.res.cookie("userSessionId", userSession.Id, { httpOnly: true });
  return userSession;
};

export default createUserResolver;
