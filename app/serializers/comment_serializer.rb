class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :num_likes, :created_at, :user_id, :post_id
end
