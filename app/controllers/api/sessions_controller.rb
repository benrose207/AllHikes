class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "/api/users/basic"
        else
            render json: ["Invalid username or password"], status: 422
        end
    end

    def destroy
        @user = User.find_by(id: params[:id])
        if @user 
            logout!
            render "/api/users/basic"
        else
            render json: ["No current user found"], status: 404
        end
    end

end
