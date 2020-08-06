# == Schema Information
#
# Table name: parks
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  acreage     :integer
#  contact     :string
#  description :text             not null
#  summary     :text             not null
#  park_type   :string
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Park < ApplicationRecord

    validates :name, :description, :summary, :lat, :lng, presence: true
    validates :park_type, inclusion: { in: ["State", "National", "Regional"] }

    has_many :hikes,
        foreign_key: :park_id,
        class_name: :Hike

    has_one :location, :as => :locationable

end
