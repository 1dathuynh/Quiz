import { Button, Form, Input, message } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { MdEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import img  from "../../image/register.png"
import logo from "../../image/logoHome.svg"
import "./style.scss"
import { checkRegister } from "../../Services/registerService";
import { generateToken } from "../../cookies/cookies";
import { useNavigate } from "react-router-dom"
function Register() {
	const navigate = useNavigate()
	const handleFinish = (e) => {
		const options = {
			fullName: e.username,
      email: e.email,
      password: e.password,
      token: generateToken(15)
		}
		const fetchAPI = async () => {
			const response = await checkRegister(e);
			if(response){
				message.success("Bạn đã đăng ký thành công!", [5])
				navigate('/login')
			}
			
		}
		fetchAPI();
	}
	return (
		<>
			<div className="register">
				<div className="register__img">
					<img src={img} alt="register" />
				</div>
				<div className="register__form">
					<Form name="register" onFinish={handleFinish}>
						<div className="register__form--text">ĐĂNG KÝ</div>
						<img className="register__form--logo" src={logo} alt="logo"/>
						<Form.Item name={"username"}>
							<Input className="register__form--input" type="text" prefix={<UserOutlined />} placeholder="Username" />
						</Form.Item>
						<Form.Item name={"email"}>
							<Input className="register__form--input" type="email" prefix={<MdEmail />} placeholder="Email" />
						</Form.Item>
						<Form.Item name={"password"}>
							<Input className="register__form--input" type="password" prefix={<PiPasswordFill />} placeholder="Password" />
						</Form.Item>
						<Form.Item>
							<Button htmlType="submit" className="register__form--button">Đăng ký</Button>
						</Form.Item>
					</Form>

				</div>

			</div>
		</>
	);
}
export default Register;