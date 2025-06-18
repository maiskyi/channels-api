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

import {
  SendGameCreateData,
  SendGameCreateError,
  SendGameCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SendGame<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to send a game. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *
   * @name SendGameCreate
   * @request POST:/sendGame
   */
  sendGameCreate = (data: SendGameCreatePayload, params: RequestParams = {}) =>
    this.http.request<SendGameCreateData, SendGameCreateError>({
      path: `/sendGame`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
