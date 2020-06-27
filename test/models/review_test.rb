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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
