"use client";
import { IoSearchOutline } from "react-icons/io5";
import {
  AiOutlineSortDescending,
  AiOutlineSortAscending,
} from "react-icons/ai";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { useProfile } from "@/context";
import { useSession } from "@/hooks/useSession";
// import transactionData from "@/data/jsons/__transactions.json";

type Transaction = {
  // id: number;
  date: string;
  status: string;
  customer: string;
  purchased_property: string;
  revenue: string;
};

type Column = {
  header: string;
  accessorKey: keyof Transaction;
  footer: string;
};

const TransactionActivity = () => {
  // const { user }: any = useProfile();
  const { getSession } = useSession();
  const { token, userInfo } = getSession();
  const [data, setTransactionData] = useState<Transaction[]>([]);
  const [loaded, setIsLoaded] = useState(false);
  // const data: Transaction[] = useMemo(() => transactionData, []);
  // const data: Transaction[] = useMemo(() => )
  const { fetchData } = useFetch({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/host/get/transaction-history/${userInfo?.user_id}`,
    config: { headers: { Authorization: userInfo?.token } },
    queryKey: ["transactionHistory"],
    enabled: true,
  });
  useEffect(() => {
    const data = async () => {
      const result = await fetchData();
      setTransactionData(result.data);
      console.log(result.data, "Fetch Data");
      setIsLoaded(true);
    };

    data();
  }, [loaded]);
  // const data: Transaction[] = [];

  const columns: Column[] = [
    // {
    //   header: "Sr No",
    //   accessorKey: "id",
    //   footer: "id",
    // },
    {
      header: "Date",
      accessorKey: "date",
      footer: "date",
    },
    {
      header: "Status",
      accessorKey: "status",
      footer: "status",
    },
    {
      header: "Customer",
      accessorKey: "customer",
      footer: "customer",
    },
    {
      header: "Purchased",
      accessorKey: "purchased_property",
      footer: "purchased",
    },
    {
      header: "Revenue",
      accessorKey: "revenue",
      footer: "revenue",
    },
  ];

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="lg:mx-32 mx-4">
      <div>
        <button className="border-2 hover:bg-[#0057FF] hover:text-white rounded-full px-5 py-3 my-4">
          Back
        </button>
      </div>
      <div className="mt-4 flex lg:flex-row  flex-col lg:justify-between lg:gap-0 gap-8  mb-9">
        <p className="text-3xl font-semibold">Transaction Activity</p>
        <div className="flex items-center lg:w-48 w-96 gap-1">
          <input
            type="text"
            placeholder="Search by name"
            className="rounded-full w-full"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
          {/* <button className="border-none p-1">
            <IoSearchOutline className="w-8 h-8" />
          </button> */}
        </div>
      </div>
      {/* Table */}
      <div className="relative overflow-x-auto lg:w-full w-96 mb-2 shadow-sm sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#F0ECFC] dark:bg-gray-700 dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {{
                      asc: (
                        <AiOutlineSortAscending className="inline h-6 w-6" />
                      ),
                      desc: (
                        <AiOutlineSortDescending className="inline h-6 w-6" />
                      ),
                    }[header.column.getIsSorted() as string] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {!table.getRowModel().rows.length && (
              <p className="max-w-lg"> No Records found</p>
            )}
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center mb-8">
        {/* Previous Button */}
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
        >
          Previous
        </button>
        {/* Current Page */}
        <button
          onClick={() => {
            table.setPageIndex(table.getState().pagination.pageIndex + 1);
          }}
          className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
        >
          {table.getState().pagination.pageIndex + 1}
        </button>
        {/* Next Button */}
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionActivity;
