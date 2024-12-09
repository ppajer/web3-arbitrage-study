# x777 Arbitrage Study [PHASE 1]

Skeleton implementation of an arbitrage bot on Solana & EVM for the x777 project.

### Goals

1. PHASE 1:
    - Minimum viable implementation
    - 2 Dex connections on SPL
    - Simulated trades
    - Testnet trades
    - Live trade
2. PHASE 2:
    - Prototypes for all subsystems on:
        - EVM
        - SPL
        - CEX
    - Core Control
    - Abstract Scanner
    - Abstract Connector
    - Abstract Executable
3. PHASE 3:
    - New repo & cleanup
    - Core Package: `@x777-dev/Automata`
    - Implementation prototype

## Building

Run `npm run build`

## Unit tests

Tests can be found in `/src/lib/`, next to their corresponding modules as `[module].spec.ts`.
If a module doesn't have a `spec` file, create it.

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io).

