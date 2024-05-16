const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

test('can create a Band', async () => {
  // TODO - test creating a band
  const testBand = await Band.create(seedBand[0]);
  expect(testBand.name).toBe("The Beatles");
});
