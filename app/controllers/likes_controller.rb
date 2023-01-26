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

    like = Like.create(like_params)
    if like.valid?
      like.update_likes
      return render json: like, session_user_id: session[:user_id], status: :created
    end

    errors(like.errors)
  end

  private

  def like_params
    params.permit([:user, :likeable, :vote])
  end

  def unauthorized
    render json: { error: 'You do not have permission to view this page' }, status: :unauthorized
  end

  def errors(errors)
    render json: { errors: errors.full_messages }, status: :unprocessable_entity
  end

  def not_found
    render json: { error: 'No such user found' }, status: :not_found
  end
end
