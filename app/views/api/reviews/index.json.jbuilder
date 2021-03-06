json.reviews do 
    @reviews.each do |review|
        json.partial! "/api/reviews/single_review.json.jbuilder", review: review
    end
end

json.taggable do 
    @reviews.each do |review|
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