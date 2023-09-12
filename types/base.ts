export interface TBase {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface TMessage {
  status: string;
  code: number;
  messages: string[];
}


export interface TSelect {
  value: number | string;
  label: string;
}

export interface TError404 {
  statusCode: number;
  message: string;
  url: string;
}