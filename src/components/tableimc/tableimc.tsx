'use client'

import { getApiUrl } from "@/api/api";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Edit from "../icons/edit";
import DeleteIcon from "../icons/delete";
import { useEffect, useState } from "react";

interface IMCData {
    _id: string;
    nome: string;
    peso: number;
    altura: number;
    imc: number;
    classificacao: string;
}

export function TableImc() {
  const [imcData, setImcData] = useState<IMCData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(false)

    const fetchData = async () => {
        setLoading(true);
        const apiUrl = getApiUrl();
        if (!apiUrl) {
          console.error(
            "A variável de ambiente NEXT_PUBLIC_API_URI não está definida."
          );
          setLoading(false);
          return;
        }
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setImcData(data);
        } catch (error) {
          console.error("Erro ao buscar os dados:", error);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchData();
        setRefresh(false)
      }, [refresh]);

  const handleRefresh = () => {
    setRefresh(true)
  }

  return (
    <div className="rounded-lg border-2 w-[700px]">
      <Table>
        <TableCaption>
          Lista de índices de massa corporal (IMC) calculados.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Nome</TableHead>
            <TableHead>Peso</TableHead>
            <TableHead>Altura</TableHead>
            <TableHead className="text-right">IMC</TableHead>
            <TableHead>Classificação</TableHead>
            <TableHead className="text-center">Opções</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
                <TableCell>Carregando...</TableCell>
            </TableRow>
          ) : imcData.length > 0 ? (
            imcData?.map((IMC: IMCData) => (
              <TableRow key={IMC._id}>
                <TableCell className="font-medium">{IMC.nome}</TableCell>
                <TableCell>{IMC.peso} kg</TableCell>
                <TableCell>{IMC.altura} m</TableCell>
                <TableCell className="text-right">{IMC.imc}</TableCell>
                <TableCell>{IMC.classificacao}</TableCell>
                <TableCell className="flex gap-2">
                  <Edit imcEditId={IMC._id} nameEdit={IMC.nome} weightEdit={IMC.peso} heightEdit={IMC.altura} />                  
                  <DeleteIcon imcId={IMC._id} handleRefresh={handleRefresh} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Nenhum registro encontrado.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
