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
  UploadStickerFileCreateData,
  UploadStickerFileCreateError,
  UploadStickerFileCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UploadStickerFile<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to upload a .PNG file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api/#file) on success.
   *
   * @name UploadStickerFileCreate
   * @request POST:/uploadStickerFile
   */
  uploadStickerFileCreate = (
    data: UploadStickerFileCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UploadStickerFileCreateData,
      UploadStickerFileCreateError
    >({
      path: `/uploadStickerFile`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
