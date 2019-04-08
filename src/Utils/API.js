import axios from 'axios';

class API {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://localhost:5000/',
            timeout: 5000
        });
    }

    Get(path) {
        // FIXME
    }
}

export default new API();
