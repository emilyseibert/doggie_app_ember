import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model() {
        return RSVP.hash({ // promise wrapper
            dogs: this.store.findAll('dog') // calls ('/api/dogs') - defined in mirage
         });
    }
});

// export default Route.extend({
//     model() {
//         return { 
//             dogs: [{
//                 "id":191,
//                 "name":"Zoe",
//                 "picture":"https://images.dog.ceo/breeds/airedale/n02096051_1799.jpg"
//             },
//             {
//                 "id":192,
//                 "name":"Zoey",
//                 "picture":"https://images.dog.ceo/breeds/springer-english/n02102040_2762.jpg"
//             }]
//         };
//     }
// });
