import { getApiUrl } from "@/api/api";

export async function DeleteImc(imcId: string): Promise<boolean> { // Retorna um booleano
  const apiUrl = getApiUrl();
  if (!apiUrl) {
    console.error(
      "A variável de ambiente NEXT_PUBLIC_API_URI não está definida."
    );
    return false; // Retorna false em caso de erro na obtenção da URL
  }
  const url = `${apiUrl}/${imcId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Erro na requisição DELETE:", response.statusText);
      throw new Error(`Erro na requisição DELETE: ${response.statusText}`);
    }

    console.log("IMC excluído com sucesso!");
    return true; // Retorna true se a exclusão foi bem-sucedida
  } catch (error) {
    console.error("Erro ao excluir IMC:", error);
    return false; // Retorna false em caso de erro
  }
}
