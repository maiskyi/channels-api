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
  SetChatAdministratorCustomTitleCreateData,
  SetChatAdministratorCustomTitleCreateError,
  SetChatAdministratorCustomTitleCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SetChatAdministratorCustomTitle<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns *True* on success.
   *
   * @name SetChatAdministratorCustomTitleCreate
   * @request POST:/setChatAdministratorCustomTitle
   */
  setChatAdministratorCustomTitleCreate = (
    data: SetChatAdministratorCustomTitleCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SetChatAdministratorCustomTitleCreateData,
      SetChatAdministratorCustomTitleCreateError
    >({
      path: `/setChatAdministratorCustomTitle`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
