class Api::HikesController < ApplicationController

    def show
        @hike = Hike.includes(:taggables, :tags).find_by(id: params[:id]);
        render :show
    end

end
