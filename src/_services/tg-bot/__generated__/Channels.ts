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
  GetChannelData,
  GetChannelsData,
  GetChannelsParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Channels<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Channels
   * @name GetChannels
   * @request GET:/api/channels
   */
  getChannels = (query: GetChannelsParams, params: RequestParams = {}) =>
    this.http.request<GetChannelsData, any>({
      path: `/api/channels`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Channels
   * @name GetChannel
   * @request GET:/api/channels/{username}
   */
  getChannel = (username: string, params: RequestParams = {}) =>
    this.http.request<GetChannelData, any>({
      path: `/api/channels/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
