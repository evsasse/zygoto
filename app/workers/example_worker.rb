class ExampleWorker
  include Sidekiq::Worker

  def perform()
    # do something
  end
end