class Api::V1::ThemepostsController < ApiController
  def index
    # resets the theme and posts every 3 days
    theme = Theme.pluck(:theme).cycle
    theme_id = Theme.pluck(:id).cycle
    start_time = DateTime.new(2017, 5, 9, 00, 00)
    end_time = DateTime.new(2018, 5, 9, 00, 00)

    start_time.step(end_time, 3) do |date|
      if (date..date + 3).cover?(DateTime.now)
        current_theme = theme.next
        theme_id = theme_id.next
        break
      else
        @last_theme = theme.next
        @last_id = theme_id.next
      end
    end

    posts = Post.where(theme_id: @last_id).order(:vote_count).last(3)
    winning_posts = PostSerializer.new(posts)
    
    render json: posts, each_serializer: PostSerializer
  end
end
