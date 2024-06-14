import { PluginListenerHandle } from "@capacitor/core";

export interface InfoDevicePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getDeviceInfo(): Promise<{ imei: string, serialNumber: string, versionName: string}>;
}

export interface DeviceInfo {
  imei: string;
  serialNumber: string;
  versionName: string;
}

export interface InfoDevicePluginWeb extends InfoDevicePlugin {
  getDeviceInfo(): Promise<DeviceInfo>;
}

export interface InfoDevicePluginNative extends InfoDevicePlugin {
  addListener(eventName: 'deviceInfoRetrieved', listenerFunc: (info: DeviceInfo) => void): PluginListenerHandle;
}