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
    hash = {"music" => "Music",
    "food-and-drink" => "Food & Drink",
    "performance" => "Performance",
    "seminar" => "Seminar"}
    category = Category.find_by(name: hash[params[:category]])
    @events = category.events
    if @events
      render "api/events/index"
    else
      render json: ["No events found for this category"]
    end
  end

  def category_params
    params.require(:category).permit(:name)
  end
end
