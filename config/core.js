webvn.extend('config', function (exports) {

    exports.script = {
        scenarios: [
            'init',
            'first'
        ],
        path: 'scenario/',
        extension: 'wvn'
    };

    exports.system = {
        title: 'WebVN'
    };

    exports.ui = {
        container: 'webvn',
        width: 1280,
        height: 720,
        autoResize: true
    };

    exports.log = {
        colors: {
            info: '#07a',
            error: '#eb6864',
            warn: '#f9c621'
        }
    };

});