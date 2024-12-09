import { PlatformsArray, TokenArray } from "./core";

export function scan(tokens: TokenArray, platforms: PlatformsArray): Array<ScanResult> {
    // - get prices for tokenA-tokenB swap for each combination of 2 (or more) platforms
    // - if profitable trade found forward details to executor
    return [{
        tokenA: '', 
        tokenB: '', 
        platforms: [{type: 'cex', connection: {}}] // TODO dummy object
    }];
}

export interface ScanResult {
    tokenA: string;
    tokenB: string;
    platforms: PlatformsArray;
}