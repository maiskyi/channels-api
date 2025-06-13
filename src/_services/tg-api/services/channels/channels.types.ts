import { EntityLike } from 'telegram/define';

export interface SearchParams {
  take: number;
  query: string;
}

export interface GetByUsernameParams {
  username: string;
}

export interface GetRecommendationsParams {
  username: string;
}

export interface GetProfilePhotoParams {
  entity: EntityLike;
}
