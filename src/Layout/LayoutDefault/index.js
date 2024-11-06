import { Link, Outlet, useLocation } from "react-router-dom"
import { Button, Layout, Result } from "antd"
import "./style.scss"
import logo from "../../image/logoHome.svg"
import { useSelector } from "react-redux"
import { getCookie } from "../../cookies/cookies"
import Foooter from "../../Page/Footer"
function LayoutDefault() {
	const dataLogin = useSelector(state => state.loginReducer)

	const token = getCookie("token");
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<>
			<Layout className="layout-default">
				<header className="header">
					<div className="header__logo">
						<Link to={"/"}><img src={logo} /></Link>
					</div>
					<div className="header__center">
						<ul>
							{token && (
								<>
									<li className={currentPath === "/" ? "active" : ""}>
										<Link to="/">Home</Link>
									</li>
									<li className={currentPath === "/topic" ? "active" : ""}>
										<Link to="/topic">Topic</Link>
									</li>
									<li className={currentPath === "/quiz" ? "active" : ""}>

										<Link to="/quiz">Quiz</Link>
									</li>
									<li className={currentPath === "/answer" ? "active" : ""}>
										<Link to="/answer">Answer</Link>
									</li>
								</>
							)}
						</ul>
					</div>
					<div className="header__user">
						{token ? (
							<>
								<div className="header__user--login"><Button shape="round" ><Link to={'/logout'}>Đăng xuất</Link></Button></div>
							</>
						) : (
							<>
								<div className="header__user--login"><Button shape="round" ><Link to={'/login'}>Đăng nhập</Link></Button></div>
								<div className="header__user--register"><Button shape="round"><Link to={'/register'}>Đăng ký</Link></Button></div>
							</>
						)}

					</div>
				</header>
				<main>
					<Outlet />
				</main>
			
				{location.pathname === '/' && <Foooter/>}

			</Layout>
		</>
	);
}
export default LayoutDefault;