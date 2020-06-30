json.extract! @user, :id, :first_name, :last_name, :email, :about_me, :privacy, :created_at
if @user.profilePicture.attached? 
    json.profilePicture url_for(@user.profilePicture)
end