export interface RespuestaToHeadLines {
    count: number;
    results: Article[];
}

export interface Article {
    id: string;
    name: string;
    gender:string;
    image: string;
}

export interface Origin{
    name: string;
    url:string;
}
