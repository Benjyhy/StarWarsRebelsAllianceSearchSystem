import { SwapiType } from "@/types";
import { Checkbox } from "./ui/checkbox";

export default function Filters(props: {filters: SwapiType[], setFilters: (filters: SwapiType[]) => void }){
    const {filters, setFilters} = props;

    const handleCheckboxChange = (type: SwapiType, checked: boolean) => {
        if (checked) {
            setFilters([...filters, type]);
        } else {
            setFilters(filters.filter(f => f !== type));
        }
    };
    return(
        <div className="flex mb-10">
            {Object.values(SwapiType).map((type, index) => (
            <div key={index} className="mx-5">
                <Checkbox id={type} checked={filters.includes(type as SwapiType)} onCheckedChange={(checked) => handleCheckboxChange(type as SwapiType, checked as boolean)}/>
                <label htmlFor={type} className="mx-2">{type.toLowerCase()}</label>
            </div>
            ))}
        </div>
    )
}