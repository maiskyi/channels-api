export interface GetByTidParams {
  tid: number;
}

export interface CreateParams {
  tid: number;
  firstName?: string;
  lastName?: string;
  language?: string;
}
