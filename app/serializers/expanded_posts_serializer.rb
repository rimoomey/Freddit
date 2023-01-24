class ExpandedPostsSerializer < ActiveModel::Serializer
  attributes :id, :content, :title, :num_likes, :comments, :updated_at, :created_at
  has_many :comments
  belongs_to :user
  belongs_to :topic
end
