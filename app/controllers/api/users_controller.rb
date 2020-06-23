class Api::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :basic
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :about_me, :privacy)
    end

end
