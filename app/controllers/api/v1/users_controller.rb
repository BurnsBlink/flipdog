class Api::V1::UsersController < ApiController
  def index
    @user = current_user
    render json: @user
  end
end
