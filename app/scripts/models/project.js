/*global MfiaClient, Backbone*/

MfiaClient.Models = MfiaClient.Models || {};

(function () {
  'use strict';

  MfiaClient.Models.Project = Backbone.Model.extend({
    initialize: function(params) {
        this.park_id = params.id;
    },

    url: function() {
        //?fields[projects]=title,description,image
        return 'fixtures/projects/' + this.park_id + '.json';
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        //Backbone doesn't really know if the REST response is coming directly 
        //from the API or being passed via collection
        if (options.collection) return response;
        return response.data;
    }
  });

})();
