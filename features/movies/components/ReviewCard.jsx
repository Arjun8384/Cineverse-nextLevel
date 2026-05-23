export default function ReviewCard({
  review,
}) {
  return (
    <article className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg">
            {
              review.author
            }
          </h3>

          <p className="text-sm text-zinc-400">
            {
              review.author_details
                ?.username
            }
          </p>
        </div>

        {review.author_details
          ?.rating && (
          <div className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
            ⭐{" "}
            {
              review
                .author_details
                .rating
            }
            /10
          </div>
        )}
      </div>

      <p className="text-zinc-300 leading-relaxed line-clamp-6">
        {review.content}
      </p>
    </article>
  );
}