/*global yoTest, Backbone*/

yoTest.Collections = yoTest.Collections || {};

(function () {
    'use strict';

    yoTest.Collections.TodoCollection = Backbone.Collection.extend({

        model: yoTest.Models.TodoModel,

        localStorage: new Backbone.LocalStorage('backbone-generator-todos')

    });

})();
