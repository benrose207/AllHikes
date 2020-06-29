# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  rating        :integer          not null
#  review_text   :text             not null
#  activity_date :date             not null
#  user_id       :integer          not null
#  hike_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord

    validates :rating, :review_text, :activity_date, presence: true
    validates :activity_date, uniqueness: { scope: [:hike_id, :user_id], message: ": you can only leave 1 review for this hike on this date" }

    belongs_to :reviewer,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :hike,
        foreign_key: :hike_id,
        class_name: :Hike

    has_many :taggables, :as => :taggable

    has_many :tags,
        through: :taggables,
        source: :tag

end
