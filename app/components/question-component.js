import Component from '@ember/component';

export default Component.extend({
    // selected dog 
    // options for select are params for the component
    // onsubmit calls game submit(dog)
    selectedDog: null, // type Dog

    actions: {
        selectDog(dog) {
            this.set('selectedDog', dog);
        },

        submit(event) {
            console.log('event', event);
            this.submit(event); // call parent submit function (param)
        }
    }
});
