export interface Agent {
    uuid:                      string;
    displayName:               string;
    description:               string;
    bustPortrait:              string;
    fullPortrait:              string;
    fullPortraitV2:            string;
    isPlayableCharacter:       boolean;
    role:                      Role;
}

export interface Role {
    uuid:        string;
    displayName: string;
    displayIcon: string;
}
