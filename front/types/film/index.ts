import { BasicInfo } from "../BasicInfo";
import { FilmCollections } from "./FilmCollections";
import { FilmInfos } from "./FilmInfos";

export interface Film extends BasicInfo, FilmInfos, FilmCollections {}
export type { FilmCollections, FilmInfos };
