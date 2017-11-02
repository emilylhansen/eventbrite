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

  def search
    hash = {
      "class" => "Class",
      "party" => "Party",
      "performance" => "Performance",
      "tour" => "Tour",
      "networking" => "Networking",
      "seminar" => "Seminar",
      "other" => "Other",
      "conference" => "Conference",
      "race" => "Race",
      "gala" => "Gala",
      "game" => "Game",
      "attraction" => "Attraction",
      "festival" => "Festival",
      "screening" => "Screening",
      "expo" => "Expo",
      "retreat" => "Retreat",
      "appearance" => "Appearance",
      "tournament" => "Tournament",
      "convention" => "Convention",
      "rally" => "Rally"
    }
    eventType = EventType.find_by(name: hash[params[:eventType]])
    @eventTypes = eventType.events
    if @eventTypes
      render "api/events/index"
    else
      render json: ["No events found for this event type"]
    end
  end

  def event_params
    params.require(:eventType).permit(:name)
  end
end
