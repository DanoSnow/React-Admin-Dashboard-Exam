import restProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

const customDataProvider = (apiUrl) => {
    const dataProvider = restProvider(apiUrl);
    const order = { DESC: '-', ASC: ''};
    return {
        ...dataProvider,
        getList: async (resource, params) => {
            const response = await fetchUtils.fetchJson(`${apiUrl}/${resource}?_page=${params.pagination.page}&_per_page=${params.pagination.perPage}&_sort=${order[params.sort.order]}${params.sort.field}`);
            const total = await fetchUtils.fetchJson(`${apiUrl}/${resource}`);
            return {
                data: response.json.data,
                total: total.json.length
            };
        }
    }
}
export default customDataProvider;