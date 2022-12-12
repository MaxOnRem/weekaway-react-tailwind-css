const Hero = () => {
	return (
		<section className="w-full h-[90vh]">
			<img
				src="https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg?auto=compress&cs=tinysrgb&w=1600"
				alt="beach"
				className="w-full h-full object-cover"
			/>
			<div className="max-w-[1140px] m-auto">
				<div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
					<h1 className="font-bold text-4xl">Find Your Special Trip</h1>
					<h2 className="text-4xl py-4 italic">With weekaway</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corrupti corporis ratione dolores veritatis quam non at
						explicabo, culpa laboriosam quidem illum, magni dignissimos
						delectus enim. Molestias distinctio aliquam deleniti cum!
						Quas, consequuntur illum? Minima sequi quibusdam esse fuga
						sapiente minus nam alias reprehenderit eos quasi culpa, ex sit
						officia ab libero?{' '}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
