export interface AxiosParams {
  url: string;
  method: string;
  body?: Object;
  headers?: Object;
}

export const AXIOS_METHOD_TYPE = {
  get: "GET",
  post: "POST",
  delete: "DELETE",
  put: "PUT",
};
