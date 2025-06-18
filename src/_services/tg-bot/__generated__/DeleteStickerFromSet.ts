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
  DeleteStickerFromSetCreateData,
  DeleteStickerFromSetCreateError,
  DeleteStickerFromSetCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DeleteStickerFromSet<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to delete a sticker from a set created by the bot. Returns *True* on success.
   *
   * @name DeleteStickerFromSetCreate
   * @request POST:/deleteStickerFromSet
   */
  deleteStickerFromSetCreate = (
    data: DeleteStickerFromSetCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DeleteStickerFromSetCreateData,
      DeleteStickerFromSetCreateError
    >({
      path: `/deleteStickerFromSet`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
