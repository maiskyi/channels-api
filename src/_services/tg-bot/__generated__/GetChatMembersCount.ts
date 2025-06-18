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
  GetChatMembersCountCreateData,
  GetChatMembersCountCreateError,
  GetChatMembersCountCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GetChatMembersCount<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to get the number of members in a chat. Returns *Int* on success.
   *
   * @name GetChatMembersCountCreate
   * @request POST:/getChatMembersCount
   */
  getChatMembersCountCreate = (
    data: GetChatMembersCountCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      GetChatMembersCountCreateData,
      GetChatMembersCountCreateError
    >({
      path: `/getChatMembersCount`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
