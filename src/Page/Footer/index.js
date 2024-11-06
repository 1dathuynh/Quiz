import "./style.scss"
function Foooter() {
	return (
		<>
			<footer className="footer">
				<div className="footer__contact">
					<h4 className="footer__contact--text">Thông tin liên hệ</h4>
					<p className="footer__contact--email">Email: info@tracnghiem.com</p>
					<p className="footer__contact--hotline">Hotline: 0123 456 789</p>
					<p className="footer__contact--diachi">Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
				</div>

				<div className="footer__clause">
					<h4 className="footer__clase--terms">Điều khoản sử dụng</h4>
					<p>
						<a className="footer__clase--policy" href="/privacy-policy">Chính sách bảo mật</a>
					</p>
					<p>
						<a className="footer__clase--terms-of-service" href="/terms-of-service">Điều khoản dịch vụ</a>
					</p>
					<p>
						<a className="footer__clase--faq" href="/faq">Câu hỏi thường gặp (FAQ)</a>
					</p>
				</div>
			</footer>
		</>
	);
}
export default Foooter;