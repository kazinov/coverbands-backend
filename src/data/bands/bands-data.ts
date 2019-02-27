import { database } from '../database';
import { Band } from './band.model';

const bandsTableName = 'bands';

export class BandsData {
  static getBands() {
    return database.select().from(bandsTableName);
  }

  static insertBand(band: Band) {
    return database(bandsTableName).insert(band, ['id', 'name']);
  }
}
