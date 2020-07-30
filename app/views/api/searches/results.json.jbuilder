json.array! @hikes do |hike|
    json.extract! hike, :id, :name
    json.type hike.class.name
end