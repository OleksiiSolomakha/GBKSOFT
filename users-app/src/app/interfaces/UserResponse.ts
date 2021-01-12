import {UserFull} from './UserFull';

export interface UserResponse {
  code: string;
  status: string;
  message: string;
  _meta: {
    pagination: Pagination
  };
}

export interface UserResponseArray extends UserResponse {
  result: UserFull[];
}

export interface UserResponseObject extends UserResponse {
  result: UserFull;
}

export interface Pagination {
  totalCount: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
}
