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
  AddStickerToSetCreateData,
  AddStickerToSetCreateError,
  AddStickerToSetCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AddStickerToSet<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to add a new sticker to a set created by the bot. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns *True* on success.
   *
   * @name AddStickerToSetCreate
   * @request POST:/addStickerToSet
   */
  addStickerToSetCreate = (
    data: AddStickerToSetCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<AddStickerToSetCreateData, AddStickerToSetCreateError>({
      path: `/addStickerToSet`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
