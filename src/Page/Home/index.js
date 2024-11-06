import imgCenter from "../../image/public.avif"
import { DiYii } from "react-icons/di";
import "./style.scss"
function Home() {
	return (
		<>
			
			<div className="content-block">
				<div className="content-block__left">
					<h1>TRANG WEB TRẮC NGHIỆM LẬP TRÌNH ONLINE HOÀN TOÀN MIỄN PHÍ VÀ DỄ SỬ DỤNG</h1>
					<ul>
						<li className="check-list"></li>
						<li className="check-list"><span><DiYii /></span>Chấm bài hoàn toàn tự động</li>
						<li className="check-list"><span><DiYii /></span>Có thể làm lại nhiều lần và xem kết quả cũ</li>
						<li className="check-list"><span><DiYii /></span>Tích hợp Chat GPT giúp bạn tự động tạo câu hỏi trắc nghiệm</li>
						<li className="check-list"><span><DiYii /></span>Triển khai thi online hoặc làm bài thi online không cần cài đặt ứng dụng</li>
						<li className="check-list"><span><DiYii /></span>Đa dạng câu hỏi và được cập nhật hằng ngày</li>

					</ul>
				</div>
				<div className="content-block__right">
					<img src={imgCenter} alt="imgcenter" />
				</div>
			</div>

		</>
	);
}
export default Home;