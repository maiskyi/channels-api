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
  SendInvoiceCreateData,
  SendInvoiceCreateError,
  SendInvoiceCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SendInvoice<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to send invoices. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *
   * @name SendInvoiceCreate
   * @request POST:/sendInvoice
   */
  sendInvoiceCreate = (
    data: SendInvoiceCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<SendInvoiceCreateData, SendInvoiceCreateError>({
      path: `/sendInvoice`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
