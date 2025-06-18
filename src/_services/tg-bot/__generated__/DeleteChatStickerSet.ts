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
  DeleteChatStickerSetCreateData,
  DeleteChatStickerSetCreateError,
  DeleteChatStickerSetCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DeleteChatStickerSet<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\_set\_sticker\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success.
   *
   * @name DeleteChatStickerSetCreate
   * @request POST:/deleteChatStickerSet
   */
  deleteChatStickerSetCreate = (
    data: DeleteChatStickerSetCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DeleteChatStickerSetCreateData,
      DeleteChatStickerSetCreateError
    >({
      path: `/deleteChatStickerSet`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
