import React from "react";
import Body from "../componets/Body";
import CardInfo from "../componets/CardInfo";
import { CircleDollarSign, SquareUser, SendHorizonal, OctagonX } from "lucide-react";
// import ApexCharts from 'react-apexcharts'


export default function Home(){



      
return(
    <Body>
        <div className="flex flex-row gap-2">
            <CardInfo valor={'R$ 1.050,00'} texto={'Cobranças do Dia'} cor={'bg-green-600'} icon={<CircleDollarSign/>}/>
            <CardInfo valor={'7'} texto={'Contatos Realizados'} cor={'bg-yellow-300'} icon={<SquareUser/>}/>
            <CardInfo valor={'76'} texto={'Mensagens Enviadas'} cor={'bg-sky-500'} icon={<SendHorizonal/>}/>
            <CardInfo valor={'2'} texto={'Mensagens Rejeitadas'} cor={'bg-red-500'} icon={<OctagonX/>}/>
        </div>
        <div className="flex flex-row ">

        </div>
    </Body>
)
}