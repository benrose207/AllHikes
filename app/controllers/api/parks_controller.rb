class Api::ParksController < ApplicationController

    def show       
        @park = Park.includes(:location, hikes: [coverPhoto_attachment: :blob]).find_by(id: params[:id])
        @hikes = @park.hikes.joins(:reviews).group('hikes.id').select("hikes.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews")
        render :show
    end

end
