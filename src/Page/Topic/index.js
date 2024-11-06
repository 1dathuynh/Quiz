import { useEffect, useState } from "react"
import { getListTopic } from "../../Services/topicService";
import { Card } from "antd"
import { useNavigate } from "react-router-dom"
import img from "../../image/students-go-school-spring-background-with-various-stationery-books-vector-illustration_432516-3726.jpg"
import "./style.scss"
import { getQuestion } from "../../Services/quizService";
function Topic() {
	const navigate = useNavigate()
	const [dataTopic, setDataTopic] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const response = await getListTopic();

			setDataTopic(response);
		}
		fetchAPI()
	}, [])
	const handleClick = (id) => {
		navigate(`/quiz/${id}`)
	}
	return (
		<>
			<h2>Danh sách chủ đề</h2>
			<div className="card">
				{dataTopic.map((item) => (
					<Card onClick={() => handleClick(item.id)} key={item.id} className="card__item" title={item.name} hoverable bordered={true}>
						<img src={img} alt="demo" />
						<p className="card__item--nocontent">10 câu</p>
					</Card>
				))}
			</div>
		</>
	);
}
export default Topic;