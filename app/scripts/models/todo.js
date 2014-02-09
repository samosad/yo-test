/*global yoTest, Backbone*/

yoTest.Models = yoTest.Models || {};

(function () {
    'use strict';

    yoTest.Models.TodoModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            title: '',
            done: false
        },

        toggle: function() {
            this.save({
                done: !this.get('done')
            });
        },

        // validate: function(attrs, options) {
        // },

        // parse: function(response, options)  {
        //     return response;
        // }
    });

})();
