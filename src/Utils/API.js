import Prismic from 'prismic-javascript';

const API_DOMAIN    = 'example';
const API_ENDPOINT  = `https://${API_DOMAIN}.cdn.prismic.io/api/v2`;
// const API_TOKEN  = '';

class API {
    constructor () {
        this.Prismic = Prismic.getApi(API_ENDPOINT);
    }
}

export default (new API());