import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Topic from "../Page/Topic";
import Quiz from "../Page/Quiz";
import Result from "../Page/Result";
import Logout from "../Page/Logout";
import Answer from "../Page/Answer";
import PrivateRoute from "../components/PrivateRoute"
import LayoutDefault from "../Layout/LayoutDefault";
export const routes = [
	{
		path: "/",
		element: <LayoutDefault />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/login",
				element: <Login />
			},
			{
				path: "/register",
				element: <Register />
			},
			{
				path: "/logout",
				element: <Logout />
			},
			{
				element: <PrivateRoute />,
				children: [
					{
						path: "/topic",
						element: <Topic />
					},
					{
						path: "/quiz/:id",
						element: <Quiz />
					},
					{
						path: "/answer",
						element: <Answer />
					},
					{
						path: "/result/:id",
						element: <Result />
					},
					
				]
			}
		]
	}
]