import Ember from 'ember';

export default Ember.Service.extend({
    requester: Ember.inject.service(),
    all: function () {
        return this.get('requester').getMethod('accounts');
    },
    one: function (id) {
        return this.get('requester').getMethod('accounts/' + id);
    },
    create: function (data) {
        return this.get('requester').postMethod('accounts', data);
    },
    update: function (id, data) {
        return this.get('requester').putMethod('accounts/' + id, data);
    },
    delete: function (id) {
        return this.get('requester').deleteMethod('accounts/' + id);
    }
});
