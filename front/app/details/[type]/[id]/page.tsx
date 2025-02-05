import { SwapiType } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Planet } from "@/components/icons/Planet";
  

export default async function DetailedCard({ params }: { params: { type: SwapiType; id: string } }){
    const {type, id} = await params;
    const endpoint = `http://localhost:3000/api/details/${type}/${id}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    console.log(data)
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <Planet/>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}