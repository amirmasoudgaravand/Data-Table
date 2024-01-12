import { ApiListResponseModel } from "../type/apiListResponse.model";
import { UsersResponse } from "../type/users";
import { CrudService } from "./crud.service";

export class UserService extends CrudService {
    getAllUser(): Promise<ApiListResponseModel<UsersResponse>> {
        return this.axiosInstance.get(
            "v1/3361b3fd-79ad-45c2-aba4-3ee66cc9230c",
        );
    }
}

export default new UserService();
