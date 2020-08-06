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
require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
