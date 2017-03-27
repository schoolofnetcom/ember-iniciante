import Ember from 'ember';

export default Ember.Route.extend({
    account: Ember.inject.service(),
    model(params) {
        return this.get('account').one(params.id);
    }
});
