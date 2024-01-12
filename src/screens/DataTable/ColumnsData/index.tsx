import { ColumnDef } from "@tanstack/react-table";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { UsersResponse } from "src/services/type/users";

export const columns: ColumnDef<UsersResponse>[] = [
    {
        accessorKey: "id",
        header: "Traking ID",
        cell: (info) => (
            <div className="text-center">{info.getValue() as string} </div>
        ),
    },
    {
        accessorKey: "code",
        header: "Code",
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: "first_name",
        header: "Fristname",
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: "last_name",
        header: "Lastname",
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: "company",
        header: "Company",
        enableSorting: false,
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: (info) => {
            return info.getValue() === true ? (
                <span
                    className="rounded-full px-4 py-2 text-xs font-medium"
                    style={{ color: "#1F9254", background: "#EBF9F1" }}
                >
                    Delivered
                </span>
            ) : (
                <span
                    className="rounded-full px-4 py-2 text-xs font-medium"
                    style={{ color: "#A30D11", background: "#FBE7E8" }}
                >
                    Canceled
                </span>
            );
        },
    },
    {
        accessorKey: "action",
        header: "Action",
        enableSorting: false,
        cell: () => {
            return (
                <div className="flex justify-center gap-1 items-center">
                    <FaEdit color="#624DE3" size={24} />
                    <BsTrash color="#A30D11" size={24} />
                </div>
            );
        },
    },
];
