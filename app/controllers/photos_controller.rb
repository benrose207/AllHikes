class PhotosController < ApplicationController

    def create

    end

    def index
        @photos = Photo.where(user_id: params[:user_id])
        render :index
    end

    private

    def photo_params
        params.require(:photo).permit(photos: [])
    end

end
