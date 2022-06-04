export interface Weapon {
    uuid:        string;
    displayName: string;
    displayIcon: string;
    weaponStats: WeaponStats;
    shopData:    ShopData;
}

export interface ShopData {
    cost:     number;
    categoryText: string;
}

export interface WeaponStats {
    magazineSize: number;
}
