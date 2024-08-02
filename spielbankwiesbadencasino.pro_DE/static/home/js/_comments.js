const reviews = document.querySelector(".reviews__container");

const reviews_data = [
  {
    img: "../../media/photos/comments/Samuel_Fry.png",
    name: "Liam Smith",
    comment:
      "What could be better than indulging in candies and winning big? Sweet Bonanza is my go-to for the sweetest victories!",
  },
  {
    img: "../../media/photos/comments/comment2.png",
    name: "Olivia Tremblay",
    comment:
      "I've been playing Sweet Bonanza for weeks now — it's simply captivating! Consistent wins and loads of free spins. I absolutely adore this slot!",
  },
  {
    img: "../../media/photos/comments/comment3.png",
    name: "Noah MacKenzie",
    comment:
      "This game is a sugar rush of excitement! Sweet Bonanza's vibrant colors and non-stop action make it an addictive delight.",
  },
  {
    img: "../../media/photos/comments/comment4.png",
    name: "Emma Gagnon",
    comment:
      "Sweet Bonanza is a treat for the eyes and the wallet! I'm loving the constant thrill of tumbling wins and the free spins galore.",
  },
  {
    img: "../../media/photos/comments/comment5.png",
    name: "Lucas Leblanc",
    comment:
      "Can't get enough of the sweet-themed slot! Sweet Bonanza is my guilty pleasure with its fantastic graphics and big win potential.",
  },
  {
    img: "../../media/photos/comments/comment6.png",
    name: "Ava Dubois",
    comment:
      "This game is like a candy store of winnings! Sweet Bonanza's free spins never fail to bring in those delicious wins.",
  },
  {
    img: "../../media/photos/comments/comment7.png",
    name: "Ethan Roy",
    comment:
      "Absolutely addicted to Sweet Bonanza! The thrill of consecutive wins with the tumble feature is unbeatable.",
  },
  {
    img: "../../media/photos/comments/comment8.png",
    name: "Charlotte Lefebvre",
    comment:
      "Sweet Bonanza satisfies my craving for both sweets and wins. It's a fantastic blend of fun and potential big payouts.",
  },
  {
    img: "../../media/photos/comments/comment9.png",
    name: "Benjamin Beaulieu",
    comment:
      "Such a fun game! Sweet Bonanza's free spins keep me coming back for more, and the visuals are simply delightful.",
  },
  {
    img: "../../media/photos/comments/comment10.png",
    name: "Sophia Caron",
    comment:
      "Sweet Bonanza never disappoints! Love the adrenaline rush when those cascading wins keep rolling in. Highly recommended!",
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
              <a class="btn-true" aria-label="Yes">Ja</a>
              <a class="btn-false" aria-label="No">Nein</a>
            </div>
          </div>
        </div>
  `;
  return (reviews.innerHTML += review_template);
}
