import { SwapiType } from "@/types";
import DetailedCard from "@/components/DetailedCard";
  

export default async function Details({ params }: { params: { type: SwapiType; id: string } }){
    const {type, id} = await params;
    const endpoint = `http://localhost:3000/api/details/${type}/${id}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    console.log(data)
    return (
        <DetailedCard type={type} data={data.results}/>
    );
}