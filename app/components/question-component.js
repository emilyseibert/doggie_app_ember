import Component from '@ember/component';
import { action } from '@ember/object';


// export default Component.extend({
//     // selected dog 
//     // options for select are params for the component
//     // onsubmit calls game submit(dog)
//     selectedDog: null, // type Dog

//     didRender() {
//         this.set('selectedDog', this.get('dogs').firstObject.name);
//     },

//     actions: {
//         selectDog(dog) {
//             this.set('selectedDog', dog);
//         },

//         submit() {
//             this.submit(this.get('selectedDog')); // call parent submit function (param)
//         }
//     }
// });


export default class QuestionComponent extends Component {
    dogs = [];

    constructor() {
        super(...arguments);

        this.selectedDog = this.dogs.firstObject ? this.dogs.firstObject.name : [];
    }

    didRender() {
        console.log('didRender');
        // this.set('selectedDog', this.get('dogs').firstObject.name);
    }

    @action
    selectDog(dog) {
        console.log('selectDog');
        this.set('selectedDog', dog);
    }

    @action
    submitQuestion() {
        console.log('submitq');
        this.submit(this.get('selectedDog')); // call parent submit function (param)
    }
}