import { registerPlugin } from '@capacitor/core';
const InfoDevice = registerPlugin('InfoDevice', {
    web: () => import('./web').then(m => new m.InfoDeviceWeb()),
});
export * from './definitions';
export { InfoDevice };
//# sourceMappingURL=index.js.map