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
  EditMessageLiveLocationCreateData,
  EditMessageLiveLocationCreateError,
  EditMessageLiveLocationCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class EditMessageLiveLocation<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to edit live location messages. A location can be edited until its *live\_period* expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api/#stopmessagelivelocation). On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
   *
   * @name EditMessageLiveLocationCreate
   * @request POST:/editMessageLiveLocation
   */
  editMessageLiveLocationCreate = (
    data: EditMessageLiveLocationCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EditMessageLiveLocationCreateData,
      EditMessageLiveLocationCreateError
    >({
      path: `/editMessageLiveLocation`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
