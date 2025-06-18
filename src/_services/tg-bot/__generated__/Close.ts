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

import { CloseCreateData, CloseCreateError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Close<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns *True* on success. Requires no parameters.
   *
   * @name CloseCreate
   * @request POST:/close
   */
  closeCreate = (params: RequestParams = {}) =>
    this.http.request<CloseCreateData, CloseCreateError>({
      path: `/close`,
      method: "POST",
      format: "json",
      ...params,
    });
}
