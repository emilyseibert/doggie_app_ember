import Component from '@ember/component';

export default Component.extend({
    percentScore: null,

    didRender() {
        const percentScore = (this.get('finalScore') / this.get('numOfQuestions') * 100).toFixed(0);
        this.set('percentScore', percentScore);
    }
});
