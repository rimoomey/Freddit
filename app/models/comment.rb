class Comment < ApplicationRecord
  validates :content, presence: true
  validates :num_likes, numericality: { only_integer: true }

  has_many :likes, as: :likeable
  has_many :users, through: :likes
  belongs_to :user
  belongs_to :post

  def self.order_by_popularity(comment_collection)
    comment_collection.sort_by(&:num_likes).reverse!
  end
end
