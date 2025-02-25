'use client'
import * as React from "react"
import { Button } from "@/components/ui/button"
import {

  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Foto from '../../public/images/Calculator-cuate.png'
import Image from 'next/image'
import { newImc } from "@/functions/newImc"
import { useFormState } from "react-dom"

interface FormState {
  message: string;
}

export function Calculator() {
  const initialState: FormState = {
    message: "",
  };
  const [state, formAction] = useFormState(newImc, initialState);

  // Função para lidar com o submit do formulário
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const form = event.currentTarget;    
    // Envia os dados para a função newImc
    await formAction(new FormData(form));
    // Limpa os campos do formulário após o submit
    form.reset();
    window.location.reload();
  }  

  return (
    <Card className="w-[300px] h-min gap-10">
      <CardHeader>
        <CardTitle className="flex justify-between items-center gap-4">
          <Image
          src={Foto} // Caminho da imagem na pasta public
          alt=""
          width={100} // Largura da imagem
          priority={true} // Carrega a imagem antes do texto
          />
          Calculadora IMC
        </CardTitle>
        {/* Mostra a mensagem do estado */}
        <CardDescription>{state.message}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} action={formAction}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                placeholder="Digite seu nome"
                name="nome"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="peso">Peso</Label>
              <Input
                id="peso"
                placeholder="exemplo: 72,5"
                type="number"
                step=".1"
                name="peso"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="altura">Altura</Label>
              <Input
                id="altura"
                placeholder="exemplo: 1,68"
                type="number"
                step=".01"
                name="altura"
              />
            </div>
          </div>
          <CardFooter className="flex justify-between pt-4">
            <Button type="submit" className="w-full text-xl">Calcular</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}
