import { get, post } from "../utils/request"
export const getQuestion = async () => {
	const result =  await get(`question`)
	return result
}

export const getQuestionByTopicId = async (id) => {
	const result = await get(`question?topicId=${id}`)
	return result
}
export const postQuiz = async (option) => {
	const result = await post('answers', option)
	return result
}