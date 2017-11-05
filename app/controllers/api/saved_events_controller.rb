class Api::SavedEventsController < ApplicationController

  def create
    debugger
    @user = current_user
    @savedEvent = SavedEvent.new(saved_event_params)
    if @savedEvent.save
      render "api/users/show"
      # render :show
    else
      render json: @savedEvent.errors.full_messages, status: 422
    end
  end

  def show
    @savedEvent = SavedEvent.find(params[:id])
    render :show
  end

  def index
    @savedEvents = SavedEvent.all
  end

  def destroy
    debugger
    @user = current_user
    @savedEvent = SavedEvent.find(params[:id])
    @savedEvent.destroy
    render "api/users/show"
    # render json: @savedEvent
  end
  def saved_event_params
    params.require(:saved_event).permit(:user_id, :event_id)
  end
end
