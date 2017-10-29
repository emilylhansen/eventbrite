class Api::EventCategoriesController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update]

  def index
    @eventCategories = EventCategory.all
  end

  def create
    @eventCategory = EventCategory.new(eventCategory_params)
    if @eventCategory.save
      render :show
    else
      render json: @eventCategory.errors.full_messages, status: 422
    end
  end

  def edit

  end

  def show
    @eventCategory = EventCategory.find(params[:id])
    render json: @eventCategory
  end

  def update

  end

  def destroy

  end

  def eventCategory_params
    params.require(:eventCategory).permit(:event_id, :category_id)
  end
end
