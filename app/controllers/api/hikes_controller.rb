class Api::HikesController < ApplicationController

    def show
        @hike = Hike.includes(:taggables, reviews: [:taggables, :reviewer]).find_by(id: params[:id]);
        @tags = Tag.all
        render :show
    end

end
