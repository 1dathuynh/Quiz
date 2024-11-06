function loginReducer(state=true, action) {
	
	switch (action.type) {
		case "CHECK_LOGIN":
			return !action.state
	
		default:
			return state;
	}
}
export default loginReducer;