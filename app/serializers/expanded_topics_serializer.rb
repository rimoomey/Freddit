class ExpandedTopicsSerializer < ActiveModel::Serializer
  attributes :id
  has_many :posts
end
