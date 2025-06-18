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

import { SetMyCommandsData, SetMyCommandsRequest } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Bot<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Bot
   * @name SetMyCommands
   * @request POST:/setMyCommands
   */
  setMyCommands = (data: SetMyCommandsRequest, params: RequestParams = {}) =>
    this.http.request<SetMyCommandsData, any>({
      path: `/setMyCommands`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
