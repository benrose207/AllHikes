json.hike do 
    json.extract! @hike, :id, :name, :description, :contact, :lat, :lng, :difficulty, :usage, :distance, :elevation_gain, :route_type, :waypoints
    json.coverPhotoUrl url_for(@hike.coverPhoto)
    json.city @hike.location.city
    json.state @hike.location.state
    json.country @hike.location.country
    json.parkId @hike.park.id
    json.parkName @hike.park.name
end

json.taggable do
    @hike.taggables.each do |taggable|
        json.set! taggable.id do 
            json.extract! taggable, :id, :tag_id, :taggable_id, :taggable_type
        end
    end

    @hike.reviews.each do |review|
        review.taggables.each do |taggable|
            json.set! taggable.id do 
                json.extract! taggable, :id, :tag_id, :taggable_id, :taggable_type
            end
        end
    end
end

json.tags do 
    @tags.each do |tag|
        json.set! tag.id do
            json.extract! tag, :id, :name, :tag_type
        end
    end
end

json.reviews do 
    @hike.reviews.each do |review|
        json.partial! "/api/reviews/single_review.json.jbuilder", review: review
    end
end

json.users do 
    @hike.reviews.each do |review|
        json.set! review.reviewer.id do
            json.extract! review.reviewer, :id, :first_name, :last_name

            if review.reviewer.profilePicture.attached? 
                json.profilePicture url_for(review.reviewer.profilePicture)
            end
        end
    end
end

json.nearbyHikes do
    json.array! @nearby_hikes do |hike|
            json.extract! hike, :id, :name, :description, :lat, :lng, :difficulty, :usage, :distance, :elevation_gain, :route_type, :avg_rating, :num_reviews
            json.coverPhotoUrl url_for(hike.coverPhoto)
    end
end