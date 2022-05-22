import { Champion } from "./Champion";

export interface Team{
    name: string,
    id: number,
    top:Champion,
    jungle:Champion,
    mid:Champion,
    adc:Champion,
    support:Champion
}