import type { Apt } from "~/api";
import AptCard from "../ui/AptCard";

export default function AptSection({ apts }: { apts: Apt[] }) {

    return (
        <section>
            <h1 className="text-2xl font-bold mb-4">Imóveis Disponíveis</h1>

            {apts.length === 0 ? (
                <p>Nenhum imóvel encontrado.</p>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                    {apts.map((apt) => (
                        <AptCard key={apt.hashid} apt={apt} />
                    ))}
                </div>
            )}
        </section>
    );
}