import Component from '@ember/component';


export default Component.extend({
    currentQuestion: null,
    currentDogIndex: 0,
    selectedDog: null, // type Dog,
    score: 0,
    questions: [],
    
    didRender() {
        // init game
        if (this.questions.length === 0) {
            // generate question
            this.set('questions', this.get('dogs'));
            // get first q
            this.set('currentQuestion', this.get('questions').firstObject);
        }
    },

    actions: {
        // submit is called in q cmpt, param is dog in question cmpt, updates score, updates game, changes question
        submit(dog) {
            console.log(dog);
            console.log('submitted');
            // update score

            this.set('currentDogIndex', this.get('currentDogIndex')+ 1);
            this.set('currentQuestion', this.get('questions').objectAt(this.get('currentDogIndex')));
        
            // end of game (run out of quesitions)
            // call end of game function
        }
    }
});
