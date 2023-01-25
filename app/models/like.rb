class Like < ApplicationRecord
  belongs_to :likeable, polymorphic: true
  belongs_to :user

  validates :vote, numericality: { in: -1..1 }
  validates :likeable_id, uniqueness: { scope: %i[user_id likeable_type], message: 'You can only like a likable object once!' }
end
