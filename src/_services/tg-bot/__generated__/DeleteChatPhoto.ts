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
  DeleteChatPhotoCreateData,
  DeleteChatPhotoCreateError,
  DeleteChatPhotoCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DeleteChatPhoto<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
   *
   * @name DeleteChatPhotoCreate
   * @request POST:/deleteChatPhoto
   */
  deleteChatPhotoCreate = (
    data: DeleteChatPhotoCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<DeleteChatPhotoCreateData, DeleteChatPhotoCreateError>({
      path: `/deleteChatPhoto`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
