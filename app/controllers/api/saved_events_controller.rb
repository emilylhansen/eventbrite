class Api::SavedEventsController < ApplicationController

  def create
    @savedEvent = SavedEvent.new(saved_event_params)
    if @savedEvent.save
      render :show
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
    @savedEvent = SavedEvent.find(params[:id])
    @savedEvent.destroy
    render json: @savedEvent
  end
  def saved_event_params
    params.require(:saved_event).permit(:user_id, :event_id)
  end
end
