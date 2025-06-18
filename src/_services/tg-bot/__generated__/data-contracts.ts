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

export interface BotCommand {
  command: string;
  description: string;
}

export interface SetMyCommandsRequest {
  commands: BotCommand[];
  language_code?: string;
}

export interface SetMyNameRequest {
  name?: string;
  language_code?: string;
}

export interface ChannelItem {
  id: string;
  title: string;
  userName?: string;
  photo: string | null;
}

export interface GetChannelsResponse {
  total: number;
  data: ChannelItem[];
}

export interface GetChannelResponse {
  title: string | null;
  username: string;
  about: string;
  photo: string | null;
  isSubscribed: boolean;
  recommendations: ChannelItem[];
}

export interface GetSearchChannelsResponse {
  total: number;
  data: ChannelItem[];
}

export type SetMyCommandsData = boolean;

export type SetMyNameData = boolean;

export interface GetChannelsParams {
  take?: number;
  skip?: number;
}

export type GetChannelsData = GetChannelsResponse;

export type GetChannelData = GetChannelResponse;

export interface ChannelsSearchParams {
  take?: number;
  skip?: number;
  query: string;
}

export type ChannelsSearchData = GetSearchChannelsResponse;
