class PostsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  def index
    posts = Post.all
    render json: posts, session_user_id: session[:user_id], status: :ok
  end

  def show
    post = Post.find(params[:id])
    render json: post, session_user_id: session[:user_id], serializer: ExpandedPostsSerializer, status: :ok
  end

  def create
    user = User.find_by(id: params[:user_id])
    if session[:user_id] == user.id
      post = Post.create(post_params)
      return errors(post) unless post.valid?

      topic = Topic.find_by(name: params[:topic_name])
      post.topic = topic
      post.user = user
      return render json: post, status: :created
    end
    unauthorized
  end

  def update
    user = User.find_by(id: params[:user_id])
    if session[:user_id] == user.id
      post = Post.find(params[:id])
      post.update(post_params)
      return errors(post) unless post.valid?

      return render json: post, status: :accepted
    end
    unauthorized
  end

  def destroy
    user = User.find_by(id: params[:user_id])
    Post.find(params[:id]).destroy if session[:user_id] == user.id

    unauthorized
  end

  private

  def errors(post)
    render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
  end

  def unauthorized
    render json: { error: 'Not authorized' }, status: :unauthorized
  end

  def post_params
    params.permit([:title, :thumbnail_url, :content, :topic_name, :user_id, :id])
  end

  def not_found
    render json: { error: 'Post not found' }, status: :not_found
  end
end
