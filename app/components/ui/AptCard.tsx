import type { Apt } from "~/api";


export default function AptCard({
    apt
}: { apt: Apt }) {
    return (
        <div className="w-full max-w-sm rounded-xl shadow-md bg-white overflow-hidden">
            <div className="h-40 bg-gray-200 flex justify-center items-center text-gray-500 text-sm">
                {apt.images.length > 0 ? (
                    <img
                        src={apt.images[0].image}
                    />
                ) : (
                    <span>Sem imagem disponível</span>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{apt.price}</h3>

                <p className="text-sm text-gray-800">{apt.address.street}</p>
                {/* <p className="text-sm text-gray-600 mb-3">{city}</p> */}

                {/* <div className="flex text-sm text-gray-700 gap-4 mb-3">
                    <span>{bedrooms} quartos</span>
                    <span>{bathrooms} banheiros</span>
                    <span>{parking} vagas</span>
                </div> */}

                {/* <p className="text-sm font-medium text-gray-800">{agency}</p> */}
            </div>
        </div>
    )
}
