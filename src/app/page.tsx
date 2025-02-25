import { Calculator } from "@/components/calculatorCard/calculator";
import Navbar from "@/components/navbar/navbar";
import { TableImc } from "@/components/tableimc/tableimc";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Navbar/>      
      <div className="flex items-center justify-center flex-col gap-10 lg:items-start lg:justify-center lg:flex-row">
        <Calculator />
        <TableImc/>
      </div>
    </div>
  );
}
