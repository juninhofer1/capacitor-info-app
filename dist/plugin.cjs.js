'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const InfoDevice = core.registerPlugin('InfoDevice', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.InfoDeviceWeb()),
});

class InfoDeviceWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async getDeviceInfo() {
        // Implementação para web que retorna uma mensagem de não disponível
        return { imei: 'Not available', serialNumber: 'Not available in web environment' };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    InfoDeviceWeb: InfoDeviceWeb
});

exports.InfoDevice = InfoDevice;
//# sourceMappingURL=plugin.cjs.js.map
