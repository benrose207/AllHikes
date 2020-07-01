# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  caption    :string
#  hike_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Photo < ApplicationRecord

    validate :ensure_photo
    validate :correct_file_type
    
    has_one_attached :photo

    belongs_to :hike,
        foreign_key: :hike_id,
        class_name: :Hike

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "must be attached"
        end
    end

    def correct_file_type
        unless self.photo.content_type.in?(["image/jpeg", "image/png"])
            errors[:photo] << "must be a jpg, jpeg, or png format"
        end
    end

end
