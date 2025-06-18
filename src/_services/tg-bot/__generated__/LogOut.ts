/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { LogOutCreateData, LogOutCreateError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class LogOut<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to log out from the cloud Bot API server before launching the bot locally. You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns *True* on success. Requires no parameters.
   *
   * @name LogOutCreate
   * @request POST:/logOut
   */
  logOutCreate = (params: RequestParams = {}) =>
    this.http.request<LogOutCreateData, LogOutCreateError>({
      path: `/logOut`,
      method: "POST",
      format: "json",
      ...params,
    });
}
