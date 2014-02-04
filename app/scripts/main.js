/*global yoTest, $*/


window.yoTest = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        new this.Views.TodosView({
            collection: new this.Collections.TodoCollection()
        });
    }
};

$(document).ready(function () {
    'use strict';
    yoTest.init();
});
