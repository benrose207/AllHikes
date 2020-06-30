class Api::PhotosController < ApplicationController

    def create
        photos = params[:photos]

        @new_photos = []

        photos.each do |photo|
            new_photo = Photo.new(hike_id: params[:hike_id], user_id: params[:user_id], photo: photo)
            @new_photos << new_photo

            unless new_photo.save
                render json: new_photo.errors.full_messages, status: 422
                return
            end
        end

        render :basic
    end

    def index
        @photos = Photo.where(user_id: params[:user_id])
        render :index
    end

    private

    def photo_params
        params.require(:photos).permit(:hike_id, :user_id, photos: [])
    end

end
