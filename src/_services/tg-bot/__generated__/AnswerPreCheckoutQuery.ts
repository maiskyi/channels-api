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
  AnswerPreCheckoutQueryCreateData,
  AnswerPreCheckoutQueryCreateError,
  AnswerPreCheckoutQueryCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AnswerPreCheckoutQuery<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api/#update) with the field *pre\_checkout\_query*. Use this method to respond to such pre-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
   *
   * @name AnswerPreCheckoutQueryCreate
   * @request POST:/answerPreCheckoutQuery
   */
  answerPreCheckoutQueryCreate = (
    data: AnswerPreCheckoutQueryCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AnswerPreCheckoutQueryCreateData,
      AnswerPreCheckoutQueryCreateError
    >({
      path: `/answerPreCheckoutQuery`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
