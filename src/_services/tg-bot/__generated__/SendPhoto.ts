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
  SendPhotoCreateData,
  SendPhotoCreateError,
  SendPhotoCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SendPhoto<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *
   * @name SendPhotoCreate
   * @request POST:/sendPhoto
   */
  sendPhotoCreate = (
    data: SendPhotoCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<SendPhotoCreateData, SendPhotoCreateError>({
      path: `/sendPhoto`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
