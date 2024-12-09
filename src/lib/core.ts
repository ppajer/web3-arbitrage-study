import { arbitrage } from "./arbitrage";
import { scan, ScanResult } from "./scan";

export function init(config: InitConfig): NodeJS.Timeout {
    return setInterval(() => {
        const result: Array<ScanResult> = scan(config.tokens, config.platforms);
        if (result.length) {
            result.map(arbitrage);
        }
    }, config.refreshMs);
}

export interface InitConfig {
    refreshMs: number;
    tokens: TokenArray;
    platforms: PlatformsArray;
}

// Decouple Token & Platform implementations from
// core type definitions
export type TokenArray = Array<Token>;
export type PlatformsArray = Array<Platform>;

export interface Token {
    symbol: string;
    address: string;
    decimals: number;
    chain: number;
}

export interface Platform {
    type: string;
    connection: object;
}