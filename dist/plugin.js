var capacitorInfoDevice = (function (exports, core) {
    'use strict';

    const InfoDevice = core.registerPlugin('InfoDevice', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.InfoDeviceWeb()),
    });

    class InfoDeviceWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        InfoDeviceWeb: InfoDeviceWeb
    });

    exports.InfoDevice = InfoDevice;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
