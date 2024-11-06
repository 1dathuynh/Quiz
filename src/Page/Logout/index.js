import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../cookies/cookies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../Action/loginAction";

function Logout() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		deleteAllCookies();
		dispatch(LoginAction(false));
		navigate('/');
	}, [])
	return (
		<>
		</>
	);
}
export default Logout;