/*global yoTest, Backbone, JST*/

yoTest.Views = yoTest.Views || {};

(function () {
    'use strict';

    yoTest.Views.TodosView = Backbone.View.extend({

        template: JST['app/scripts/templates/todos.ejs']

    });

})();
