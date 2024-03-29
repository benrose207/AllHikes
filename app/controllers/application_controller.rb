class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        # QUESTION: is this function necessary anymore? If so, what do I do if the user is not logged in? Issue redirect from here? Should be handled by front-end auth/protected routes
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end

end
