export interface TargetTypes{
    radius: string;
    title: string;
    topic_id: number;
    lat: number;
    lng: number;
}

export interface NewTargetTypes{
    radius: null | string;
    title: null | string;
    topic_id: null | number;
    lat: null | number;
    lng: null | number;
}
