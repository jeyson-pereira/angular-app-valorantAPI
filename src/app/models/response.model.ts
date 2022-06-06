import { Agent } from "./agent.model";
import { Weapon } from "./weapon.model";
import { Map } from "./map.model";

export interface ResponseWeapon {
    status: string;
    data: Array<Weapon>;
}

export interface ResponseAgent {
    status: string;
    data: Array<Agent>;
}

export interface ResponseMap {
    status: string;
    data: Array<Map>;
}
