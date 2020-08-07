class Api::HikesController < ApplicationController

    def show
        @hike = Hike.includes(:taggables, :location, coverPhoto_attachment: :blob, reviews: [:taggables, reviewer: [profilePicture_attachment: :blob]]).find_by(id: params[:id]);
        @tags = Tag.all
        render :show
    end

    def index
        @hikes = Hike
                    .includes(coverPhoto_attachment: :blob)
                    .joins(:reviews).group('hikes.id')
                    .select("hikes.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews")
                    .where(park_id: params[:park_id])
                    .order("avg_rating")

        @hikes = @hikes.filter_by_difficulty(params[:difficulty])
        @hikes = @hikes.filter_by_route_type(params[:route_type])
        @hikes = @hikes.filter_by_rating(params[:rating])
        @hikes = @hikes.filter_by_usage(params[:usage])
    end

end
