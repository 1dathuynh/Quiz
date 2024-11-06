import { useEffect, useState } from "react"
import { getAnswerByUserID } from "../../Services/answerService";
import { getCookie } from "../../cookies/cookies";
import { getListTopic } from "../../Services/topicService";
import { Badge, Button, Table } from "antd"
import { IoReload } from "react-icons/io5";
import { useNavigate } from "react-router-dom"

function Answer() {
	const userId = getCookie('id');
	const [dataAnswer, setDataAnswer] = useState([]);
	const navigate = useNavigate()
	useEffect(() => {
		const fetchAPI = async () => {
			const answer = await getAnswerByUserID(userId);
			const topic = await getListTopic();	
			let result = [];
			for (let i = 0; i < answer.length; i++) {
				const topicName = topic.find((item) => item.id === answer[i].topicId)

				result.push({
					...answer[i],
					name: topicName ? topicName.name : null 
				})
			}
			setDataAnswer(result);
		}
		fetchAPI();
	}, [])

	const handleClick = (e) => {
		
		navigate(`/quiz/${e}`)

	}
	const handleClickReload = (e) => {
		
		navigate(`/result/${e}`)
	}
	const columns = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Tên chủ đề',
			dataIndex: 'name',
			key: 'name',
			render: (_, tag) => (
				<>
					{tag.name === "HTML" && (
						<Badge status="success" text={tag.name} />
					)}
					{tag.name === "CSS" && (
						<Badge status="error" text={tag.name} />
					)}
					{tag.name === "Javascript" && (
						<Badge status="default" text={tag.name} />
					)}
					{tag.name === "Python" && (
						<Badge status="processing" text={tag.name} />
					)}
					{tag.name === "ReactJS" && (
						<Badge status="warning" text={tag.name} />
					)}
					{tag.name === "NodeJS" && (
						<Badge color="purple" text={tag.name} />
					)}
				</>
			)
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, tag) => (
				<>
					<Button onClick={() => handleClick(tag.topicId)}><IoReload />Làm lại</Button>
					<Button onClick={() => handleClickReload(tag.id)}><IoReload />Xem lại</Button>
				</>

			)
		}
	]
	
	return (
		<>
			<h3>Danh sách bài đã luyện tập</h3>
			<Table rowKey={"id"} dataSource={dataAnswer} columns={columns} />
		</>
	)
}
export default Answer;