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
  ExportChatInviteLinkCreateData,
  ExportChatInviteLinkCreateError,
  ExportChatInviteLinkCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ExportChatInviteLink<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as *String* on success.
   *
   * @name ExportChatInviteLinkCreate
   * @request POST:/exportChatInviteLink
   */
  exportChatInviteLinkCreate = (
    data: ExportChatInviteLinkCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ExportChatInviteLinkCreateData,
      ExportChatInviteLinkCreateError
    >({
      path: `/exportChatInviteLink`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
