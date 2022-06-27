import {getAccessToken} from "./AutoConfig";
import axios from "axios";
import {config} from "./config";

export const get_all_Categories = async () => {
    await getAccessToken({email: 'dangkhanh.dev@gmail.com', password: '13122002'})

    let categories = await axios.get(`${config._API_URL}/categories/api_token=${config._apiAccessToken}`).then((res) => {
        return res.data
    })
    return categories?.data
}