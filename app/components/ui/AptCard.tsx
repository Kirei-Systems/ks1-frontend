import type { Apt } from "~/api";
import { useData } from "~/context";

export default function AptCard({ apt }: { apt: Apt }) {
	const TABELA: Record<string,string> = {
		house: "casa",
		land: "terreno",
		apartment: "apto"
	}
	const {regions} = useData()
	return (
		<div className="card bg-base-100">
			<figure className="h-40 bg-base-200 flex justify-center items-center">
				{apt.images ? (
					<img
						className="w-full h-full object-cover"
						alt=""
						src={apt.images[0]}
					/>
				) : (
					<span className="opacity-50 text-content-base-300 text-sm">
						Sem imagem disponível
					</span>
				)}
			</figure>

			<div className="card-body">
				<h3 className="card-title">{TABELA[apt.category] || apt.category} em {apt.region}</h3>

				<p>{apt.address.address}</p>
			</div>
		</div>
	);
}
