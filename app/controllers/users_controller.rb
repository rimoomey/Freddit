class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  def index
    render json: User.all, status: :ok
  end

  def show
    user = User.find(params[:id])
    return render json: user, serializer: ExpandedUserSerializer, status: :ok if user.id == session[:user_id]

    render json: user, serializer: PrivateUserSerializer, status: :ok
  end

  private

  def not_found
    render json: { error: 'User ID invalid' }, status: :not_found
  end
end
