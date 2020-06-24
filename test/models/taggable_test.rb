# == Schema Information
#
# Table name: taggables
#
#  id            :bigint           not null, primary key
#  tag_id        :integer          not null
#  taggable_id   :integer          not null
#  taggable_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class TaggableTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
