import { Film } from "./film";
import { People } from "./people";
import { Planet } from "./planet";
import { Spaceship } from "./spaceship";
import { Species } from "./species";
import { Vehicle } from "./vehicle";

export type DetailedResponse =
  | Film
  | People
  | Planet
  | Spaceship
  | Species
  | Vehicle;
