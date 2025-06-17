export interface GetByTgIdParams {
  tgId: string;
}

export interface CreateParams {
  telegramId: string;
  firstName?: string;
  lastName?: string;
  language?: string;
}
