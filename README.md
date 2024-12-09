# x777 Arbitrage Study [PHASE 1]

Skeleton implementation of an arbitrage bot on Solana & EVM for the x777 project.

### Goals
1. PHASE 1:
    a. Minimum viable implementation
    b. 2 Dex connections on SPL
    c. Simulated trades
    d. Testnet trades
    e. Live trade
2. PHASE 2:
    a. Prototypes for all subsystems on:
        i. EVM
        ii. SPL
        iii. CEX
    b. Core Control
    c. Abstract Scanner
    d. Abstract Connector
    e. Abstract Executable
3. PHASE 3:
    a. New repo & cleanup
    b. Core Package: `@x777-dev/Automata`
    c. Implementation prototype

## Building

Run `npm run build`

## Unit tests

Tests can be found in `/src/lib/`, next to their corresponding modules as `[module].spec.ts`.
If a module doesn't have a `spec` file, create it.

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io).

