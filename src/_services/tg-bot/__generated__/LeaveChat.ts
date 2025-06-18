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
  LeaveChatCreateData,
  LeaveChatCreateError,
  LeaveChatCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class LeaveChat<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method for your bot to leave a group, supergroup or channel. Returns *True* on success.
   *
   * @name LeaveChatCreate
   * @request POST:/leaveChat
   */
  leaveChatCreate = (
    data: LeaveChatCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<LeaveChatCreateData, LeaveChatCreateError>({
      path: `/leaveChat`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
