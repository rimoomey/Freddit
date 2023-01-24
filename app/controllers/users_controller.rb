class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  def index
    render json: User.all, status: :ok
  end

  def show
    user = User.find(params[:id])
    render json: user, status: :ok
  end

  private

  def not_found
    render json: {error: "User ID invalid"}, status: :not_found
  end
end
