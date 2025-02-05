import { BasicInfo } from "../BasicInfo";
import { PeopleCollections } from "./PeopleCollections";
import { PeopleInfos } from "./PeopleInfos";

export interface People extends BasicInfo, PeopleInfos, PeopleCollections {}
export type { PeopleCollections, PeopleInfos };
