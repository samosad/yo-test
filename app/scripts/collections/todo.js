/*global yoTest, Backbone*/

yoTest.Collections = yoTest.Collections || {};

(function() {
    'use strict';

    yoTest.Collections.TodoCollection = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage('backbone-generator-todos'),

        initialize: function() {
            this.model = yoTest.Models.TodoModel;
        }

    });

})();
