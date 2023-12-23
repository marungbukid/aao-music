"use client"

import {
  ColumnDef,
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from '@/models/paged';
import { debounce } from 'lodash';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[];
  pagination: Pagination;
}


export function DataTable<TData, TValue>({
  columns,
  data,
  pagination: apiPagination
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = React.useState<string>('');
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: apiPagination.currentPage - 1,
      pageSize: apiPagination.totalPages,
    });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    manualPagination: true,
    pageCount: apiPagination.totalPages,
  })

  const updateSearchParams = useCallback((query: string) => {
    router.push(pathname + '?' + new URLSearchParams({
      query
    }));
  }, []);
  const debouncedFetch = useMemo(() => debounce(updateSearchParams, 500), [updateSearchParams]);


  const handleQueryChange = (value: string) => {
    setQuery(value);
    debouncedFetch(value);
  };

  return (
    <div className='w-full'>
      <div className='flex items-center py-4 space-x-2'>
        <Input placeholder='Search'
          className='max-w-sm'
          value={query ?? ''}
          onChange={e => handleQueryChange(e.target.value)}
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className='flex items-center justify-between py-4'>
        <div className='text-sm text-muted-foreground'>
          Showing page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>

        <div className='space-x-2 '>
          <Link href={`${pathname}?page=${apiPagination.currentPage - 1}`}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
          </Link>
          <Link href={`${pathname}?page=${apiPagination.currentPage + 1}`}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </Link>
        </div>

      </div>
    </div>

  )
}