class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def index
    @users = User.all
  end

  def email_exists
    user = User.find_by(email: params[:user][:email])
    if user
      render json: {exist: true}
    else
      render json: {exist: false}
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
