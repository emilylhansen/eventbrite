class Api::EventsController < ApplicationController
  # before_action :ensure_logged_in, only: [:create]

  def index
    @events = Event.all
  end

  def create
    # debugger
    @event = Event.create!(event_params)
    if @event.save
      render :show
    else
      render json: @events.errors.full_messages, status: 422
    end
  end

  def edit

  end

  def show
    @event = Event.find(params[:id])
  end

  def update

  end

  def destroy

  end

  def event_params
    params.require(:event).permit(
      :title,
      :lat,
      :lng,
      :start_date_time,
      :end_date_time,
      :description,
      :price,
      :num_tickets,
      :organizer_id,
      :organizer_name,
      :organizer_description
    )
  end
end
