const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Testing part of projecy', () => {
  let testBand, testMusician, testSong;

  beforeAll(async () => {
    // Create instances for testing
    testBand = await Band.create({ name: 'Test Band', genre: 'Rock' });
    testMusician = await Musician.create({ name: 'Test Musician', instrument: 'Guitar' });
    testSong = await Song.create({ title: 'Test Song', year: 2024, length: 3 });
  });

  test('Can create a new Band', async () => {
    expect(testBand.id).toBeTruthy();
    expect(testBand.name).toBe('Test Band');
    expect(testBand.genre).toBe('Rock');
  });

  test('Can create a new Musician', async () => {
    expect(testMusician.id).toBeTruthy();
    expect(testMusician.name).toBe('Test Musician');
    expect(testMusician.instrument).toBe('Guitar');
  });

  test('Can create a new Song', async () => {
    expect(testSong.id).toBeTruthy();
    expect(testSong.title).toBe('Test Song');
    expect(testSong.year).toBe(2024);
    expect(testSong.length).toBe(3);
  });

  test('Can update a Band instance', async () => {
    const updatedBand = await testBand.update({ name: 'Updated Band' });
    expect(updatedBand.name).toBe('Updated Band');
  });

  test('Can update a Musician instance', async () => {
    const updatedMusician = await testMusician.update({ instrument: 'Piano' });
    expect(updatedMusician.instrument).toBe('Piano');
  });

  test('Can update a Song instance', async () => {
    const updatedSong = await testSong.update({ year: 2025 });
    expect(updatedSong.year).toBe(2025);
  });

  test('Can delete a Band instance', async () => {
    await testBand.destroy();
    const deletedBand = await Band.findByPk(testBand.id);
    expect(deletedBand).toBeNull();
  });

  test('Can delete a Musician instance', async () => {
    await testMusician.destroy();
    const deletedMusician = await Musician.findByPk(testMusician.id);
    expect(deletedMusician).toBeNull();
  });

  test('Can delete a Song instance', async () => {
    await testSong.destroy();
    const deletedSong = await Song.findByPk(testSong.id);
    expect(deletedSong).toBeNull();
  });
});
