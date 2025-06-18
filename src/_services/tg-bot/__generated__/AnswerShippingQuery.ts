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
  AnswerShippingQueryCreateData,
  AnswerShippingQueryCreateError,
  AnswerShippingQueryCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AnswerShippingQuery<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description If you sent an invoice requesting a shipping address and the parameter *is\_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api/#update) with a *shipping\_query* field to the bot. Use this method to reply to shipping queries. On success, True is returned.
   *
   * @name AnswerShippingQueryCreate
   * @request POST:/answerShippingQuery
   */
  answerShippingQueryCreate = (
    data: AnswerShippingQueryCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AnswerShippingQueryCreateData,
      AnswerShippingQueryCreateError
    >({
      path: `/answerShippingQuery`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
