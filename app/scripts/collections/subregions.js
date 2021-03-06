/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
    'use strict';

    MfiaClient.Collections.Subregions = Backbone.Collection.extend({
      model: MfiaClient.Models.Subregion,
      url: function () {
        return MfiaClient.API + '/subregions.json';
      },
      parse: function(response) {
        return response.data;
      }
    });

})();
