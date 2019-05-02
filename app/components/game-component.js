import Component from '@ember/component';


export default Component.extend({
    currentQuestion: null,
    currentDogIndex: 0,
    questions: [],
    
    didRender() {
        // access to dogs
        // current dog
        // index of question

        if (this.questions.length === 0) {
            // generate list
            this.set('questions', this.get('dogs'));
            this.set('currentQuestion', this.get('questions').firstObject);
        }
    }
});
