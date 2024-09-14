import { notFound } from "next/navigation";

const ReviewDetail = ({
  params
} : {
  params : {
    productId: string;
    reviewId: string;
  }
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} about product {params.productId}
    </h1>
  );
}

export default ReviewDetail;
