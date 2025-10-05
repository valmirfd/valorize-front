import BaseApi from "@/services/api/BaseApi";


class ChurchesApi extends BaseApi {

    list() {
        return this.get('/churches/list');
    }

    create(church) {
        return this.post('/churches/create', church);
    }

    update(id, church) {
        return this.put(`/churches/update/${id}`, church);
    }

    destroy(id) {
        return this.delete(`/churches/destroy/${id}`);
    }
}

export default ChurchesApi;