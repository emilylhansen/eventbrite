class TicketsController < ApplicationController

  def create
    @ticket = Ticket.new(ticket_params)
    if @ticket.save
      render :show
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def index
    @tickets = Ticket.all
  end

  def show
    @ticket = Ticket.find(params[:id])
    render json: @ticket
  end

  def ticket_params
    params.require(:ticket).permit(:event_id, :purchaser_id)
  end
end
