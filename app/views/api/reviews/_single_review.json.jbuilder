json.set! review.id do 
    json.extract! review, :id, :rating, :review_text, :activity_date, :user_id, :hike_id
end