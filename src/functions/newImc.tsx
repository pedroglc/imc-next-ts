'use server'
import { getApiUrl } from "@/api/api";
import { revalidatePath } from "next/cache";
import {z} from 'zod';
import { classifyImc } from "./imcClassification";

export async function newImc(prevState: {
  message: string;
},
formData: FormData,
) {
  const peso1 = parseFloat(formData.get("peso") as string);  
  const altura1 = parseFloat(formData.get("altura") as string);  
  const imc = peso1 / (altura1 * altura1);  // Cálculo do IMC
  const classificacao1 = classifyImc(imc);  // Classifica o IMC

  const schema = z.object({
    nome: z.string(),
    peso: z.number(),
    altura: z.number(),
    imc: z.number(),
    classificacao: z.string(),
  });  
  const parse = schema.safeParse({
    nome: formData.get("nome"),
    peso: peso1,  
    altura: altura1,  
    imc: parseFloat(imc.toFixed(2)),
    classificacao: classificacao1,
  });

  if (!parse.success) {
    console.error("Validation error:", parse.error);
    return { message: "Failed to create imc" };
  }
    const data = parse.data;
  
    const apiUrl = getApiUrl();
  
    if (!apiUrl) {
      console.error("A variável de ambiente NEXT_PUBLIC_API_URI não está definida.");
      return;
    }
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',  // Define o método POST
        headers: {
          'Content-Type': 'application/json',  // Define o cabeçalho do conteúdo como JSON
        },
        body: JSON.stringify(data),  // Converte os dados para uma string JSON
      });
  
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
      revalidatePath('/');
  
      const result = await response.json();  // Converte a resposta para JSON
      return result;
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
      throw error;
    }
  }
  