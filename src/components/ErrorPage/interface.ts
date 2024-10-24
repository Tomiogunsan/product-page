export interface IErrorPageResponse {
  status: number;
  statusText: string;
  internal: true;
  data: string;
  error: {
    stack: string;
    message: string;
  };
}
