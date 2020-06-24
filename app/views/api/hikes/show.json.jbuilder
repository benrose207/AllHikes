json.hike do 
    json.extract! @hike, :id, :name, :description, :contact, :lat, :lng, :difficulty, :usage
end

json.taggable do
    @hike.taggables.each do |taggable|
        json.set! taggable.id do 
            json.extract! taggable, :id, :tag_id, :taggable_id, :taggable_type
        end
    end
end

json.tags do 
    @hike.tags.each do |tag|
        json.set! tag.id do
            json.extract! tag, :id, :name, :tag_type 
        end
    end
end