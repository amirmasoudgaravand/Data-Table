import { BaseService } from "./base.service";

export class CrudService extends BaseService {
    get() {
        return this.axiosInstanceConfig.get(`${this.baseUrl}`);
    }
}
