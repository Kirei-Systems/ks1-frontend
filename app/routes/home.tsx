import { aptsList } from "~/api";
import AptSection from "~/components/sections/Aptsection";
import FilterSection from "~/components/sections/FilterSection";
import { useLoaderData } from "react-router";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// Chave copiada do seu print (para produção, depois usamos variáveis de ambiente)
const API_KEY = "A1KfuGuZ.Xu84YVWxhyPwRGSY1CQsRrszmWyskmHT";

export async function loader() {
  try {
    console.log("Iniciando loader..."); 
    
    // AQUI ESTÁ A MUDANÇA PRINCIPAL:
    // Passamos a chave dentro de um objeto de configuração
    const apts = await aptsList({
      headers: {
        "Authorization": `Api-Key ${API_KEY}`
      }
    });
    
    // Log para conferir no terminal se chegou certo
    console.log("Resposta da API:", JSON.stringify(apts, null, 2)); 

    const results = apts.data?.results;

    // Proteção: Se não vier um array, assumimos lista vazia para não travar a tela
    if (!Array.isArray(results)) {
      console.warn("Aviso: 'results' não é um array ou veio vazio.", apts);
      return { apts: [] };
    }

    return { apts: results };

  } catch (error) {
    console.error("❌ ERRO NO LOADER:", error);
    
    // Se der erro (ex: servidor desligado), retorna lista vazia para o site abrir
    return { apts: [] };
  }
}

export default function Home() {
  // Descomentei aqui para pegar os dados
  const { apts } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="py-4">
        <FilterSection />
        {/* Descomentei aqui para mostrar os imóveis */}
        <AptSection apts={apts}/>
      </div>
    </>
  );
}