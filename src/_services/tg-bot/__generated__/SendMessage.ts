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
  SendMessageCreateData,
  SendMessageCreateError,
  SendMessageCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SendMessage<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *
   * @name SendMessageCreate
   * @request POST:/sendMessage
   */
  sendMessageCreate = (
    data: SendMessageCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<SendMessageCreateData, SendMessageCreateError>({
      path: `/sendMessage`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
