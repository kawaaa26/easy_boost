ActiveRecord::Schema.define(version: 2019_09_17_112722) do

  enable_extension "plpgsql"

  create_table "lessons", force: :cascade do |t|
    t.datetime "time", default: -> { "now()" }, null: false
    t.string "name", default: "", null: false
    t.string "studio", default: "", null: false
    t.string "performer", default: "", null: false
    t.integer "bag_number", default: 0, null: false
    t.boolean "cancellation", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
