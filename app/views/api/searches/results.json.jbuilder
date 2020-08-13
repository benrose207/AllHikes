parks_json = json.array! @parks do |park|
    json.extract! park, :id, :name
    json.type park.class.name
end

hikes_json = json.array! @hikes do |hike|
    json.extract! hike, :id, :name
    json.type hike.class.name
end

parks_json + hikes_json