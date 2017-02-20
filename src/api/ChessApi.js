import axios from 'axios';

export default () => {
    const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://local.quadminds.com/erp_chess' : '/erp_chess/api';

    return {
        fetchChessList: () => axios.get(`${ROOT_URL}/chess/`)
    }
}
