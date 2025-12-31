import { Instagram, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="h-18 flex flex-col items-center justify-center gap-2 px-2 py-4 shadow-md mt-4 bg-base-100">
			<p className="text-center text-sm opacity-70">
				&copy; 2025 Aluga ou Compra.
			</p>

			<div className="flex gap-4">
				<a
					href="https://instagram.com/seu_usuario_aqui"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 opacity-80 hover:opacity-100 transition"
				>
					<Instagram size={18} />
					<span className="text-sm">Instagram</span>
				</a>

				<a
					href="mailto:seuemail@exemplo.com"
					className="flex items-center gap-1 opacity-80 hover:opacity-100 transition"
				>
					<Mail size={18} />
					<span className="text-sm">E-mail</span>
				</a>
			</div>
		</footer>
	);
}
