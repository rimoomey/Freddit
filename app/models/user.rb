class User < ApplicationRecord
  validates :username, presence: true
  validates :username, uniqueness: true
  validates :email, presence: true
  validates :email, uniqueness: true

  has_secure_password

  before_save :downcase_email

  has_many :posts
  has_many :comments
  belongs_to :likeable, polymorphic: true, optional: true

  has_many :likes
  has_many :comments, through: :likes, source: :likeable, source_type: "Comment"
  has_many :posts, through: :likes, source: :likeable, source_type: "Post"

  private

  def downcase_email
    self.email = email.downcase
  end
end
