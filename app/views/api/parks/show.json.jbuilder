json.park do 
    json.extract! @park, :id, :name, :acreage, :contact, :description, :summary, :park_type, :lat, :lng
    json.city @park.location.city
    json.state @park.location.state
    json.country @park.location.country
end

json.hikes do 
    @hikes.each do |hike|
        json.set! hike.id do 
            json.extract! hike, :id, :name, :description, :contact, :lat, :lng, :difficulty, :usage, :distance, :elevation_gain, :route_type, :waypoints, :avg_rating, :num_reviews, :sum_ratings, :park_id
            json.coverPhotoUrl url_for(hike.coverPhoto)
        end
    end
end