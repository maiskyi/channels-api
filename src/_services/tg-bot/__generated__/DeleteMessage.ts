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
  DeleteMessageCreateData,
  DeleteMessageCreateError,
  DeleteMessageCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DeleteMessage<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to delete a message, including service messages, with the following limitations: \- A message can only be deleted if it was sent less than 48 hours ago. \- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago. \- Bots can delete outgoing messages in private chats, groups, and supergroups. \- Bots can delete incoming messages in private chats. \- Bots granted *can\_post\_messages* permissions can delete outgoing messages in channels. \- If the bot is an administrator of a group, it can delete any message there. \- If the bot has *can\_delete\_messages* permission in a supergroup or a channel, it can delete any message there. Returns *True* on success.
   *
   * @name DeleteMessageCreate
   * @request POST:/deleteMessage
   */
  deleteMessageCreate = (
    data: DeleteMessageCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<DeleteMessageCreateData, DeleteMessageCreateError>({
      path: `/deleteMessage`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
