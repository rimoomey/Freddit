class LikesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  def index
    user = User.find(params[:user_id])
    render json: user.likes, session_user_id: user.id, status: :ok
  end

  def create
    user = User.find(params[:user_id])
    return unauthorized unless user.id == session[:user_id]

    likeable = Comment.find(params[:comment_id]) if params[:comment_id]
    likeable = Post.find(params[:post_id]) if params[:post_id]

    likeable.num_likes += 1
    likeable.save

    like = Like.create(user: user, likeable: likeable)
    return render json: like, session_user_id: session[:user_id], status: :created if like.valid?

    errors(like.errors)
  end

  private

  def errors(errors)
    render json: { errors: errors.full_messages }, status: :unprocessable_entity
  end

  def not_found
    render json: { error: 'No such user found' }, status: :not_found
  end
end
