export interface GetByTgIdParams {
  telegramId: number;
}

export interface CreateParams {
  telegramId: number;
  firstName?: string;
  lastName?: string;
  language?: string;
}
