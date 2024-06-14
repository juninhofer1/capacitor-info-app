import { WebPlugin } from '@capacitor/core';
import { InfoDevicePluginWeb, DeviceInfo } from './definitions';

export class InfoDeviceWeb extends WebPlugin implements InfoDevicePluginWeb {
  constructor() {
    super({
      name: 'InfoDevice',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getDeviceInfo(): Promise<DeviceInfo> {
    return {
      imei: 'Not available (web)',
      serialNumber: 'Not available (web)',
      versionName: 'Not available (web)'
    };
  }
}

const InfoDevice = new InfoDeviceWeb();

export { InfoDevice };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(InfoDevice);