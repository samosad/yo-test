/*global yoTest, Backbone, JST*/

yoTest.Views = yoTest.Views || {};

(function () {
    'use strict';

    yoTest.Views.TodoView = Backbone.View.extend({

        template: JST['app/scripts/templates/todo.ejs']

    });

})();
