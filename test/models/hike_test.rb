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
require 'test_helper'

class HikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
