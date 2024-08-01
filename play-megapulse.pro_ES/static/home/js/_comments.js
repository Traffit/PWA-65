const reviews = document.querySelector(".reviews__container");

const reviews_data = [
  {
    img: "../../media/photos/comments/Samuel_Fry.png",
    name: "Liam Smith",
    comment:
      "Cosa c'è di meglio che indulgere in dolci e vincere alla grande? Fortune Tiger è il mio preferito per le vittorie più dolci!",
  },
  {
    img: "../../media/photos/comments/comment2.png",
    name: "Olivia Tremblay",
    comment:
      "Gioco a Fortune Tiger da settimane - è semplicemente avvincente! Vittorie costanti e tantissimi giri gratuiti. Amo assolutamente questa slot machine!",
  },
  {
    img: "../../media/photos/comments/comment3.png",
    name: "Noah MacKenzie",
    comment:
      "Questo gioco è una vera esplosione di zucchero e adrenalina! I colori vivaci e l'azione continua di Fortune Tiger lo rendono un piacere coinvolgente.",
  },
  {
    img: "../../media/photos/comments/comment4.png",
    name: "Emma Gagnon",
    comment:
      "Fortune Tiger è una delizia per gli occhi e una gioia per il portafoglio! Amo l'emozione costante delle vittorie consecutive e l'abbondanza di giri gratuiti.",
  },
  {
    img: "../../media/photos/comments/comment5.png",
    name: "Lucas Leblanc",
    comment:
      "Non posso fare a meno di questo gioco a tema dolci! Fortune Tiger è il mio piacere segreto con le sue grafiche fantastiche e il potenziale per grandi vincite.",
  },
  {
    img: "../../media/photos/comments/comment6.png",
    name: "Ava Dubois",
    comment:
      "Questo gioco è come un negozio di caramelle pieno di vincite! I giri gratuiti di Fortune Tiger portano sempre queste vittorie deliziose.",
  },
  {
    img: "../../media/photos/comments/comment7.png",
    name: "Ethan Roy",
    comment:
      "Sono assolutamente dipendente da Fortune Tiger! L'emozione delle vittorie consecutive con la funzione Tumble è insuperabile.",
  },
  {
    img: "../../media/photos/comments/comment8.png",
    name: "Charlotte Lefebvre",
    comment:
      "Fortune Tiger soddisfa sia la mia voglia di dolci che la mia sete di vincite. È una fantastica combinazione di divertimento e potenziale per grandi pagamenti.",
  },
  {
    img: "../../media/photos/comments/comment9.png",
    name: "Benjamin Beaulieu",
    comment:
      "Un gioco così divertente! I giri gratuiti di Fortune Tiger mi fanno sempre tornare e gli effetti visivi sono semplicemente incantevoli.",
  },
  {
    img: "../../media/photos/comments/comment10.png",
    name: "Sophia Caron",
    comment:
      "Fortune Tiger non delude mai! Amo l'adrenalina quando le vittorie consecutive continuano a venire. Altamente raccomandato!",
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Shuffle the reviews_data array
const shuffledReviews = shuffle(reviews_data);

// Take the first three reviews for display
shuffledReviews.slice(0, 3).forEach((review) => getReview(review));

function getReview(data) {
  // Your existing getReview function remains the same
  const review_template = `
  <div class="review">
          <div class="review__top c-black">
            <div class="review__img">
              <img src="${data.img}" alt="${data.name} comment" />
            </div>
            <div class="review__name">
              <h3>${data.name}</h3>
            </div>
            <div class="review__more-box">
              <a class="review__more" aria-label="More reviews">
                <i class="_icon-more_vert_black"></i>
              </a>
              <div class="review__more-open">
                <!-- <a class="watch-history__btn">Посмотреть историю изменений</a> -->
                <a class="unacceptable__btn" aria-label="Flag as inappropriate">Flag as inappropriate</a>
                <a class="spam__btn" aria-label="Flag as spam">Flag as spam</a>
              </div>
            </div>
          </div>
          <div class="review__rating">
            <div class="Stars" style="--rating: 5.0;" aria-label="Rating of this product is 5.0 out of 5."></div>
            <span class="review-date c-text">26.02.24</span>
          </div>
          <div class="review__text webkit c-text">
            <p>
             ${data.comment}
            </p>
          </div>
          <div class="review__qna">
            <span>Was this review helpful?</span>
            <div class="review__true-false c-black">
              <a class="btn-true" aria-label="Yes">Yes</a>
              <a class="btn-false" aria-label="No">No</a>
            </div>
          </div>
        </div>
  `;
  return (reviews.innerHTML += review_template);
}
