export interface Client {
    id: string;
    client: string;
}

export interface ClientResult {
    type: string;
    value: Client[];
}