import defangIPaddr from './defangIpAddr';

describe('defangIPAddress', () => {
  it('should return a defanged version of IP address.', () => {
    expect(defangIPaddr('1.1.1.1')).toBe('1[.]1[.]1[.]1');
    expect(defangIPaddr('255.100.50.0')).toBe('255[.]100[.]50[.]0');
  });
});
