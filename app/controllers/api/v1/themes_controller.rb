class Api::V1::ThemesController < ApiController
  def index
    theme = Theme.pluck(:theme).cycle
    theme_id = Theme.pluck(:id).cycle
    start_time = DateTime.new(2017, 5, 11, 00, 00).change(offset: "+0400")
    end_time = DateTime.new(2018, 5, 11, 00, 00).change(offset: "+0400")

    start_time.step(end_time, 3) do |date|
      if (date..date + 3).cover?(DateTime.now)
        current_theme = theme.next
        next_theme = theme.next
        theme_id = theme_id.next
        date_switch = (date + 3).strftime('%m-%d-%Y %I:%M %p')
        render json: { id: theme_id, theme: current_theme, date: date_switch, next_theme: next_theme }
        break
      else
        theme.next
        theme_id.next
      end
    end
  end
end
