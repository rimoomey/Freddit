class CommentsController < ApplicationController
  def index
    comments = Comment.all
    comments = Comment.order_by_popularity(comments)
    render json: comments, status: :ok
  end
end
