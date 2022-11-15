export interface Dictionary<T = string | number> {
    [Key: string]: T;
}

export interface Index<T = string | number> {
    [Key: number]: T;
}

export type NumberDictionary = Dictionary<number>;
export type StringDictionary = Dictionary<string>;

export type NumberIndex = Index<number>;
export type StringIndex = Index<string>;
