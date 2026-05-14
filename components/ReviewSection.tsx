"use client";

import React, { useState } from "react";
import { CheckCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StarRating, { InteractiveStarRating } from "@/components/StarRating";
import { Review } from "@/lib/products";

interface ReviewSectionProps {
  reviews: Review[];
  productName: string;
  averageRating: number;
  totalReviews: number;
}

export default function ReviewSection({
  reviews,
  productName,
  averageRating,
  totalReviews,
}: ReviewSectionProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review submitted:", formData);
    setSubmitted(true);
    setShowForm(false);
    setFormData({ name: "", rating: 0, comment: "" });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-3">
            <StarRating
              rating={averageRating}
              showCount={false}
              size="md"
            />
            <span className="text-gray-600">
              {averageRating.toFixed(1)} out of 5 ({totalReviews} reviews)
            </span>
          </div>
        </div>

        <Button
          onClick={() => setShowForm(!showForm)}
          variant={showForm ? "outline" : "default"}
        >
          {showForm ? "Cancel" : "Write a Review"}
        </Button>
      </div>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <p className="text-green-700">
            Thank you for your review! It will be displayed after moderation.
          </p>
        </div>
      )}

      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Write a Review for {productName}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="reviewer-name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="reviewer-name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              {/* FIXED: Prop name changed from onChange to onRatingChange */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Rating
                </label>
                <InteractiveStarRating
  value={formData.rating}
  updateAction={(rating: number) => setFormData({ ...formData, rating })}
/>
                {formData.rating === 0 && (
                  <p className="text-sm text-gray-500 mt-1">
                    Click on a star to rate
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="review-comment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Review
                </label>
                <Textarea
                  id="review-comment"
                  placeholder="Share your experience with this product..."
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={formData.rating === 0}
                className="w-full md:w-auto"
              >
                Submit Review
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Card key={review.id} className="border-gray-100">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">
                          {review.userName}
                        </span>
                        {review.verified && (
                          <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                            <CheckCircle className="h-3 w-3" />
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">
                        {formatDate(review.date)}
                      </span>
                    </div>

                    <StarRating
                      rating={review.rating}
                      showCount={false}
                      size="sm"
                      className="mb-2"
                    />

                    <p className="text-gray-600 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500 mb-4">
              No reviews yet. Be the first to review this product!
            </p>
            <Button onClick={() => setShowForm(true)}>Write a Review</Button>
          </div>
        )}
      </div>
    </section>
  );
}