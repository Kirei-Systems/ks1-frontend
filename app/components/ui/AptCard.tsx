import { Link } from "react-router";

interface AptManual {
  hashid: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  garages?: number;
  images?: any[]; 
  region?: {
      name: string;
      city?: {
          name: string;
          state: string;
      };
  };
  address?: {
    street?: string;
  };
}

const formatMoney = (value: number | null | undefined) => {
  if (value === null || value === undefined) return "Sob Consulta";
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export default function AptCard({ apt }: { apt: AptManual }) {
  
  // 1. Tratamento da Imagem
  const firstImage = apt.images?.[0];
  let imageUrl: string | undefined = undefined;

  if (typeof firstImage === 'string') {
    imageUrl = firstImage;
  } else if (typeof firstImage === 'object' && firstImage !== null) {
    imageUrl = firstImage.url || firstImage.image || firstImage.file;
  }

  // 2. Extraindo os Dados Puros
  const bairroNome = apt.region?.name;
  const cidadeNome = apt.region?.city?.name; 
  const estadoSigla = apt.region?.city?.state || "MG";
  const ruaNome = apt.address?.street;

  // 3. Definição do Título (Lógica em Cascata)
  let tituloPrincipal = "";
  let subtitulo = "";

  const temRua = ruaNome && ruaNome !== "Endereço não informado";
  const temBairro = bairroNome && bairroNome !== "- MG";

  if (temRua) {
      // CASO 1: Tem Rua
      tituloPrincipal = ruaNome;
      subtitulo = `${temBairro ? bairroNome : ''} ${temBairro && cidadeNome ? '-' : ''} ${cidadeNome || ''}`;
  } 
  else if (temBairro) {
      // CASO 2: Tem Bairro
      tituloPrincipal = bairroNome;
      subtitulo = `${cidadeNome || ''} - ${estadoSigla}`;
  } 
  else {
      // CASO 3: Só Cidade
      tituloPrincipal = cidadeNome || "";
      subtitulo = estadoSigla;
  }

  return (
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer border border-gray-100 flex flex-col h-full">
      
      {/* Imagem */}
      <div className="h-48 bg-gray-200 relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={tituloPrincipal}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
              if (e.currentTarget.parentElement) {
                 e.currentTarget.parentElement.innerText = "Imagem indisponível";
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-sm">Sem foto</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        {/* Preço */}
        <h3 className="text-2xl font-bold text-gray-800 mb-1">
          {formatMoney(apt.price)}
        </h3>

        {/* --- Endereço --- */}
        <div className="mb-4 h-12 flex flex-col justify-center"> 
          <p className="text-sm font-semibold text-gray-800 truncate" title={tituloPrincipal}>
            {tituloPrincipal}
          </p>
          <p className="text-xs text-gray-500 truncate">
            {subtitulo}
          </p>
        </div>

        {/* --- Ícones Detalhados (Texto + Emoji) --- */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4 mt-auto">
          {apt.bedrooms ? (
            <span className="flex items-center gap-1">
              🛏️ {apt.bedrooms} quartos
            </span>
          ) : null}
          
          {apt.bathrooms ? (
            <span className="flex items-center gap-1">
              🚿 {apt.bathrooms} banheiros
            </span>
          ) : null}
          
          {apt.garages ? (
            <span className="flex items-center gap-1">
              🚗 {apt.garages} vagas
            </span>
          ) : null}
        </div>
        {/* ----------------------------------------- */}

        <div className="border-t border-gray-100 pt-3">
          <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">
            Imóveis SJDR
          </p>
        </div>

      </div>
    </div>
  );
}