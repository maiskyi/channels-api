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
  GetUserProfilePhotosCreateData,
  GetUserProfilePhotosCreateError,
  GetUserProfilePhotosCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GetUserProfilePhotos<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api/#userprofilephotos) object.
   *
   * @name GetUserProfilePhotosCreate
   * @request POST:/getUserProfilePhotos
   */
  getUserProfilePhotosCreate = (
    data: GetUserProfilePhotosCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      GetUserProfilePhotosCreateData,
      GetUserProfilePhotosCreateError
    >({
      path: `/getUserProfilePhotos`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
