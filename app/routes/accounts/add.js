import Ember from 'ember';

export default Ember.Route.extend({
    account: Ember.inject.service(),
    actions: {
        save(model) {
            model.balance = 0;
            this.get('account').create(model).then(() => {
               alert('Salvo com sucesso');
               let owner = Ember.getOwner(this);
               let route = owner.lookup('route:accounts');
               route.refresh(); //atualiza o conteúdo da rota pai
               this.transitionTo('accounts'); //envia para a rota pai
            });
        }
    },
    model(){
        return {};
    }
});
