import { post } from "../utils/request"
export const checkRegister = async (options) => {
	const result = await post('users', options)
	return result
}
