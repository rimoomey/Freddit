class CommentsController < ApplicationController
  def index
    comments = Comment.all
    comments = Comment.order_by_popularity(comments)
    render json: comments, status: :ok
  end

  def create
    comment = Comment.create(comment_params)
    post = Post.find(params[:post_id])
    comment.post = post
    user = User.find(session[:user_id])
    comment.user = user
    comment.num_likes = 0
    comment.save!
    render json: comment, status: :created
  end

  private

  def comment_params
    params.permit(:content)
  end
end
