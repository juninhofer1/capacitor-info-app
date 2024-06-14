import { registerPlugin } from '@capacitor/core';

import type { InfoDevicePlugin } from './definitions';

const InfoDevice = registerPlugin<InfoDevicePlugin>('InfoDevice', {
  web: () => import('./web').then(m => new m.InfoDeviceWeb()),
});

export * from './definitions';
export { InfoDevice };
