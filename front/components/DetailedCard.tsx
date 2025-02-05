import { DetailedResponse } from "@/types/DetailedResponse";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import CardIcon from "./CardIcon";
import { SwapiType } from "@/types";
import ContentByType from "./ContentByType";

export default function DetailedCard(props: {type: SwapiType, data: DetailedResponse}) {
    const {type, data} = props;
    const title = 'title' in data ? data.title : 'name' in data ? data.name : 'Unknown';
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center">
                    <CardIcon type={type}/>
                    <div className="mx-5">
                        <CardTitle>{title}</CardTitle>
                        <CardDescription><span className="italic">{type}</span></CardDescription>
                    </div>
                </div>
            </CardHeader>
            <ContentByType type={type} data={data}/>
        </Card>
    );
}