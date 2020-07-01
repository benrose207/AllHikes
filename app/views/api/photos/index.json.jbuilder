@photos.each do |photo|
    json.set! photo.id do
        json.extract! photo, :id, :hike_id, :user_id
        json.photo url_for(photo.photo)
    end
end