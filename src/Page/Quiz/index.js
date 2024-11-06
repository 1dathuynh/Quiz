import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons"
import { getQuestionByTopicId, postQuiz } from "../../Services/quizService";
import { getListTopic } from "../../Services/topicService";
import { getCookie } from "../../cookies/cookies"
import Error404 from "../Erorr404";
import "./style.scss"
function Quiz() {
	const userId = getCookie("id");
	const param = useParams();
	if (!param) {
		<Error404 />
	}
	const navigate = useNavigate();
	const [dataQuestion, setDataQuestion] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const question = await getQuestionByTopicId(param.id)
			const topic = await getListTopic();
			const result = [];
			for (let i = 0; i < question.length; i++) {
				const topicInfo = topic.find((item) => item.id === question[i].topicId);
				result.push({
					...question[i],
					topicName: topicInfo ? topicInfo.name : null
				})
			}
			setDataQuestion(result);

		}
		fetchAPI();
	}, [param.id, navigate])

	const handleSubmit = async (e) => {
		e.preventDefault();
		let options = {};
		let answer = [];
		for (let i = 0; i < e.target.elements.length; i++) {
			const element = e.target.elements[i];
			if (element.type === 'checkbox' || element.type === 'radio') {
				if (element.checked) {
					answer.push({
						questionID: parseInt(element.name),
						answer: parseInt(element.value)
					})
				}
			}
		}
		options = {
			userID: parseInt(userId),
			topicId: parseInt(param.id),
			answer: answer
		}
		const response = await postQuiz(options);
		if (response) {
			navigate(`/result/${response.id}`)
		}
	}
	return (
		<>
			<div className="quiz">
				<h2>Bài quiz chủ đề {dataQuestion && (dataQuestion[0]?.topicName)}</h2>
				<form onSubmit={handleSubmit}>
					{dataQuestion.map((item, index) => (
						<div key={item.id} className="form__item">
							<h3>Câu {index + 1}. {item.question}</h3>
							{item.answers.map((itemAns, indexAns) => (
								<div className="form__item--answer" key={indexAns}>
									<input
										type="radio"
										id={`html-${item.id}-${indexAns}`}
										name={item.id}
										value={indexAns}
									/>
									<label className="quiz__label" htmlFor={`html-${item.id}-${indexAns}`}>{itemAns}</label>
								</div>
							))}
						</div>
					))}
					<Button shape="default" size="small" htmlType="submit" type="primary"><SendOutlined />Hoàn thành</Button>
				</form>
			</div>
			
		</>
	);
}
export default Quiz;