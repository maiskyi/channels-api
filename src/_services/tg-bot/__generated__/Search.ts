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

import { ChannelsSearchData, ChannelsSearchParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Search<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Search
   * @name ChannelsSearch
   * @request GET:/api/search/channels
   */
  channelsSearch = (query: ChannelsSearchParams, params: RequestParams = {}) =>
    this.http.request<ChannelsSearchData, any>({
      path: `/api/search/channels`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
