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
  SetChatPermissionsCreateData,
  SetChatPermissionsCreateError,
  SetChatPermissionsCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SetChatPermissions<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the *can\_restrict\_members* admin rights. Returns *True* on success.
   *
   * @name SetChatPermissionsCreate
   * @request POST:/setChatPermissions
   */
  setChatPermissionsCreate = (
    data: SetChatPermissionsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SetChatPermissionsCreateData,
      SetChatPermissionsCreateError
    >({
      path: `/setChatPermissions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
