export default function Navbar() {
	return (
		<nav className="z-10 sticky top-0 navbar px-4 bg-primary text-primary-content ">
			<section className="navbar-start">
				<div className="flex items-center gap-2">
					<img
						src="/images/logo.png"
						alt="Logo do site aluga ou compra imóveis. Encontre seu lugar ideal!"
						className="w-8"
					/>
					<span>
						<p className="text-xl font-bold">Aluga ou Compra</p>
						<p className="text-sm opacity-70">Encontre seu lar ideal</p>
					</span>
				</div>
			</section>
			<section className="navbar-center"></section>
			<section className="navbar-end"></section>
		</nav>
	);
}
