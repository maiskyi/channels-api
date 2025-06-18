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
  CreateNewStickerSetCreateData,
  CreateNewStickerSetCreateError,
  CreateNewStickerSetCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CreateNewStickerSet<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Returns *True* on success.
   *
   * @name CreateNewStickerSetCreate
   * @request POST:/createNewStickerSet
   */
  createNewStickerSetCreate = (
    data: CreateNewStickerSetCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CreateNewStickerSetCreateData,
      CreateNewStickerSetCreateError
    >({
      path: `/createNewStickerSet`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
