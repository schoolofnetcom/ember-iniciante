import Ember from 'ember';

export default Ember.Service.extend({
    ajax: Ember.inject.service(),
    host: 'http://localhost:8000/api/',
    getMethod: function (path) {
        return this.get('ajax').request(this.host + path);
    },
    postMethod: function (path, data) {
        return this.get('ajax').request(this.host + path, {
            method: 'POST',
            data: data
        });
    },
    putMethod: function (path, data) {
        return this.get('ajax').request(this.host + path, {
            method: 'PUT',
            data: data
        });
    },
    deleteMethod: function (path) {
        return this.get('ajax').request(this.host + path, {
            method: 'DELETE'
        });
    }
});
