import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';
import $ from 'jquery';

export default Route.extend({
    wsService: service('ws-service'),

    model(){
       return $.get('http://localhost:5000/api/Vision/GetAllVisions', (data) => {
        this.wsService.set('visions', data);
       })
    },

    setupController(){
        this.wsService.connect();
    }
});
