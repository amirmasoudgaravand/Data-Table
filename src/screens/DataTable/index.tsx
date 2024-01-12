import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useGetAllUsers } from "src/services/api/apiHook";
import { UsersResponse } from "src/services/type/users";
import Pagination from "../Shared/Pagination";
import { columns } from "./ColumnsData";
import Header from "./Header/Header";
import Main from "./Main";
import styles from "./style.module.css";
import OverLoading from "../Shared/OverLoading";

const DataTable = () => {
    const { data: allUsers, isLoading } = useGetAllUsers();
    const [data, setData] = useState<UsersResponse[]>([]);
    const [globalFilter, setGlobalFilter] = useState<string>();

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
        },
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    useEffect(() => {
        setData(allUsers || []);
    }, [allUsers]);

    return (
        <>
            <OverLoading isLoading={isLoading} />
            <div className={styles.continer} style={{ background: "#1D1E42" }}>
                <Header
                    globalFilter={globalFilter || ""}
                    pageSize={table.getState().pagination.pageSize}
                    changePageSize={(size) => table.setPageSize(size)}
                    changeGlobalFilter={(filter) => setGlobalFilter(filter)}
                />

                {/* Table  */}
                <Main
                    getHeaderGroups={table.getHeaderGroups()}
                    getRowModel={table.getRowModel().rows}
                />

                {/* pagination  */}
                {table.getRowModel().rows.length ? (
                    <div
                        style={{ background: "#1D1E42" }}
                        className={styles.paginationContiner}
                        role="list"
                    >
                        <Pagination
                            currentPage={
                                table.getState().pagination.pageIndex + 1
                            }
                            pages={table.getPageOptions()}
                            itemsPerPage={table.getState().pagination.pageSize}
                            changeCurrentPage={(page) => {
                                table.setPageIndex(page);
                            }}
                            nextPage={() => table.nextPage()}
                            previousPage={() => table.previousPage()}
                            getCanPreviousPage={!table.getCanPreviousPage()}
                            getCanNextPage={!table.getCanNextPage()}
                        />
                    </div>
                ) : undefined}
            </div>
        </>
    );
};

export default DataTable;
