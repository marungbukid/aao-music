export type Pagination = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
};

export type Paged<T> = {
  pagination: Pagination;
  data: T[];
};
