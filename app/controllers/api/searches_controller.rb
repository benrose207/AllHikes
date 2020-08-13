class Api::SearchesController < ApplicationController

    def index
        if params[:query]
            pattern = params[:query].split("").join("%")
            @hikes = Hike.where("name ILIKE ?", "%#{pattern}%")
            @parks = Park.where("name ILIKE ?", "%#{pattern}%")
        else
            @hikes = Hike.limit(5)
            @parks = Park.limit(3)
        end

        render :results
    end

end
