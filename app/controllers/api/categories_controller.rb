class Api::CategoriesController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update]

  def index
    @categories = Category.all
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      render :show
    else
      render json: @category.errors.full_messages, status: 422
    end
  end

  def edit

  end

  def show
    @category = Category.find(params[:id])
    render json: @category
  end

  def update

  end

  def destroy

  end

  def search
    debugger
    category = Category.find_by(name: params[:name])
    @events = category.events
    render "api/events/index"
  end

  def category_params
    params.require(:category).permit(:name)
  end
end
