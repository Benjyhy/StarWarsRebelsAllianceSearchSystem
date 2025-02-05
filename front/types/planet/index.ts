import { BasicInfo } from "../BasicInfo";
import { PlanetCollections } from "./PlanetCollections";
import { PlanetInfos } from "./PlanetInfo";

export interface Planet extends BasicInfo, PlanetCollections, PlanetInfos {}
export type { PlanetCollections, PlanetInfos };
