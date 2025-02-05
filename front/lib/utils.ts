import {
  FilmInfosKeys,
  PeopleInfosKeys,
  PlanetInfosKeys,
  SpeciesInfosKeys,
  StarshipInfosKeys,
  VehicleInfosKeys,
} from "@/constants";
import { SwapiType } from "@/types";
import { DetailedResponse } from "@/types/DetailedResponse";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProperties(type: SwapiType): (keyof DetailedResponse)[] {
  switch (type) {
    case SwapiType.FILMS:
      return FilmInfosKeys as unknown as (keyof DetailedResponse)[];
    case SwapiType.PEOPLE:
      return PeopleInfosKeys as unknown as (keyof DetailedResponse)[];
    case SwapiType.PLANETS:
      return PlanetInfosKeys as unknown as (keyof DetailedResponse)[];
    case SwapiType.STARSHIPS:
      return StarshipInfosKeys as unknown as (keyof DetailedResponse)[];
    case SwapiType.SPECIES:
      return SpeciesInfosKeys as unknown as (keyof DetailedResponse)[];
    case SwapiType.VEHICLES:
      return VehicleInfosKeys as unknown as (keyof DetailedResponse)[];
  }
}

export function formatPropertyName(property: string) {
  return property
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
