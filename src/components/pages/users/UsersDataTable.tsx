import Link from "next/link";

import { User } from "@/types/data/user";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Eye } from "lucide-react";

import { Box } from "@/components/atoms/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/Table";

import styles from "./UsersDataTable.module.css";

const columns: ColumnDef<User>[] = [
  {
    header: "No.",
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Username",
    accessorKey: "username",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <Link href={`/users/${id}`} style={{ display: "flex", alignItems: "center" }}>
          <Eye size={16} style={{ marginRight: "0.25rem" }} />
          view
        </Link>
      );
    },
  },
];

interface Props {
  data: User[];
}

export const UsersDataTable = ({ data }: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map(row => (
            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} style={{ textAlign: "center" }}>
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
