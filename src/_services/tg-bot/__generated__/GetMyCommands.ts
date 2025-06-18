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
  GetMyCommandsCreateData,
  GetMyCommandsCreateError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class GetMyCommands<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to get the current list of the bot's commands. Requires no parameters. Returns Array of [BotCommand](https://core.telegram.org/bots/api/#botcommand) on success.
   *
   * @name GetMyCommandsCreate
   * @request POST:/getMyCommands
   */
  getMyCommandsCreate = (params: RequestParams = {}) =>
    this.http.request<GetMyCommandsCreateData, GetMyCommandsCreateError>({
      path: `/getMyCommands`,
      method: "POST",
      format: "json",
      ...params,
    });
}
