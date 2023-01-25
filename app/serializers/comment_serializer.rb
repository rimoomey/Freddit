class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :num_likes, :created_at, :post_id
  belongs_to :user
end
