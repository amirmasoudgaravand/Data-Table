import styles from "./styles.module.css";

type overLoadingProps = {
    isLoading: boolean;
};

const OverLoading = (props: overLoadingProps) => {
    return (
        <div className={`w-full  ${props.isLoading ? "block" : "hidden"}`}>
            <div id="loading-js">
                <div id="loadingTE" className={styles.spinnerContiner}>
                    <div
                        data-te-loading-icon-ref
                        className={styles.spinner}
                        role="status"
                    >
                        <span className="[&>svg]:w-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                />
                            </svg>
                        </span>
                    </div>
                    <span data-te-loading-text-ref>Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default OverLoading;
