import { BasicInfo } from "../BasicInfo";
import { SpaceshipCollections } from "./SpaceshipCollections";
import { SpaceshipInfos } from "./SpaceshipInfos";

export interface Spaceship
  extends BasicInfo,
    SpaceshipCollections,
    SpaceshipInfos {}

export type { SpaceshipCollections, SpaceshipInfos };
