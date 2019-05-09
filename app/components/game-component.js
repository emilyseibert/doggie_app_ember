import Component from '@ember/component';


export default Component.extend({
    currentQuestion: null,
    currentDogIndex: 0,
    score: 0,
    questions: null,
    showEndOfGame: false,
    
    didReceiveAttrs() {
        this._super(...arguments);
        this.set('questions', this.get('dogs'));
        this.set('currentQuestion', this.get('questions').firstObject);
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
            this.set('currentQuestion', this.get('dogs').objectAt(this.get('currentDogIndex')));
        
            // end of game (run out of questions)
            if (this.get('questions').length === this.get('currentDogIndex')) {
                // const percentScore = this.score / this.questions.length;
                this.set('showEndOfGame', true);
                //alert(`end of game! you got this score:  ${(percentScore * 100).toFixed(0)}%`);
            }
        }
    }
});
