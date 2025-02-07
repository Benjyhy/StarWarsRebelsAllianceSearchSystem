import DetailsClient from "@/components/DetailsClient";
import { SwapiType } from "@/types";

export default async function Details({ params }: { params: Promise<{ type: SwapiType; id: string }> }) {
    const {type, id} = await params;
    return <DetailsClient type={type} id={id} />;
}
