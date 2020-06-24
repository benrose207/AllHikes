class Api::HikesController < ApplicationController

    def show
        @hike = Hike.find_by(id: params[:id]);
        render :show
    end

end
