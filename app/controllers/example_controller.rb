class ExampleController < ActionController::Base
  layout "example"

  def index
    ExampleWorker.perform_in(5.seconds)
  end
end
