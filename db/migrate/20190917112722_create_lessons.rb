class CreateLessons < ActiveRecord::Migration[6.0]
  def change
    create_table :lessons do |t|
      t.time :time, default: -> { "now()" }, null: false
      t.string :name, default: "", null: false
      t.string :studio, default: "", null: false
      t.string :performer, default: "", null: false
      t.integer :bag_number, default: 0, null: false
      t.boolean :cancellation, default: false, null: false

      t.timestamps
    end
  end
end
