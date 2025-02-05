import { SwapiType } from "@/types";
import { Film } from "./icons/Film";
import { People } from "./icons/People";
import { Planet } from "./icons/Planet";
import { Species } from "./icons/Species";
import { Vehicle } from "./icons/Vehicle";
import { Starship } from "./icons/Starship";

export default function CardIcon(props: {type: string}) {
    const {type} = props
    switch(type) {
        case SwapiType.FILMS:
            return <Film/>;
        case SwapiType.PEOPLE:
            return <People/>;
        case SwapiType.PLANETS:
            return <Planet/>;
        case SwapiType.STARSHIPS:
            return <Starship/>;
        case SwapiType.SPECIES:
            return <Species/>;
        case SwapiType.VEHICLES:
            return <Vehicle/>;
    }
}