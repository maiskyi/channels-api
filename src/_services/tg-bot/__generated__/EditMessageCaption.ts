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
  EditMessageCaptionCreateData,
  EditMessageCaptionCreateError,
  EditMessageCaptionCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class EditMessageCaption<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
   *
   * @name EditMessageCaptionCreate
   * @request POST:/editMessageCaption
   */
  editMessageCaptionCreate = (
    data: EditMessageCaptionCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EditMessageCaptionCreateData,
      EditMessageCaptionCreateError
    >({
      path: `/editMessageCaption`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
