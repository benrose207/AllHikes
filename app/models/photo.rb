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

    has_one_attached :photo

    belongs_to :hike,
        foreign_key: :hike_id,
        class_name: :Hike

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
