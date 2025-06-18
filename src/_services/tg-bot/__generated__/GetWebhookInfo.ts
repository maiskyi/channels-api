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
  GetWebhookInfoCreateData,
  GetWebhookInfoCreateError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class GetWebhookInfo<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api/#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api/#getupdates), will return an object with the *url* field empty.
   *
   * @name GetWebhookInfoCreate
   * @request POST:/getWebhookInfo
   */
  getWebhookInfoCreate = (params: RequestParams = {}) =>
    this.http.request<GetWebhookInfoCreateData, GetWebhookInfoCreateError>({
      path: `/getWebhookInfo`,
      method: "POST",
      format: "json",
      ...params,
    });
}
