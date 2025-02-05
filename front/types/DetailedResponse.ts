import { Film } from "./film";
import { People } from "./people";
import { Planet } from "./planet";
import { Starship } from "./starship";
import { Species } from "./species";
import { Vehicle } from "./vehicle";

export type DetailedResponse =
  | Film
  | People
  | Planet
  | Starship
  | Species
  | Vehicle;
