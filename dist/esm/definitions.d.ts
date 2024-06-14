export interface InfoDevicePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
