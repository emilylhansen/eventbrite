class Api::EventEventTypesController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update]

  def index
    @eventEventTypes = EventEventType.all
  end

  def create
    # debugger
    @eventEventType = EventEventType.new(eventEventType_params)
    if @eventEventType.save
      render :show
    else
      render json: @eventEventType.errors.full_messages, status: 422
    end
  end

  def edit

  end

  def show
    @eventEventType = EventEventType.find(params[:id])
    render json: @eventEventType
  end

  def update
    @eventEventType = EventEventType.find(params[:id])

    if @eventEventType.update(eventEventType_params)
      render :show
    else
      render json: @eventEventType.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  def eventEventType_params
    params.require(:eventEventType).permit(:event_id, :event_type_id)
  end
end
