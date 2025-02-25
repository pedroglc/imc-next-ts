import { getApiUrl } from "@/api/api";
import { classifyImc } from "./imcClassification";


export async function EditImc(_idEdit: string, nomeEdit: string, pesoEdit: number, alturaEdit: number): Promise<boolean>{
    const apiUrl = getApiUrl();
    if (!apiUrl) {
    console.error(
      "A variável de ambiente NEXT_PUBLIC_API_URI não está definida."
    );
    return false; // Retorna false em caso de erro na obtenção da URL
  }
  const url = `${apiUrl}`;

   
  const imc = pesoEdit / (alturaEdit * alturaEdit);  // Cálculo do IMC
  const classificacao1 = classifyImc(imc);  // Classifica o IMC

  const data = {
    _id: _idEdit,
    nome: nomeEdit,
    peso: pesoEdit,
    altura: alturaEdit,
    imc: parseFloat(imc.toFixed(2)),
    classificacao: classificacao1,
  };

  try{
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        console.error("Erro na requisição EDITAR:", response.statusText);
        throw new Error(`Erro na requisição EDITAR: ${response.statusText}`);
      }
      console.log("Imc alterado com sucesso!")
      return true; // Retorna true se a exclusão foi bem-sucedida
  }catch (error) {
    console.error("Erro ao editar IMC:", error);
    return false; // Retorna false em caso de erro
  }

}
