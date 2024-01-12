import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./styles.module.css";

type debouncedInputProps = {
    value: string;
    debounce: number;
    onChangeValue: (value: string) => void;
};
const DebouncedInput = (props: debouncedInputProps) => {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    // after set value in state
    useEffect(() => {
        const timeout = setTimeout(() => {
            props.onChangeValue(value.trimStart().trimEnd());
        }, props.debounce);
        return () => clearTimeout(timeout);
    }, [props, value]);

    return (
        <>
            <span className="font-medium">entries</span>
            <div className={styles.inputWrapper}>
                <BsSearch size={16} />
                <input
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    className={styles.inputSearch}
                    placeholder="Search..."
                />
            </div>
        </>
    );
};

export default DebouncedInput;
