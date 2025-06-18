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
  EditMessageReplyMarkupCreateData,
  EditMessageReplyMarkupCreateError,
  EditMessageReplyMarkupCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class EditMessageReplyMarkup<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
   *
   * @name EditMessageReplyMarkupCreate
   * @request POST:/editMessageReplyMarkup
   */
  editMessageReplyMarkupCreate = (
    data: EditMessageReplyMarkupCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EditMessageReplyMarkupCreateData,
      EditMessageReplyMarkupCreateError
    >({
      path: `/editMessageReplyMarkup`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
