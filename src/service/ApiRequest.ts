const API_URL = 'http://localhost:3333';

export interface ApiQueryParams {
  [key: string]: string | number | boolean;
}

export const defaultRequestOptions: RequestOptions = {
  page: 1,
  _limit: 10,
};

export interface RequestOptions {
  page?: number;
  _limit?: number;
  rating_like?: string;
}

export async function apiRequest(
  endpoint: string,
  query: ApiQueryParams = {},
  options: RequestOptions = {}
) {
  try {
    const response = fetch(`${API_URL}/${endpoint}`);
    const data = await (await response).json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
