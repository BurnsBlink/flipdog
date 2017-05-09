class Api::V1::ThemesController < ApiController
  def index
    theme = Theme.pluck(:theme).cycle
    start_time = DateTime.new(2017, 5, 9, 00, 00)
    end_time = DateTime.new(2018, 5, 9, 00, 00)

    start_time.step(end_time, 3) do |date|
      if (date..date + 3).cover?(DateTime.now)
        render json: theme.next.to_json
      end
    end
  end
end
