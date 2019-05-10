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
    constructor() {
        super(...arguments);
    }

    didReceiveAttrs() {
        // set initial selection to first dog in array        
        this.set('selectedDog', this.get('answers').firstObject.name);
    }

    @action
    selectDog(dog) {
        // called whend dropdown changes
        this.set('selectedDog', dog);
    }

    @action
    submitQuestion() {
        this.submit(this.get('selectedDog')); // call parent submit function (param)
    }
}