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
  RestrictChatMemberCreateData,
  RestrictChatMemberCreateError,
  RestrictChatMemberCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class RestrictChatMember<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass *True* for all permissions to lift restrictions from a user. Returns *True* on success.
   *
   * @name RestrictChatMemberCreate
   * @request POST:/restrictChatMember
   */
  restrictChatMemberCreate = (
    data: RestrictChatMemberCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      RestrictChatMemberCreateData,
      RestrictChatMemberCreateError
    >({
      path: `/restrictChatMember`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
