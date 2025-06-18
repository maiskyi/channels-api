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
  StopMessageLiveLocationCreateData,
  StopMessageLiveLocationCreateError,
  StopMessageLiveLocationCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class StopMessageLiveLocation<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to stop updating a live location message before *live\_period* expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
   *
   * @name StopMessageLiveLocationCreate
   * @request POST:/stopMessageLiveLocation
   */
  stopMessageLiveLocationCreate = (
    data: StopMessageLiveLocationCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      StopMessageLiveLocationCreateData,
      StopMessageLiveLocationCreateError
    >({
      path: `/stopMessageLiveLocation`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
