import { DetailedResponse } from "@/types/DetailedResponse";
import { CardContent,} from "./ui/card";
import { SwapiType } from "@/types";

import { formatPropertyName, getProperties } from "@/lib/utils";

export default function ContentByType(props: {type: SwapiType, data: DetailedResponse}) {
    const {type, data} = props;
    const properties = getProperties(type);
    return (
        <CardContent>
            {
                properties.map((property, index) =>{ 
                    const value = (data)[property];
                    return (<p key={index}>{formatPropertyName(property)}: {value}</p>)
                })
            }
        </CardContent>
    );
}