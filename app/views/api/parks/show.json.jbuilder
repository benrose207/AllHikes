json.park do 
    json.extract! @park, :id, :name, :acreage, :contact, :description, :summary, :park_type, :lat, :lng
end

json.hikes do 
    @hikes.each do |hike|
        json.set! hike.id do 
            json.extract! hike, :id, :name, :description, :contact, :lat, :lng, :difficulty, :usage, :distance, :elevation_gain, :route_type, :waypoints, :avg_rating, :num_reviews
            json.coverPhotoUrl url_for(hike.coverPhoto) # need to solve N+1 query here
        end
    end
end