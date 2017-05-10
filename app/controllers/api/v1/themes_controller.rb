class Api::V1::ThemesController < ApiController
  def index
    theme = Theme.pluck(:theme).cycle
    theme_id = Theme.pluck(:id).cycle
    start_time = DateTime.new(2017, 5, 9, 00, 00)
    end_time = DateTime.new(2018, 5, 9, 00, 00)

    start_time.step(end_time, 3) do |date|
      if (date..date + 3).cover?(DateTime.now.beginning_of_day)
        render json: { id: theme_id.next, theme: theme.next }
      end
    end
  end
end
