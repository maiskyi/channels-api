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
  DeleteWebhookCreateData,
  DeleteWebhookCreateError,
  DeleteWebhookCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DeleteWebhook<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api/#getupdates). Returns *True* on success.
   *
   * @name DeleteWebhookCreate
   * @request POST:/deleteWebhook
   */
  deleteWebhookCreate = (
    data: DeleteWebhookCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<DeleteWebhookCreateData, DeleteWebhookCreateError>({
      path: `/deleteWebhook`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
