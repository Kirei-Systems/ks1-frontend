import { useState, type ComponentProps } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import type { City, Region } from "~/api";

export interface FilterSectionProps extends ComponentProps<'section'> {
	regions: Region[]
	cities: City[]
}

export default function FilterSection({cities, ...props}: FilterSectionProps) {
	return (
		<section className="card bg-base-100">
			<div className="card-body ">
				<Input
					label="Busca inteligente por IA"
					placeholder="Descreva seu imóvel dos sonhos. Ex: 2 quartos, sala, suíte..."
				/>

				{/* Filtros principais */}
				<div className="grid grid-cols-5 gap-4 my-4">
					<Select
						name="category"
						label="Tipo de Imóvel"
						options={[
							{ value: "", label: "Todos" },
							{ value: "house", label: "Casa" },
							{ value: "apartment", label: "Apartamento" },
							{ value: "kitnet", label: "Kitnet" },
							{ value: "land", label: "Terreno" },
						]}
					/>

					<Select
						label="Negociação"
						options={[
							{ value: "", label: "Alugar ou comprar" },
							{ value: "aluguel", label: "Alugar" },
							{ value: "compra", label: "Comprar" },
						]}
					/>

					<Select
						label="Cidade"
						name="city"
						options={[
							{ value: "", label: "Qualquer região" },
							...cities.map((city) => ({value: city.hashid, label: city.name}))
						]}
					/>

					<Input
						name="min_price"
						placeholder="Ex: 500,00"
						label="Preço Mínimo"
					/>
				
					<Input
						placeholder="Ex: 2000,00"
						name="max_price"
						label="Preço Máximo"
					/>


					<Input
						label="Área mínima (m²)"
						placeholder="Ex: 60"
					/>

					<Select
						label="Quartos"
						options={[
							{ value: "", label: "Qualquer" },
							{ value: "1", label: "1" },
							{ value: "2", label: "2" },
							{ value: "3", label: "3" },
							{ value: "4", label: "4+" },
						]}
					/>

					<Select
						label="Banheiros"
						options={[
							{ value: "", label: "Qualquer" },
							{ value: "1", label: "1" },
							{ value: "2", label: "2" },
							{ value: "3", label: "3" },
							{ value: "4", label: "4+" },
						]}
					/>

					<Select
						label="Vagas de garagem"
						options={[
							{ value: "", label: "Qualquer" },
							{ value: "0", label: "Sem vaga" },
							{ value: "1", label: "1" },
							{ value: "2", label: "2" },
							{ value: "3", label: "3+" },
						]}
					/>

					<Select
						label="Mobilhado"
						options={[
							{ value: "", label: "Tanto faz" },
							{ value: "sim", label: "Mobiliado" },
							{ value: "nao", label: "Não mobiliado" },
						]}
					/>
				</div>
			</div>
		</section>
	);
}
