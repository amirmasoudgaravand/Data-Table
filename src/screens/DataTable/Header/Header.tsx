import { BsPlus } from "react-icons/bs";
import DebouncedInput from "../../Shared/DebouncedInput";
import styles from "./styles.module.css";

type headerProps = {
    pageSize: number;
    globalFilter: string;
    changePageSize: (size: number) => void;
    changeGlobalFilter: (filter: string) => void;
};

const Header = (props: headerProps) => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLeftSideContiner}>
                <label className="font-medium" htmlFor="select">
                    Show
                </label>
                <select
                    style={{
                        background: "#141432",
                        width: "43px",
                    }}
                    value={props.pageSize}
                    onChange={(e) => {
                        props.changePageSize(Number(e.target.value));
                    }}
                    className={styles.select}
                    id="select"
                >
                    {[10, 20, 30, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>

                <DebouncedInput
                    value={props.globalFilter || ""}
                    debounce={500}
                    onChangeValue={(value) => {
                        props.changeGlobalFilter(value);
                    }}
                />
            </div>

            <button
                style={{ background: "#624DE3" }}
                className={styles.btnWrapper}
                role="button"
            >
                <div className={styles.btnText}>
                    <BsPlus size={16} />
                    <span> Add Customer</span>
                </div>
            </button>
        </div>
    );
};

export default Header;
