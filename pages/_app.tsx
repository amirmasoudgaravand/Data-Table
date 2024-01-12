import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import "src/services/global.css";

const CustomApp = ({ Component, ...rest }: AppProps): ReactElement => {
    const client: QueryClient = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            <Component />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export default CustomApp;
