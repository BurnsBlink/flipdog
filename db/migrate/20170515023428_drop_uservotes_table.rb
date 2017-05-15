class DropUservotesTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :uservotes
  end
end
