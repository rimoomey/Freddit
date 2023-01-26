class CommentsController < ApplicationController
  before_action :get_user
  before_action :get_post
  def index
    comments = @user.comments unless @user.nil?
    comments = @post.comments unless @post.nil?
    comments = Comment.all if @user.nil? && @post.nil?
    return too_many_arguments if !@user.nil? && !@post.nil?

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

  def get_post
    @post = Post.find_by(id: params[:post_id])
    post_not_found if params[:post_id] && @post.nil?
  end

  def get_user
    @user = User.find_by(id: params[:user_id])
    user_not_found if params[:user_id] && @user.nil?
  end

  def post_not_found
    render json: { errors: 'Post not found' }, status: :not_found
  end

  def user_not_found
    render json: { errors: 'User not found' }, status: :not_found
  end

  def too_many_arguments
    render json: { errors: 'Too many arguments' }, status: :unprocessable_entity
  end

  def comment_params
    params.permit(:content)
  end
end
