class Api::GreetingsController < ApplicationController
  def random
    greeting = Greeting.order('RANDOM()').first.greeting
    render json: { message: greeting }
  end
end
