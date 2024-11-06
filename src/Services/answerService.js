import { get } from "../utils/request"
export const getAnswerByUserID = async (userID) => {
	const result =  await get(`answers?userID=${userID}`)
	return result;
}