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
  SetChatMenuButtonData,
  SetChatMenuButtonRequest,
  SetMyCommandsData,
  SetMyCommandsRequest,
  SetMyNameData,
  SetMyNameRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Bot<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Bot
   * @name SetMyCommands
   * @request POST:/setMyCommands
   */
  setMyCommands = (data: SetMyCommandsRequest, params: RequestParams = {}) =>
    this.http.request<SetMyCommandsData, any>({
      path: `/setMyCommands`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Bot
   * @name SetMyName
   * @request POST:/setMyName
   */
  setMyName = (data: SetMyNameRequest, params: RequestParams = {}) =>
    this.http.request<SetMyNameData, any>({
      path: `/setMyName`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Bot
   * @name SetChatMenuButton
   * @request POST:/setChatMenuButton
   */
  setChatMenuButton = (
    data: SetChatMenuButtonRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<SetChatMenuButtonData, any>({
      path: `/setChatMenuButton`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
