import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResult } from "../../Services/resultService";
import { getQuestionByTopicId } from "../../Services/quizService"
import "./style.scss"
function Register() {
	const param = useParams();
	const [dataResult, setDataResult] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const result = await getResult(param.id)
			const question = await getQuestionByTopicId(result[0].topicId)
			let res = [];
			for(let i = 0; i < question.length; i++){
				res.push({
					...question[i],
					...result[0].answer.find((item) => item.questionID === question[i].id)
				})
			}
			setDataResult(res)
		}
		fetchAPI();
	}, [])
	
	return(
		<>
			<div className="quiz">
				<form>
					{dataResult.map((item, index) => (
						<div key={item.id} className="form__item">
							<h3>Câu {index + 1}. {item.question} {item.answer === item.correctAnswer ? (<span className="span--true"> Đúng</span>) : (<span className="span--false"> Sai</span>)}</h3>
							{item.answers.map((itemAns, indexAns) => {
								let checked = false;
								let className = "";
								if(indexAns === item.answer){
									checked = true;
									className = "item__selected";
								}
								if(item.answer === item.correctAnswer){
									className += "--true"
								}
								return (
									<div className="form__item--answer" key={indexAns}>
									<input
										type="radio"
										value={item.ans}
										disabled
										checked={checked}
									/>
									<label className={className}>{itemAns}</label>
								</div>
								)
							})}
						</div>
					))}
				</form>
			</div>
		</>
	);
}
export default Register;