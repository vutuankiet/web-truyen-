import axios from "axios";
import {config} from "./config";

export const getAccessToken = async (props) => {
    const [email, password] = [props?.email || "", props?.password || ""]
    const res = await axios.post(`${config._API_URL}/auth/`, {email, password}).then((res) => {
        return res.data
    })
    if (Array.from(res.data).length > 0) {
        config._apiAccessToken = res.data[0]?.accessToken || ""
    }
}