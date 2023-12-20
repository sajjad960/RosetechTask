
export interface Students {
  id: string;
  name: string;
  gender: string;
}

export interface FindAndCountResult {
  count: number;
  rows: Students[];
}