class CreateThemes < ActiveRecord::Migration[5.0]
  def change
    create_table :themes do |t|
      t.string :theme, null: false
      t.timestamps null: false
    end
  end
end
