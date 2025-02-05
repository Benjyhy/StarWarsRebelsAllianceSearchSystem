import { BasicInfo } from "../BasicInfo";
import { StarshipCollections } from "./StarshipCollections";
import { StarshipInfos } from "./StarshipInfos";

export interface Starship
  extends BasicInfo,
    StarshipCollections,
    StarshipInfos {}

export type { StarshipCollections, StarshipInfos };
