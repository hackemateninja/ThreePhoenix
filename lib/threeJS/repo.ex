defmodule ThreeJS.Repo do
  use Ecto.Repo,
    otp_app: :threeJS,
    adapter: Ecto.Adapters.Postgres
end
