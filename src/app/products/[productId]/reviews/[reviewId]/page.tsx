const ReviewDetail = ({params} : {params : {productId: string; reviewId: string;}}) => {
  return (
    <h1>Review {params.reviewId} about product {params.productId}</h1>
  );
}

export default ReviewDetail;
