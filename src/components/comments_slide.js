import React from "react";
import { Carousel } from "react-bootstrap";
import "../assets/css/index.css";
const comment = (comment, name) => {
  return (
    <div className="comment-body">
      <div className="comment-content">{comment}</div>
      <span className="commenter">-{name}</span>
    </div>
  );
};
const CommentCarousel = () => {
  const comments = [
    {
      id: 1,
      comment: comment(
        "Anchal got Full marks in her Physics exam. So thanks for tutoring. Really made lot of impact.",
        "Anchal's Parents"
      ),
    },
    {
      id: 2,
      comment: comment(
        "Shreya scored 1390/1440 in PSAT with very little prep. The score was `99 percentile at national level.",
        "Shreya's Parents"
      ),
    },
    {
      id: 3,
      comment: comment(
        "Ritik we are in Texas where the Indian hub is there & there are lots of in person coaching every street but we like your teaching and matches our frequency, will wait for your availability. We can start coding & Math together. Looking forward thank you.",
        "Dhaitiri's Mom"
      ),
    },
    {
      id: 4,
      comment: comment(
        "I got my SAT scores today. I scored 1530. 750 in English and 780 in Math. Thank you so much Algo Ninjas.",
        "Shyam"
      ),
    },
    {
      id: 5,
      comment: comment(
        "I just wanted to say thank you Ritik for tutoring Sophia. I am very impress with the way you teach and communicate. Keep up the good work.        ",
        "Sophia's Mom"
      ),
    },
    // Add more comments as needed
  ];

  return (
    <div className="carousell">
      <h1>Parents and students love us!</h1>
      <Carousel>
        {comments.map((comment) => (
          <Carousel.Item key={comment.id}>{comment.comment}</Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CommentCarousel;
