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
  SetChatDescriptionCreateData,
  SetChatDescriptionCreateError,
  SetChatDescriptionCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SetChatDescription<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
   *
   * @name SetChatDescriptionCreate
   * @request POST:/setChatDescription
   */
  setChatDescriptionCreate = (
    data: SetChatDescriptionCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SetChatDescriptionCreateData,
      SetChatDescriptionCreateError
    >({
      path: `/setChatDescription`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
