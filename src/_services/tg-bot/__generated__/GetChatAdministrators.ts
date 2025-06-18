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
  GetChatAdministratorsCreateData,
  GetChatAdministratorsCreateError,
  GetChatAdministratorsCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GetChatAdministrators<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
   *
   * @name GetChatAdministratorsCreate
   * @request POST:/getChatAdministrators
   */
  getChatAdministratorsCreate = (
    data: GetChatAdministratorsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      GetChatAdministratorsCreateData,
      GetChatAdministratorsCreateError
    >({
      path: `/getChatAdministrators`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
