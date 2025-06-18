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
  SendPollCreateData,
  SendPollCreateError,
  SendPollCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SendPoll<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to send a native poll. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *
   * @name SendPollCreate
   * @request POST:/sendPoll
   */
  sendPollCreate = (data: SendPollCreatePayload, params: RequestParams = {}) =>
    this.http.request<SendPollCreateData, SendPollCreateError>({
      path: `/sendPoll`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
