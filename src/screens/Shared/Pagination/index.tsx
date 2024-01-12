import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type paginationProps = {
    pages: number[];
    currentPage: number;
    itemsPerPage: number;
    changeCurrentPage: (page: number) => void;
    previousPage: () => void;
    nextPage: () => void;
    getCanPreviousPage: boolean;
    getCanNextPage: boolean;
};

const Pagination = (props: paginationProps) => {
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleChangeCurrentPage = (page: number) => {
        props.changeCurrentPage(page);
    };

    const renderPageNumbers = props.pages.map((page) => {
        if (
            page + 1 < maxPageNumberLimit + 1 &&
            page + 1 > minPageNumberLimit
        ) {
            return (
                <span
                    role="list"
                    key={page}
                    onClick={() => {
                        if (page + 1 !== props.currentPage)
                            handleChangeCurrentPage(page);
                    }}
                    aria-current="page"
                    style={{
                        background:
                            props.currentPage === page + 1
                                ? "#624DE3"
                                : "#141432",
                    }}
                    className={styles.paginationBtn}
                >
                    {page + 1}
                </span>
            );
        } else {
            return undefined;
        }
    });

    const handleNextPage = (numberChangeCurrentPage?: number) => {
        if (!numberChangeCurrentPage) {
            props.nextPage();
        } else {
            handleChangeCurrentPage(numberChangeCurrentPage);
        }
        if (
            props.currentPage + 1 > maxPageNumberLimit ||
            numberChangeCurrentPage
        ) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePreviousPage = (numberChangeCurrentPage?: number) => {
        if (!numberChangeCurrentPage) {
            props.previousPage();
        } else {
            handleChangeCurrentPage(numberChangeCurrentPage);
        }
        if (
            (props.currentPage - 1) % pageNumberLimit == 0 ||
            numberChangeCurrentPage
        ) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn: JSX.Element = <></>;
    if (props.pages.length > maxPageNumberLimit) {
        pageIncrementBtn = (
            <span
                onClick={() => {
                    handleNextPage(5);
                }}
                className={styles.paginationBtn}
            >
                ...
            </span>
        );
    }

    let pageDecrementBtn: JSX.Element = <></>;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = (
            <span
                onClick={() => {
                    handlePreviousPage(4);
                }}
                className={styles.paginationBtn}
            >
                ...
            </span>
        );
    }

    useEffect(() => {
        // We need when change length items in page,
        handleChangeCurrentPage(0);
        setmaxPageNumberLimit(5);
        setminPageNumberLimit(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.itemsPerPage]);

    return (
        <div className={styles.paginationWrapper}>
            <nav className={styles.paginationContainer} aria-label="Pagination">
                <button
                    onClick={() => handlePreviousPage()}
                    disabled={props.getCanPreviousPage}
                >
                    {}
                    previous{" "}
                </button>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <button
                    onClick={() => handleNextPage()}
                    disabled={props.getCanNextPage}
                >
                    next{" "}
                </button>
            </nav>
        </div>
    );
};

export default Pagination;
