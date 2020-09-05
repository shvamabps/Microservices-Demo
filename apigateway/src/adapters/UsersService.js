import got from "got";

import accessEnv from "#root/helpers/accessEnv";

const USERS_SERVICE_URI = accessEnv("USERS_SERVICE_URI");

export default class UsersService {
  static async createUser({ description, title }) {
    const body = await got
      .post(`${USERS_SERVICE_URI}/listings`, {
        json: { description, title },
      })
      .json();
    return body;
  }

  static async createUserSession({ email, password }) {
    const body = await got
      .post(`${USERS_SERVICE_URI}/sessions`, {
        json: { email, password },
      })
      .json();
    return body;
  }
}
