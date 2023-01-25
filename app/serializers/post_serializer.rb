class PostSerializer < ActiveModel::Serializer
  attributes :id, :thumbnail_url, :title, :num_likes, :voted?, :created_at
  belongs_to :topic, serializer: ReducedTopicSerializer
  belongs_to :user

  def voted?
    user = User.find_by(id: instance_options[:session_user_id])
    return false if user.nil?
    return true if object.user_id == user.id

    user.likes.each do |like|
      return true if like.likeable_id == object.id
    end
    false
  end
end
