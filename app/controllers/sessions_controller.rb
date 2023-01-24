class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    return not_found if user.nil?

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      return render json: user, status: :ok
    end
    incorrect_username_or_password
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  private

  def incorrect_username_or_password
    render json: { error: 'incorrect username or password' }, status: :unauthorized
  end
end
