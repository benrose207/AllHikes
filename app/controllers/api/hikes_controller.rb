class Api::HikesController < ApplicationController

    def show
        @hike = Hike.includes(:taggables, :park, :location, coverPhoto_attachment: :blob, reviews: [:taggables, reviewer: [profilePicture_attachment: :blob]]).find_by(id: params[:id]);
        @nearby_hikes = Hike
                            .includes(coverPhoto_attachment: :blob)
                            .joins(:reviews).group('hikes.id')
                            .select("hikes.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews")
                            .where(park_id: @hike.park_id)
                            .where.not(id: @hike.id)
                            .order("avg_rating DESC")
        @tags = Tag.all
        render :show
    end

    def index
        @hikes = Hike
                    .includes(coverPhoto_attachment: :blob)
                    .joins(:reviews).group('hikes.id')
                    .select("hikes.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews")
                    .where(park_id: params[:park_id])
                    .order("avg_rating DESC")
        
        @hikes = @hikes.filter_by_difficulty(params[:difficulty])
        @hikes = @hikes.filter_by_route_type(params[:route_type])
        @hikes = @hikes.filter_by_rating(params[:rating])
        @hikes = @hikes.filter_by_usage(params[:usage])
        @hikes = @hikes.filter_by_min_length(params[:min_length])
        @hikes = @hikes.filter_by_max_length(params[:max_length])
        @hikes = @hikes.filter_by_min_elevation(params[:min_elevation])
        @hikes = @hikes.filter_by_max_elevation(params[:max_elevation])
    end

end
