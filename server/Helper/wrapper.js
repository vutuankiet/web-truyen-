import {ReturnWrapper} from "./err.js";

export const AsyncWrapper = async (callback, ...params) => {
    try {
        return await callback(params)
    } catch (e) {
        return ReturnWrapper(404, "Fetch Data Failed!", [])
    }
}
