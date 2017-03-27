import Ember from 'ember';

export default Ember.Route.extend({
    account: Ember.inject.service(),
    actions: {
        save(model) {
            this.get('account').update(model.id, model).then(() => {
                alert('Salvo com sucesso');
                let owner = Ember.getOwner(this);
                let route = owner.lookup('route:accounts');
                route.refresh(); //atualiza o conteúdo da rota pai
            });
        }
    },
    model(params){
        return this.get('account').one(params.id);
    }
});
