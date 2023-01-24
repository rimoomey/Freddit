class Likes < ApplicationRecord
  belongs_to :likeable
  belongs_to :user
end