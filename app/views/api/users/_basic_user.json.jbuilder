json.extract! user, :id, :first_name, :last_name 
if user.profilePicture.attached? 
    json.profilePicture url_for(user.profilePicture)
end