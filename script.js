let review = {
    userName: "johny",
    bodyText: "Great book! I've read it 456 times",
    rating: 4,

    showRating: function () {
        // hw1: отображение звездочек, соответствующих рейтингу
        console.log('*'.repeat(this.rating));
    },
    showAsHTML: function () {
        let html = `<div class="review">`;
        html += `<h3>${this.userName}</h3>`;
        html += `<p>${this.bodyText}</p>`;
        html += `<p>Rating: ${'*'.repeat(this.rating)}</p>`; // hw1: Отображение рейтинга в виде звездочек
        html += `</div>`;
        return html;
    }
}

let html = review.showAsHTML();
container.innerHTML = html;

// hw2: вызов метода отображения рейтинга
review.showRating();