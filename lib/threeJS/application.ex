defmodule ThreeJS.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      ThreeJSWeb.Telemetry,
      # Start the Ecto repository
      ThreeJS.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: ThreeJS.PubSub},
      # Start the Endpoint (http/https)
      ThreeJSWeb.Endpoint
      # Start a worker by calling: ThreeJS.Worker.start_link(arg)
      # {ThreeJS.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: ThreeJS.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    ThreeJSWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
