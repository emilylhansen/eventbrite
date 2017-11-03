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
    hash = {
    "business" => "Business",
    "music" => "Music",
    "food-and-drink" => "Food & Drink",
    "arts" => "Arts",
    "other" => "Other",
    "health" => "Health",
    "community" => "Community",
    "family-and-education" => "Family & Education",
    "film-and-media" => "Film & Media",
    "science-and-tech" => "Science & Tech",
    "sports-and-fitness" => "Sports & Fitness",
    "hobbies" => "Hobbies",
    "charity-and-causes" => "Charity & Causes",
    "fashion" => "Fashion",
    "holiday" => "Holiday",
    "spirituality" => "Spirituality",
    "travel-and-outdoor" => "Travel & Outdoor",
    "home-and-lifestyle" => "Home & Lifestyle",
    "government" => "Government",
    "auto-boat-and-air" => "Auto, Boat & Air",
    "school-activities" => "School Activities"
    }

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
