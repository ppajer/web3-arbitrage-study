import { arbitrage } from './arbitrage';

describe('arbitrageStudy', () => {
  it('should work', () => {
    expect(arbitrage({tokenA:'a', tokenB: 'b', platforms: ['', '']})).toEqual(true); // TODO: dummy object
  })
})
