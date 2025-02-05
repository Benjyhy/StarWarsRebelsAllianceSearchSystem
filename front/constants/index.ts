import {
  FilmInfos,
  PlanetInfos,
  SpaceshipInfos,
  SpeciesInfos,
  VehicleInfos,
} from "@/types";
import { PeopleInfos } from "@/types";

export const FilmInfosKeys: (keyof FilmInfos)[] = [
  "title",
  "episode_id",
  "opening_crawl",
  "director",
  "producer",
  "release_date",
];

export const PeopleInfosKeys: (keyof PeopleInfos)[] = [
  "name",
  "birth_year",
  "eye_color",
  "gender",
  "hair_color",
  "height",
  "mass",
  "skin_color",
  "homeworld",
];

export const PlanetInfosKeys: (keyof PlanetInfos)[] = [
  "name",
  "diameter",
  "rotation_period",
  "orbital_period",
  "gravity",
  "population",
  "climate",
  "terrain",
  "surface_water",
];

export const SpaceshipInfosKeys: (keyof SpaceshipInfos)[] = [
  "name",
  "model",
  "starship_class",
  "manufacturer",
  "cost_in_credits",
  "length",
  "crew",
  "passengers",
  "max_atmosphering_speed",
  "hyperdrive_rating",
  "MGLT",
  "cargo_capacity",
  "consumables",
];

export const SpeciesInfosKeys: (keyof SpeciesInfos)[] = [
  "name",
  "classification",
  "designation",
  "average_height",
  "average_lifespan",
  "eye_colors",
  "hair_colors",
  "skin_colors",
  "language",
  "homeworld",
];

export const VehicleInfosKeys: (keyof VehicleInfos)[] = [
  "name",
  "model",
  "vehicle_class",
  "manufacturer",
  "length",
  "cost_in_credits",
  "crew",
  "passengers",
  "max_atmosphering_speed",
  "cargo_capacity",
  "consumables",
];
