import { ScanResult } from "./scan";

export function arbitrage(tradeInfo: ScanResult): boolean { // TODO
  // - optimize order sizes
  // - simulate trade
  // - build tx 
  // - run

  // WIP: pseudo-implementation
  const platformA = tradeInfo.platforms[0];
  const platformB = tradeInfo.platforms[1];
  if (platformA.type === 'cex' && platformB.type === 'cex') {
    return CexArbitrage();
  }

  if (platformA.type === 'dex' && platformB.type === 'dex') {
    return DexArbitrage();
  }

  return HybridArbitrage();
}

function DexArbitrage(): boolean {
  return true;
}

function CexArbitrage(): boolean {
  return true;
}

function HybridArbitrage(): boolean {
  return true;
}