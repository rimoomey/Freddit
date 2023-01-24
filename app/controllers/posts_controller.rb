class PostsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  def index
    posts = Post.all
    render json: posts, status: :ok
  end

  def show
    post = Post.find(params[:id])
    render json: post, serializer: ExpandedPostsSerializer, status: :ok
  end

  private

  def not_found
    render json: {error: "Post not found"}, status: :not_found
  end
end
