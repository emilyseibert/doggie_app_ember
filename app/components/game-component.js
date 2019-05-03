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
            // update score
            const currDogName = this.get('currentQuestion').name;
            if (dog === currDogName) {
                this.set('score', this.get('score') + 1);
            }

            this.set('currentDogIndex', this.get('currentDogIndex')+ 1);
            this.set('currentQuestion', this.get('questions').objectAt(this.get('currentDogIndex')));
        
            // end of game (run out of questions)
            if (this.questions.length === this.get('currentDogIndex')) {
                const percentScore = this.score / this.questions.length;
                alert(`end of game! you got this score:  ${(percentScore * 100).toFixed(0)}%`);
            }
        }
    }
});
