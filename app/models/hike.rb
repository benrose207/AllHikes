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
#  park_id        :integer          not null
#
class Hike < ApplicationRecord

    validates :name, :lng, :lat, :difficulty, :waypoints, presence: true
    validates :difficulty, inclusion: { in: ["easy", "moderate", "difficult", "strenuous"] }
    validates :usage, inclusion: { in: ["light", "moderate", "heavy", "extra heavy"] }
    validates :route_type, inclusion: { in: ["Out & Back", "Loop", "Point-to-Point"] }

    scope :filter_by_difficulty, -> (difficulty) { where(difficulty: difficulty.split(",")) if difficulty.present? }
    scope :filter_by_route_type, -> (route_type) { where(route_type: route_type.split(",")) if route_type.present? }
    scope :filter_by_rating, -> (rating) { joins(:reviews).having("AVG(reviews.rating) >= ?", rating) if rating.present? }
    scope :filter_by_usage, -> (usage) { where(usage: usage.split(",")) if usage.present? }
    scope :filter_by_min_length, -> (min_length) { where("distance >= ?", min_length) if min_length.present? }
    scope :filter_by_max_length, -> (max_length) { where("distance <= ?", max_length) if max_length.present? }
    scope :filter_by_min_elevation, -> (min_elevation) { where("elevation_gain >= ?", min_elevation) if min_elevation.present? }
    scope :filter_by_max_elevation, -> (max_elevation) { where("elevation_gain <= ?", max_elevation) if max_elevation.present? }

    has_one_attached :coverPhoto

    belongs_to :park,
        foreign_key: :park_id,
        class_name: :Park

    has_one :location,
        through: :park,
        source: :location

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
