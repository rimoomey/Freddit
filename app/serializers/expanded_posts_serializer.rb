class ExpandedPostsSerializer < ActiveModel::Serializer
  attributes :id, :content, :thumbnail_url, :title, :num_likes, :voted?, :sorted_comments, :updated_at, :created_at
  belongs_to :user
  belongs_to :topic

  def sorted_comments
    sorted = Comment.order_by_popularity(object.comments)
    sorted.map! do |comment|
      {
        id: comment.id,
        content: comment.content,
        num_likes: comment.num_likes,
        created_at: comment.created_at,
        user: user_info(comment.user),
        post_id: comment.post_id
      }
    end
    sorted
  end

  def voted?
    user = User.find_by(id: instance_options[:session_user_id])
    return false if user.nil?
    return true if object.user_id == user.id

    user.likes.each do |like|
      return true if like.likeable_id == object.id
    end
    false
  end

  private

  def user_info(user)
    return nil if user.nil?

    { id: user.id, username: user.username }
  end
end
