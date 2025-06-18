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
  PromoteChatMemberCreateData,
  PromoteChatMemberCreateError,
  PromoteChatMemberCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PromoteChatMember<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass *False* for all boolean parameters to demote a user. Returns *True* on success.
   *
   * @name PromoteChatMemberCreate
   * @request POST:/promoteChatMember
   */
  promoteChatMemberCreate = (
    data: PromoteChatMemberCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PromoteChatMemberCreateData,
      PromoteChatMemberCreateError
    >({
      path: `/promoteChatMember`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
