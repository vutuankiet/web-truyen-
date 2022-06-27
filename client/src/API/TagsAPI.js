import {getAccessToken} from "./AutoConfig";
import axios from "axios";
import {config} from "./config";

export const get_all_tags = async () => {
    await getAccessToken({email: 'dangkhanh.dev@gmail.com', password: '13122002'})
    let tags = await axios.get(`${config._API_URL}/tags/api_token=${config._apiAccessToken}`).then((res) => {
        return res.data
    })
    return tags?.data
}