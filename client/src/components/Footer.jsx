import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";

import { footerLinks1 } from "../constants/footer";

const SocialIcon = ({ link, icon }) => {
	const Icon = icon;

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="text-xl border p-2 rounded-full cursor-pointer hover:bg-neutral-50 hover:text-primary hover:border-primary"
		>
			<Icon />
		</a>
	);
};

const Footer = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto px-5 md:px-10 py-10">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
					<div className="flex flex-col gap-5 flex-1 w-full">
						<a href="/" className="uppercase hover:text-primary text-2xl md:text-3xl font-semibold md:mb-2">
							Epic Store.
						</a>
						<p className="text-sm md:text-base">
							There are many variations of passages of mens, womens, and babies
							and have Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Voluptates rerum id numquam, sequi totam sunt consectetur.
						</p>
						<div className="flex items-center gap-2">
							<SocialIcon
								link="https://github.com/NaseemKhan005"
								icon={FaGithub}
							/>
							<SocialIcon
								link="https://www.linkedin.com/in/naseemkhann"
								icon={FaLinkedin}
							/>
							<SocialIcon link="https://naseemkhan.vercel.app" icon={GiWorld} />
							<SocialIcon link="tel:+92 3444170400" icon={FaWhatsapp} />
						</div>
					</div>

					<div className="flex-1 w-full flex items-start gap-10">
						<div className="flex flex-col flex-1 w-full gap-3 capitalize">
							<h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-5">useful links</h2>
							{footerLinks1.map((link) => (
								<a
									key={link.id}
									href={link.link}
									target="_blank"
									rel="noreferrer"
									className="hover:underline hover:text-black/60"
								>
									{link.title}
								</a>
							))}
						</div>
						<div className="flex flex-col flex-1 w-full gap-3 capitalize">
							<h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-5">quick links</h2>
							{footerLinks1.map((link) => (
								<a
									key={link.id}
									href={link.link}
									target="_blank"
									rel="noreferrer"
									className="hover:underline hover:text-black/60"
								>
									{link.title}
								</a>
							))}
						</div>
					</div>

					<div className="flex-1 w-full flex flex-col gap-3">
						<h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-5 capitalize">contact</h2>
						<div className="flex flex-col gap-5">
							<div className="flex items-center gap-1">
								<span className="text-2xl">
									<IoMail />
								</span>
								<a href="mailto:naseemsaffy@gamil.com">naseemsaffy@gamil.com</a>
							</div>
							<div className="flex items-center gap-1 ml-0.5">
								<span className="text-xl">
									<ImPhone />
								</span>
								<a href="tel:+92 3444170400">+92 3444170400</a>
							</div>
							<div className="flex items-center gap-1">
								<span className="text-2xl">
									<IoLocationSharp />
								</span>
								<p>Shamsabad, 6th Road, Satellite Town, Rwp</p>
							</div>

							<div className="flex items-center gap-2">
								<img
									src="/assets/mastercard.png"
									alt="credit card"
									className="w-10 object-cover"
								/>
								<img
									src="/assets/paypal.png"
									alt="credit card"
									className="w-10 object-cover"
								/>
								<img
									src="/assets/visa.png"
									alt="credit card"
									className="w-10 object-cover"
								/>
								<img
									src="/assets/discover.png"
									alt="credit card"
									className="w-10 object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<p className="text-center border-t py-8 mt-8 md:mt-14 sm:text-base text-sm">
				copyright © {new Date().getFullYear()} - All rights reserved by{" "}
				<a
					href="https://naseemkhan.vercel.app"
					target="_blank"
					rel="noreferrer"
          className="hover:underline hover:text-primary"
				>
					Naseem Khan.
				</a>
			</p>
		</div>
	);
};

export default Footer;
