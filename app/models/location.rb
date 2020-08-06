# == Schema Information
#
# Table name: locations
#
#  id                :bigint           not null, primary key
#  city              :string           not null
#  state             :string           not null
#  country           :string           not null
#  locationable_id   :integer          not null
#  locationable_type :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Location < ApplicationRecord

    validates :city, :state, :country, presence: true
    validates :locationable_id, uniqueness: { scope: :locationable_type }

    belongs_to :locationable, polymorphic: true

end
