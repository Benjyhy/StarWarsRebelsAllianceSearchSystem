import { BasicInfo } from "../BasicInfo";
import { PlanetCollections } from "../planet/PlanetCollections";
import { PlanetInfos } from "../planet/PlanetInfo";

export interface People extends BasicInfo, PlanetInfos, PlanetCollections {}
export type { PlanetCollections, PlanetInfos };
