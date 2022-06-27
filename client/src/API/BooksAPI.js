import axios from "axios";
import {config} from "./config";
import {getAccessToken} from "./AutoConfig";


export const create_book = async (props) => {
    await getAccessToken({email: 'dangkhanh.dev@gmail.com', password: '13122002'})
    const configs = {
        headers: {
            Authorization: `Bearer ${config._apiAccessToken}`
        }
    }
    let res = await axios.post(`${config._API_URL}/books/create`, {book: props},configs).then((res) => {
        return res.data
    })
    return res?.data
}