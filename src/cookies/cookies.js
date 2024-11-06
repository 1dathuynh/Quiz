export const setCookie = (cname, cvalue, exdays) => {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var path = "path=/",
			expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + path + ";" + expires;
}

/**
* @param string [cname] - Cookie name
*/
export const getCookie = (cname) => {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}
export const  deleteAllCookies = () => {
	document.cookie.split(';').forEach(cookie => {
			const eqPos = cookie.indexOf('=');
			const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
			document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
	});
}
export const generateToken = (n) => {
	var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	var token = '';
	for(var i = 0; i < n; i++) {
			token += chars[Math.floor(Math.random() * chars.length)];
	}
	return token;
}