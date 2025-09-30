import BaseAuthApi from "@/services/api/BaseAuthApi";


class LoginApi extends BaseAuthApi {

    create(credentials) {
        return this.post('/login', credentials);
    }


}

export default LoginApi;