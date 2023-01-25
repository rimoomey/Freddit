class LikesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  def index
    user = User.find(params[:user_id])
    render json: user.likes, session_user_id: user.id, status: :ok
  end

  private

  def not_found
    render json: { error: 'No such user found' }, status: :not_found
  end
end
