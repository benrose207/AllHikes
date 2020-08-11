json.array! @hikes do |hike|
        json.extract! hike, :id, :name, :description, :contact, :lat, :lng, :difficulty, :usage, :distance, :elevation_gain, :route_type, :waypoints, :avg_rating, :num_reviews
        json.coverPhotoUrl url_for(hike.coverPhoto)
end