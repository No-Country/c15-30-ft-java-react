"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { textBold } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import data from "../../constants/MOCK_DATA.json";
import { Card } from "../ui/card";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left flex gap-2 hover:bg-secondary cursor-pointer px-2"
        >
          <p>Status</p>
          <ArrowUpDown className="ml-2" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={
          row.getValue("status") === "Mr"
            ? cn(textBold.className, "capitalize text-left text-green-400")
            : row.getValue("status") === "Ms"
            ? cn(textBold.className, "capitalize text-left text-yellow-400")
            : row.getValue("status") === "Dr"
            ? cn(textBold.className, "capitalize text-left text-gray-400")
            : row.getValue("status") === "Honorable"
            ? cn(textBold.className, "capitalize text-left text-red-400")
            : "capitalize text-left"
        }
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "avatar",
    header: ({ column }) => {},
    cell: ({ row }) => (
      <div className="lowercase text-left font-medium">
        {/* eslint-disable */}
        <img
          src={row.getValue("avatar")}
          alt="img avatar"
          width={50}
          height={50}
        />
        {/* eslint-enable */}
      </div>
    ),
  },
  {
    accessorKey: "usuario",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left flex gap-2 hover:bg-secondary cursor-pointer px-2"
        >
          <p>Usuario</p>
          <ArrowUpDown className="ml-2" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-left font-medium">
        <p className="text-left">{row.getValue("usuario")}</p>
      </div>
    ),
  },
  {
    accessorKey: "repositorio",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left flex gap-2 hover:bg-secondary cursor-pointer px-2"
        >
          <p>Repositorio</p>
          <ArrowUpDown className="ml-2" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("repositorio")}</div>
    ),
  },
  {
    accessorKey: "descripcion",
    header: ({ column }) => <div className="text-left">Titulo</div>,
    cell: ({ row }) => (
      <div className="lowercase text-left font-medium flex">
        <p className="line-clamp-1">
          {row.getValue("descripcion").split(" ").splice(0, 6)}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "fecha_limite",
    header: () => <div className="text-left">Fecha_limite</div>,
    cell: ({ row }) => {
      const Fecha_limite = row.getValue("fecha_limite");
      const fechaLimiteString = Fecha_limite;
      const fechaLimite = new Date(fechaLimiteString);
      const opcionesDeFormato = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formatted = fechaLimite.toLocaleDateString(
        "es-ES",
        opcionesDeFormato
      );
      return (
        <div className="text-left font-medium">
          {row.getValue("fecha_limite").split("")}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Gestion</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(data.id)}
            >
              Copiar id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>A</DropdownMenuItem>
            <DropdownMenuItem>B</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function WorkspaceTable({ className }) {
  const { toast } = useToast();
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
  });

  const gestionar = () => {
    const selected = table.getFilteredSelectedRowModel();
    if (selected.rows.length <= 0)
      toast({
        variant: "destructive",
        title: "Selecciona una columna",
        description:
          "Debes seleccionar como mínimo una tarea para gestionarla.",
        action: <ToastAction altText="Deshacer">Entendido</ToastAction>,
      });
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-left py-4">
        <Input
          placeholder="Filtrar repositorio..."
          value={table.getColumn("repositorio")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("repositorio")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div>
          <h2 className={cn(textBold.className)}>Tareas</h2>
          <p className="text-sm text-gray-400">
            Administra y gestiona las tareas que tienes asignadas
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columnas <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Card className="rounded-[25px] shadow-sm overflow-auto max-h-[500px]">
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
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected... "}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-left">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
      <div className="flex items-left justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} fila(s) seleccionada(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="md"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
          </Button>
          <Button variant="" size="" onClick={gestionar}>
            Gestionar
          </Button>
        </div>
      </div>
    </div>
  );
}
