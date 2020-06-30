# == Schema Information
#
# Table name: hikes
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  description    :text
#  contact        :text
#  lng            :float            not null
#  lat            :float            not null
#  difficulty     :string           not null
#  usage          :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  distance       :float            not null
#  elevation_gain :integer
#  route_type     :string           not null
#  waypoints      :text             not null
#
class Hike < ApplicationRecord

    validates :name, :lng, :lat, :difficulty, :waypoints, presence: true
    validates :difficulty, inclusion: { in: ["easy", "moderate", "difficult", "strenuous"] }
    validates :usage, inclusion: { in: ["light", "moderate", "heavy", "extra heavy"] }
    validates :route_type, inclusion: { in: ["Out & Back", "Loop", "Point-to-Point"] }

    has_one_attached :coverPhoto

    has_many :taggables, :as => :taggable

    has_many :tags,
        through: :taggables,
        source: :tag

    has_many :reviews,
        foreign_key: :hike_id,
        class_name: :Review

    has_many :userPhotos,
        foreign_key: :hike_id,
        class_name: :Photo
end
