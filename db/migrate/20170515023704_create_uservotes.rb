class CreateUservotes < ActiveRecord::Migration[5.0]
  def change
    create_table :uservotes do |t|
      t.boolean :voted, default: false

      t.belongs_to :post
      t.belongs_to :user
      t.timestamps null: false
    end
  end
end
