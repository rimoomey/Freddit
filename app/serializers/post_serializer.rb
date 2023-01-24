class PostSerializer < ActiveModel::Serializer
  attributes :id, :thumbnail_url, :title, :num_likes, :updated_at, :topic_id, :user_id
end
