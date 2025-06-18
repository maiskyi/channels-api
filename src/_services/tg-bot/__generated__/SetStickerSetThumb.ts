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
  SetStickerSetThumbCreateData,
  SetStickerSetThumbCreateError,
  SetStickerSetThumbCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SetStickerSetThumb<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Returns *True* on success.
   *
   * @name SetStickerSetThumbCreate
   * @request POST:/setStickerSetThumb
   */
  setStickerSetThumbCreate = (
    data: SetStickerSetThumbCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SetStickerSetThumbCreateData,
      SetStickerSetThumbCreateError
    >({
      path: `/setStickerSetThumb`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
