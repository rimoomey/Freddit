class ExpandedPostsSerializer < ActiveModel::Serializer
  attributes :id, :content, :title, :num_likes, :voted?, :sorted_comments, :updated_at, :created_at
  # has_many :comments, serializer: CommentSerializer
  belongs_to :user
  belongs_to :topic

  def sorted_comments
    sorted = Comment.order_by_popularity(object.comments)
    sorted.map! do |comment|
      {
        id: comment.id,
        content: comment.content,
        comment: comment.num_likes,
        created_at: comment.created_at,
        user_id: comment.user_id,
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
end
