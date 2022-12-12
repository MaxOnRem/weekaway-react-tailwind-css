import { BsChatSquareDots } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className="max-w-[1140px] w-full py-8 m-auto border-t-4">
			<div className="flex items-center justify-center m-auto">
				<BsChatSquareDots
					size={30}
					className="text-[var(--primary-dark)] mr-2"
				/>
				<h1 className="uppercase text-xl font-bold text-gray-700">
					Weekaway
				</h1>
			</div>
		</footer>
	);
};

export default Footer;
