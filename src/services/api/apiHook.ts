import { useQuery } from "@tanstack/react-query";
import UserService from "./user.service";

const useGetAllUsers = () => {
    return useQuery({
        queryKey: ["Users"],
        queryFn: async function () {
            const data = await UserService.getAllUser();
            return data.data;
        },
    });
};

export { useGetAllUsers };
