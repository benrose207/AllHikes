class Api::SearchesController < ApplicationController

    def index
        if params[:query]
            pattern = params[:query].split("").join("%")
            @hikes = Hike.where("name ILIKE ?", "%#{pattern}%")
            # Add parks when feature exists
        else
            @hikes = Hike.limit(5)
            # Add parks when feature exists
        end

        render :results
    end

end
