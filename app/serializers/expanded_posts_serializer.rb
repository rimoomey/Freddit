class ExpandedPostsSerializer < ActiveModel::Serializer
  attributes :id, :content, :title, :num_likes, :comments, :updated_at, :created_at, :topic_id, :user_id
end
