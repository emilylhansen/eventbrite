class Api::EventTypesController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update]

  def index
    @eventTypes = EventType.all
  end

  def create
    @eventType = EventType.new(event_params)
    if @eventType.save
      render :show
    else
      render json: @eventType.errors.full_messages, status: 422
    end
  end

  def edit

  end

  def show
    @eventType = EventType.find(params[:id])
    render json: @eventType
  end

  def update

  end

  def destroy

  end

  def event_params
    params.require(:eventType).permit(:name)
  end
end
