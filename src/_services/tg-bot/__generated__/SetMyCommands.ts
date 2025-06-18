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
  SetMyCommandsCreateData,
  SetMyCommandsCreateError,
  SetMyCommandsCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SetMyCommands<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to change the list of the bot's commands. Returns *True* on success.
   *
   * @name SetMyCommandsCreate
   * @request POST:/setMyCommands
   */
  setMyCommandsCreate = (
    data: SetMyCommandsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<SetMyCommandsCreateData, SetMyCommandsCreateError>({
      path: `/setMyCommands`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
