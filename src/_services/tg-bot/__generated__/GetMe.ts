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

import { GetMeCreateData, GetMeCreateError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class GetMe<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api/#user) object.
   *
   * @name GetMeCreate
   * @request POST:/getMe
   */
  getMeCreate = (params: RequestParams = {}) =>
    this.http.request<GetMeCreateData, GetMeCreateError>({
      path: `/getMe`,
      method: "POST",
      format: "json",
      ...params,
    });
}
