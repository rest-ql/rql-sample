require.config({
    baseUrl: '/scripts/app',
    shim: {

    },
    paths: {
        jquery: '../lib/jquery/dist/jquery',
        'rql-js-client': '../lib/rql-js-client/js/rql',
        underscore: '../lib/underscore/underscore'
    },
    packages: [

    ]
});

requirejs(['rql-js-client'],
    function (rql) {
        rql.request.send()
    });

