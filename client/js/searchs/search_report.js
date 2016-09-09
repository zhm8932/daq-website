define(function (require) {
    var login = require('../login');

    $(function () {
        var hasBind = $('#hasBind').val();
        if (hasBind != 'true') {
            login.showAccountDialog({
                back: true,
                reload: true
            });
        }
    })

});