class Api::ReviewsController < ApplicationController

    def index
        if params[:user_id]
            @reviews = Review.includes(:taggables, :tags, :reviewer).where(user_id: params[:user_id])
        elsif params[:hike_id]
            @reviews = Review.includes(:taggables, :tags, :reviewer).where(hike_id: params[:hike_id])
        end
        @tags = Tag.all
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:rating, :review_text, :activity_date, :user_id, :hike_id, tag_ids: [])
    end

end
