class Api::HikesController < ApplicationController

    def show
        @hike = Hike.includes(:taggables, coverPhoto_attachment: :blob, reviews: [:taggables, reviewer: [profilePicture_attachment: :blob]]).find_by(id: params[:id]);
        @tags = Tag.all
        render :show
    end

end
