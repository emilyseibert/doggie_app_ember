import Component from '@ember/component';

export default Component.extend({
    currentQuestion: null,
    currentDogIndex: 0,
    score: 0,
    questions: null,
    answers: null,
    showEndOfGame: false,

    didReceiveAttrs() {
        this._super(...arguments);

        // convert EmberArray (enumerable) to Array
        const dogArray = this.get('dogs').toArray();
    
        // apply randomize function and take top 5 for questions
        const questionArr = shuffle(dogArray).slice(0,5);

        // mix up the answers to not match the q order
        const answerArr = shuffle([...questionArr]);

        // set variables
        this.set('questions', questionArr);
        this.set('answers', answerArr);
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

            // incr dog q index and set next questions
            this.set('currentDogIndex', this.get('currentDogIndex')+ 1);
            this.set('currentQuestion', this.get('questions').objectAt(this.get('currentDogIndex')));
        
            // end of game (run out of questions)
            if (this.get('questions').length === this.get('currentDogIndex')) {
                // const percentScore = this.score / this.questions.length;
                this.set('showEndOfGame', true);
                //alert(`end of game! you got this score:  ${(percentScore * 100).toFixed(0)}%`);
            }
        }
    },
});

function shuffle(array) {
    // Fisher-Yates shuffle
    var m = array.length, t, i;
    while (m > 0) 
    {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}
