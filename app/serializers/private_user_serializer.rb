class PrivateUserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :posts
end
