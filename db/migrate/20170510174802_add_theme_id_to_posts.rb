class AddThemeIdToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :theme_id, :integer
  end
end
