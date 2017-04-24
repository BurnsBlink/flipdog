class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :dog_name, null: false
      t.string :image_url, null: false
      t.string :description, null: false

      t.timestamps null: false
    end
  end
end
