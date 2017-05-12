class Api::V1::ThemesController < ApiController
  def index
    theme = Theme.pluck(:theme).cycle
    theme_id = Theme.pluck(:id).cycle
    start_time = DateTime.new(2017, 5, 9, 00, 00)
    end_time = DateTime.new(2018, 5, 9, 00, 00)

    start_time.step(end_time, 3) do |date|
      if (date..date + 3).cover?(DateTime.now)
        current_theme = theme.next
        theme_id = theme_id.next
        render json: { id: theme_id, theme: current_theme }
      else
        theme.next
        theme_id.next
      end
    end
  end
end
