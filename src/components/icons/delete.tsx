'use client'
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
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { DeleteImc } from "@/functions/deleteImc";


interface DeleteIconProps {
  imcId: string;
  handleRefresh: () => void;
}
  
export default function DeleteIcon({ imcId, handleRefresh }: DeleteIconProps) {
  const handleDelete = async () => {
    const success = await DeleteImc(imcId);
    if (success) {  
      toast("IMC Excluído!", {
          description: "O calculo de IMC foi excluído com sucesso.",
          action: {
            label: "Desfazer",
            onClick: () => handleRefresh(),
          },          
        })
        window.location.reload(); 
        }
  };     
    
    return(      
    <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-red-500">
          <span className="material-symbols-outlined">delete_forever</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza que deseja excluir?</AlertDialogTitle>
            <AlertDialogDescription>
              Ao deletar esse cálculo de IMC os dados serão excluídos permanentemente.              
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
                Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}
 
  