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
  AnswerInlineQueryCreateData,
  AnswerInlineQueryCreateError,
  AnswerInlineQueryCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AnswerInlineQuery<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to send answers to an inline query. On success, *True* is returned. No more than **50** results per query are allowed.
   *
   * @name AnswerInlineQueryCreate
   * @request POST:/answerInlineQuery
   */
  answerInlineQueryCreate = (
    data: AnswerInlineQueryCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AnswerInlineQueryCreateData,
      AnswerInlineQueryCreateError
    >({
      path: `/answerInlineQuery`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
