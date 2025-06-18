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
  SendLocationCreateData,
  SendLocationCreateError,
  SendLocationCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SendLocation<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to send point on the map. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *
   * @name SendLocationCreate
   * @request POST:/sendLocation
   */
  sendLocationCreate = (
    data: SendLocationCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<SendLocationCreateData, SendLocationCreateError>({
      path: `/sendLocation`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
