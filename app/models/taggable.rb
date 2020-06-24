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
class Taggable < ApplicationRecord

    validates :tag_id, uniqueness: { scope: [:taggable_id, :taggable_type] }

    belongs_to :tag,
        foreign_key: :tag_id,
        class_name: :Tag

    belongs_to :taggable, :polymorphic => true

end
