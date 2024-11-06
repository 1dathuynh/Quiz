import { get } from "../utils/request"

export const getResult = async (id) => {
	const result = await get(`answers?id=${id}`);
	return result;
}