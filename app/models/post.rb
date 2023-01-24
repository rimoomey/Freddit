class Post < ApplicationRecord
  validates :title, presence: true
  validates :title, length: { maximum: 50 }
  validates :content, presence: true
  validates :num_likes, numericality: { only_integer: true }

  has_many :likes, as: :likeable
  has_many :users, through: :likes
  has_many :comments
  belongs_to :user, optional: true
  belongs_to :topic, optional: true

  def self.titles(posts)
    posts.map(&:title)
  end
end
