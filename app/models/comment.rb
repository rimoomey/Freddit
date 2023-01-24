class Comment < ApplicationRecord
  validates :content, presence: true
  validates :num_likes, numericality: { only_integer: true }
  has_many :likes, as: :likeable
  has_many :users, through: :likes
  belongs_to :user
end
