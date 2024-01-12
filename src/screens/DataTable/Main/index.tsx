import { HeaderGroup, Row, flexRender } from "@tanstack/react-table";
import {
    BsFillArrowDownCircleFill,
    BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { FaSort } from "react-icons/fa";
import { UsersResponse } from "src/services/type/users";
import styles from "../style.module.css";

type mainProps = {
    getHeaderGroups: HeaderGroup<UsersResponse>[];
    getRowModel: Row<UsersResponse>[];
};

const Main = (props: mainProps) => {
    console.log("getHeaderGroups", props.getHeaderGroups);
    return (
        <div className="p-4">
            <table
                style={{ background: "#1D1E42" }}
                className="w-full text-left"
            >
                <thead>
                    {props.getHeaderGroups.map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className={styles.thWrapper}
                                >
                                    <div className={styles.thContiner}>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                        {
                                            {
                                                asc: (
                                                    <BsFillArrowUpCircleFill
                                                        className="cursor-text"
                                                        style={{
                                                            marginTop: "3px",
                                                        }}
                                                    />
                                                ),
                                                desc: (
                                                    <BsFillArrowDownCircleFill
                                                        className="cursor-text"
                                                        style={{
                                                            marginTop: "3px",
                                                        }}
                                                    />
                                                ),
                                            }[
                                                header.column.getIsSorted() as string
                                            ]
                                        }
                                        {header.column.getCanSort() ? (
                                            <span
                                                onClick={header.column.getToggleSortingHandler()}
                                            >
                                                {" "}
                                                <FaSort
                                                    size={16}
                                                    color="#9E9E9E"
                                                    style={{
                                                        marginTop: "3px",
                                                    }}
                                                />
                                            </span>
                                        ) : undefined}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {props.getRowModel.length ? (
                        props.getRowModel.map((row, i) => (
                            <tr
                                key={row.id}
                                style={{
                                    background: `${
                                        i % 2 === 0 ? "#26264F" : "#1D1E42"
                                    }`,
                                }}
                                className="h-16"
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-3.5 py-2">
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7} className="text-center pt-8 pb-8">
                                Not Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Main;
