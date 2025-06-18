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
  SetStickerPositionInSetCreateData,
  SetStickerPositionInSetCreateError,
  SetStickerPositionInSetCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SetStickerPositionInSet<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to move a sticker in a set created by the bot to a specific position. Returns *True* on success.
   *
   * @name SetStickerPositionInSetCreate
   * @request POST:/setStickerPositionInSet
   */
  setStickerPositionInSetCreate = (
    data: SetStickerPositionInSetCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SetStickerPositionInSetCreateData,
      SetStickerPositionInSetCreateError
    >({
      path: `/setStickerPositionInSet`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
