import * as migration_20261104_075736_relationships_v2_v3 from './20261104_075736_relationships_v2_v3';

export const migrations = [
  {
    up: migration_20261104_075736_relationships_v2_v3.up,
    down: migration_20261104_075736_relationships_v2_v3.down,
    name: '20261104_075736_relationships_v2_v3',
  },
];
