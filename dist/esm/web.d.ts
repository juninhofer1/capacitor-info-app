import { WebPlugin } from '@capacitor/core';
import type { InfoDevicePlugin } from './definitions';
export declare class InfoDeviceWeb extends WebPlugin implements InfoDevicePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
