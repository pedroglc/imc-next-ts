'use client'
import { Button } from "../ui/button";
import { useState, useEffect } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
import { EditImc } from "@/functions/editImc";

interface EditIconProps {
    imcEditId: string;
    nameEdit: string;
    weightEdit: number;
    heightEdit: number;
  }

export default function Edit({imcEditId, nameEdit, weightEdit, heightEdit}: EditIconProps) {
    const [nomeEdit, setNomeEditLocal] = useState('');
    const [pesoEdit, setPesoEditLocal] = useState(0);
    const [alturaEdit, setAlturaEditLocal] = useState(0);
    const [_idEdit, setIdEditLocal] = useState('');

  useEffect(() => {
    setNomeEditLocal(nameEdit);
    setPesoEditLocal(weightEdit);
    setAlturaEditLocal(heightEdit);
    setIdEditLocal(imcEditId);    
  }, [nameEdit, weightEdit, heightEdit, imcEditId]);
  
  const handleEdit = async () => {
    const success = await EditImc(_idEdit, nomeEdit, pesoEdit, alturaEdit)
    if(success){  
        window.location.reload();      
          }
    }
    return(
    <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-green-500">
            <span className="material-symbols-outlined">edit</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle>Editar IMC</AlertDialogTitle>
            <AlertDialogDescription>
                <div className="grid items-center place-content-around gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="nome">Nome</Label>
                        <Input
                            id="nome"
                            name="nome"
                            value={nomeEdit}
                            onChange={(e) => setNomeEditLocal(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="peso">Peso</Label>
                        <Input
                            id="peso"
                            value={pesoEdit}
                            onChange={(e) => setPesoEditLocal(parseFloat(e.target.value) || 0)}
                            type="number"
                            step=".1"
                            name="peso"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="altura">Altura</Label>
                        <Input
                            id="altura"
                            value={alturaEdit}
                            onChange={(e) => setAlturaEditLocal(parseFloat(e.target.value) || 0)}
                            type="number"
                            step=".1"
                            name="alura"
                        />
                    </div>              
                </div>            
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleEdit()}>
                Editar
            </AlertDialogAction>
          </AlertDialogFooter>            
        </AlertDialogContent>
    </AlertDialog>
    )
}
