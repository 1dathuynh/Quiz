import { Flex, Form, Input, Button, Alert, message } from "antd"
import image from "../../image/Mobile login-rafiki.svg"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { setCookie } from "../../cookies/cookies"
import "./style.scss"
import logo from "../../image/logoHome.svg"
import Link from "antd/es/typography/Link"
import { LoginAction } from "../../Action/loginAction"
import { checkLogin } from "../../Services/loginService"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"
function Login() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [loginSuccess, setLoginSuccess] = useState(false);
	const handleFinish = (e) => {
		const fetchAPI = async () => {
			const response = await checkLogin(e.username, e.password)
			if (response.length) {
				setLoginSuccess(true);

				setCookie("fullName", response[0].fullName, 10);
				setCookie("id", response[0].id, 10);
				setCookie("email", response[0].email, 10);
				setCookie("token", response[0].token, 10);
				dispatch(LoginAction(true));
				message.success("Đăng nhập thành công!");
				navigate('/', {state: {loginSuccess : true}});
			} else{
				message.error("Đăng nhập thất bại!");
			}
		}
		fetchAPI();
	}
	return (
		<>
		{loginSuccess && <Alert message="Đăng nhập thành công!" type="success" showIcon />}

			<div className="login">
				<div className="form">
					<Form onFinish={handleFinish} name="login">
						<div className="logo"><img src={logo}/></div>
						<Form.Item name={"username"}>
							<Input className="input_login" type="email" prefix={<UserOutlined />} placeholder="Email" />
						</Form.Item>
						<Form.Item name={"password"}>
							<Input className="input_login" type="password" prefix={<LockOutlined />} placeholder="Password" />
						</Form.Item>
						<Form.Item>
							<Flex justify="right" align="center">
								<Link href="">Quên mật khẩu</Link>
							</Flex>
						</Form.Item>
						<Form.Item className="form-item-register">
							<Button className="buttonLogin" block type="primary" htmlType="submit">
								Đăng nhập
							</Button>
							Bạn chưa có tài khoản ? <Link href="/register">Đăng ký ngay!</Link>
						</Form.Item>
					</Form>
				</div>
				<div className="image">
					<img src={image} alt="img" />
				</div>
			</div>
		</>
	);
}
export default Login;
