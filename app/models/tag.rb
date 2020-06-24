# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  tag_type   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord

    validates :tag_type, inclusion: { in: ["obstacle", "activity", "feature"] }

    has_many :taggables,
        foreign_key: :tag_id,
        class_name: :Taggable

end
