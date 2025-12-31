import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function layout() {
	return (
		<div className="flex flex-col min-h-screen bg-base-300">
			<Navbar />
			<main className="flex-1 px-4">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
