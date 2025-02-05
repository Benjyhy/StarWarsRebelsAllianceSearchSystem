import { BasicInfo } from "../BasicInfo";
import { VehicleCollections } from "./VehicleCollections";
import { VehicleInfos } from "./VehicleInfos";

export interface Vehicle extends BasicInfo, VehicleInfos, VehicleCollections {}
export type { VehicleInfos, VehicleCollections };
