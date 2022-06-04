import { Agent } from "./agent.model";
import { Weapon } from "./weapon.model";

export interface ResponseWeapon {
    status: string;
    data: Array<Weapon>;
}

export interface ResponseAgent {
    status: string;
    data: Array<Agent>;
}
