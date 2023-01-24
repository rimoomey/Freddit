class PostSerializer < ActiveModel::Serializer
  attributes :id, :thumbnail_url, :title, :num_likes, :created_at
  belongs_to :topic, serializer: ReducedTopicSerializer
  belongs_to :user
end
