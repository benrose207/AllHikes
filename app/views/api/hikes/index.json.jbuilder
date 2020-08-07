json.array! @hikes do |hike|
    json.set! hike.id do 
        json.extract! hike, :id, :name, :description, :contact, :lat, :lng, :difficulty, :usage, :distance, :elevation_gain, :route_type, :waypoints, :avg_rating, :num_reviews
        json.coverPhotoUrl url_for(hike.coverPhoto)
    end
end