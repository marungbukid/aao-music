export type Pagination = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  hasNext: number;
  hasPrevious: number;
};

export type Paged<T> = {
  pagination: Pagination;
  data: T[];
};
