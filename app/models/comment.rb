class Comment < ApplicationRecord
  validates :content, presence: true
  validates :num_likes, numericality: { only_integer: true }
  belongs_to :likeable, polymorphic: true
  belongs_to :user
end
