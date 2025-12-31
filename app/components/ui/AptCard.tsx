import type { Apt } from "~/api";

export default function AptCard({ apt }: { apt: Apt }) {
	return (
		<div className="card bg-base-100">
			<figure className="h-40 bg-base-200 flex justify-center items-center">
				<span className="opacity-50 text-content-base-300 text-sm">
					Sem imagem disponível
				</span>
			</figure>

			<div className="card-body">
				<h3 className="card-title">{apt.value}</h3>

				<p>{apt.address.address}</p>
			</div>
		</div>
	);
}
