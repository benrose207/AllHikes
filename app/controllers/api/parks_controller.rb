class Api::ParksController < ApplicationController

    def show       
        @park = Park.includes(:location).find_by(id: params[:id])
        @hikes = @park.hikes
                        .includes(coverPhoto_attachment: :blob)
                        .joins(:reviews)
                        .group('hikes.id')
                        .select("hikes.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews, SUM(reviews.rating) as sum_ratings")
                        .order("avg_rating")
        render :show
    end

end
