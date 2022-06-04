import { Weapon } from "./weapon.model";

export interface Response {
    status: string;
    data: Array<Weapon>;
}
