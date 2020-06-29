json.review do 
    json.set! @review.id do 
        json.extract! @review, :id, :rating, :review_text, :activity_date, :user_id, :hike_id
    end
end

json.taggable do
    @review.taggables.each do |taggable|
        json.set! taggable.id do 
            json.extract! taggable, :id, :tag_id, :taggable_id, :taggable_type
        end 
    end
end