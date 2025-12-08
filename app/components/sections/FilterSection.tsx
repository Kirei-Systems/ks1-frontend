import { useState } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";

export default function FilterSection() {
    const [type, setType] = useState("");
    const [transactionType, setTransactionType] = useState(""); // aluguel / compra
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [bedRooms, setBedRooms] = useState("");
    const [bathRooms, setBathRooms] = useState("");
    const [garageSpots, setGarageSpots] = useState("");
    const [furnished, setFurnished] = useState("");
    const [minArea, setMinArea] = useState("");
    const [lazer, setLazer] = useState("");

    return (
        <div className="p-8 mt-8 bg-zinc-50 rounded-lg shadow-md">
            <Input
                label="Busca inteligente por IA"
                placeholder="Descreva seu imóvel dos sonhos. Ex: 2 quartos, sala, suíte..."
                className="h-14"
            />

            {/* Filtros principais */}
            <div className="grid grid-cols-5 gap-4 my-4">
                <Select
                    label="Tipo de Imóvel"
                    name="tipo"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    options={[
                        { value: "", label: "Todos" },
                        { value: "casa", label: "Casa" },
                        { value: "apartamento", label: "Apartamento" },
                        { value: "kitnet", label: "Kitnet" },
                        { value: "sobrado", label: "Sobrado" },
                        { value: "terreno", label: "Terreno" },
                    ]}
                />

                <Select
                    label="Negociação"
                    name="negociacao"
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    options={[
                        { value: "", label: "Alugar ou comprar" },
                        { value: "aluguel", label: "Alugar" },
                        { value: "compra", label: "Comprar" },
                    ]}
                />

                <Select
                    label="Cidade / Bairro"
                    name="cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    options={[
                        { value: "", label: "Qualquer região" },
                        { value: "sao-joao-del-rei", label: "São João del Rei" },
                        // depois você pode popular isso dinamicamente
                    ]}
                />

                <Select
                    label="Faixa de preço"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    options={[
                        { value: "", label: "Qualquer valor" },
                        { value: "0-200000", label: "Até R$ 200.000" },
                        { value: "200000-400000", label: "R$ 200.000 a R$ 400.000" },
                        { value: "400000-600000", label: "R$ 400.000 a R$ 600.000" },
                        { value: "600000+", label: "Acima de R$ 600.000" },
                    ]}
                />

                <Input
                    label="Área mínima (m²)"
                    name="minArea"
                    type="number"
                    placeholder="Ex: 60"
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                />
            </div>

            {/* Filtros adicionais */}
            <div className="grid grid-cols-5 gap-4 mt-2">
                <Select
                    label="Quartos"
                    name="bedRooms"
                    value={bedRooms}
                    onChange={(e) => setBedRooms(e.target.value)}
                    options={[
                        { value: "", label: "Qualquer" },
                        { value: "1", label: "1+" },
                        { value: "2", label: "2+" },
                        { value: "3", label: "3+" },
                        { value: "4", label: "4+" },
                    ]}
                />

                <Select
                    label="Banheiros"
                    name="bathRooms"
                    value={bathRooms}
                    onChange={(e) => setBathRooms(e.target.value)}
                    options={[
                        { value: "", label: "Qualquer" },
                        { value: "1", label: "1+" },
                        { value: "2", label: "2+" },
                        { value: "3", label: "3+" },
                        { value: "4", label: "4+" },
                    ]}
                />

                <Select
                    label="Vagas de garagem"
                    name="garagem"
                    value={garageSpots}
                    onChange={(e) => setGarageSpots(e.target.value)}
                    options={[
                        { value: "", label: "Qualquer" },
                        { value: "0", label: "Sem vaga" },
                        { value: "1", label: "1+" },
                        { value: "2", label: "2+" },
                        { value: "3", label: "3+" },
                    ]}
                />

                <Select
                    label="Mobiliado"
                    name="mobiliado"
                    value={furnished}
                    onChange={(e) => setFurnished(e.target.value)}
                    options={[
                        { value: "", label: "Tanto faz" },
                        { value: "sim", label: "Mobiliado" },
                        { value: "nao", label: "Não mobiliado" },
                    ]}
                />
                <Select
                    label="Áreas de Lazer"
                    name="lazer"
                    value={lazer}
                    onChange={(e) => setLazer(e.target.value)}
                    options={[
                        { value: "", label: "Tanto faz" },
                        { value: "Sim", label: "Sim" },
                        { value: "Não", label: "Não" },
                    ]}
                />
            </div>
        </div>
    );
}
