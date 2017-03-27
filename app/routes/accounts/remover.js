import Ember from 'ember';

export default Ember.Route.extend({
    account: Ember.inject.service(),
    model(params){
        this.get('account').delete(params.id).then(() => {
            alert('Removido com sucesso');
            let owner = Ember.getOwner(this);
            let route = owner.lookup('route:accounts');
            route.refresh(); //atualiza o conteúdo da rota pai
            this.transitionTo('accounts'); //envia para a rota pai
        });
    }
});
