import Component from '@ember/component';

export default Component.extend({
    // selected dog 
    // options for select are params for the component
    // onsubmit calls game submit(dog)
    selectedDog: null, // type Dog

    didRender() {
        this.set('selectedDog', this.get('dogs').firstObject.name);
    },

    actions: {
        selectDog(dog) {
            this.set('selectedDog', dog);
        },

        submit() {
            this.submit(this.get('selectedDog')); // call parent submit function (param)
        }
    }
});
