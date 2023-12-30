export class Vec {
    constructor(public x: number, public y: number) {}
}

export type Style = {
    [key: string]: string
}


export type Frame = {
    x: number,
    y: number,
    [key: string]: any
}