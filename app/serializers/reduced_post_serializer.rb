class ReducedPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :topic_name

  def topic_name
    object.topic.name
  end
end
