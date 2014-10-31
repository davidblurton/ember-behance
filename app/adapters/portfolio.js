import ajax from 'ic-ajax';
import Ember from "ember";
import memoize from './memoizer';

export default Ember.Object.extend({
  findAll: memoize( function() {
    var url = 'http://www.behance.net/v2/users/rachelmsalmon/projects?api_key=Q25lQBJDdrvQV58nhlBc5UJrzd5axIzS';
    return ajax(url, { dataType: 'jsonp' }).then(function(data) {
      return data.projects;
    });
  })
});
