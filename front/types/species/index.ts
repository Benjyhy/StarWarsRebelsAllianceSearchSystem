import { BasicInfo } from "../BasicInfo";
import { SpeciesCollections } from "./SpeciesCollections";
import { SpeciesInfos } from "./SpeciesInfos";

export interface Species extends BasicInfo, SpeciesInfos, SpeciesCollections {}
export type { SpeciesCollections, SpeciesInfos };
