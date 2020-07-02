class Api::PhotosController < ApplicationController

    def create
        photos = params[:photos]

        @photos = []

        photos.each_with_index do |photo, idx|
            

            new_photo = Photo.new(
                hike_id: params[:hike_id], 
                user_id: params[:user_id], 
                caption: params["#{idx}"],
                photo: photo)
                
            @photos << new_photo

            unless new_photo.save
                render json: new_photo.errors.full_messages, status: 422
                return
            end
        end

        render :index
    end

    def index
        if params[:hike_id]
            @photos = Photo.includes(photo_attachment: :blob).where(hike_id: params[:hike_id])
        elsif params[:user_id]
            @photos = Photo.where(user_id: params[:user_id])
        end
        render :index
    end

    private

    def photo_params
        params.require(:photos).permit(:hike_id, :user_id, photos: [])
    end

end
