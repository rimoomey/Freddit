class User < ApplicationRecord
  validates :username, presence: true
  validates :username, uniqueness: true
  validates :email, presence: true
  validates :email, uniqueness: true
  validates :password, presence: true

  has_secure_password

  before_save :downcase_email

  has_many :posts

  private

  def downcase_email
    self.email = email.downcase
  end
end
