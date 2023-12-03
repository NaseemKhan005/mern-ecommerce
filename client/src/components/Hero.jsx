import { useRef } from "react";
// import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Button from "./common/Button";
import { bannerData } from "../data";

const Slider = ({ img, saleName, title, desc, link }) => {
	return (
		<div className="h-screen w-screen flex items-center md:flex-row flex-col gap-5 md:gap-10 relative">
			<div className="flex-1 h-full w-full">
				<img
					src={img}
					alt="banner"
					className="h-full w-full object-cover object-top"
				/>
			</div>
			<div className="flex-1 uppercase w-full">
				<div className="w-full flex flex-col gap-3	">
					<h2 className="text-secondary text-6xl font-['clicker_script'] capitalize">
						{saleName}
					</h2>
					<h1 className="text-5xl capitalize font-semibold">{title}</h1>
					<p className="text-lg text-black/70 w-[90%]">{desc}</p>
					{/* <Link to={link}> */}
					<Button
						text="SHOP NOW"
						className="uppercase w-40 text-[1rem] font-medium py-4 px-12 rounded-none bg-primary text-white hover:bg-transparent hover:text-secondary hover:border-secondary border border-transparent "
					/>
					{/* </Link> */}
				</div>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className="w-screen h-screen flex relative items-center justify-between">
			<div className="h-full w-screen">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					modules={[Pagination, Autoplay]}
					className="mySwiper cursor-pointer"
				>
					{bannerData.map((data) => (
						<div key={data.id} className="w-screen">
							<SwiperSlide>
								<Slider
									img={data.img}
									title={data.title}
									saleName={data.saleName}
									desc={data.desc}
									link={data.link}
								/>
							</SwiperSlide>
						</div>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Hero;
