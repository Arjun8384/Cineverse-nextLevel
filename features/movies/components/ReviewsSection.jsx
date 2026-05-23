import ReviewCard from "./ReviewCard";

export default function ReviewsSection({
  reviews,
}) {
  if (!reviews?.length) {
    return null;
  }

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-8">
        Reviews
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews
          .slice(0, 6)
          .map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
      </div>
    </section>
  );
}