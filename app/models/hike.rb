# == Schema Information
#
# Table name: hikes
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  contact     :text
#  lng         :float            not null
#  lat         :float            not null
#  difficulty  :string           not null
#  usage       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Hike < ApplicationRecord

    validates :name, :lng, :lat, :difficulty, presence: true
    valides :difficulty, inclusion: { in: ["easy", "moderate", "difficult", "strenuous"] }
    valides :usage, inclusion: { in: ["light", "moderate", "heavy", "extra heavy"] }

end
