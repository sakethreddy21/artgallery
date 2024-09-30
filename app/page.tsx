import Image from "next/image";
import Navbar from '@/components/navbar/page'
import { FocusCardsDemo } from "@/components/screens/art-screen/page";
export default function Home() {
  return (
    <div>
    <div >
 <Navbar/>
<div className="flex flex-col p-10">
<FocusCardsDemo/>
</div>
 
</div >
    </div>
  );
}
