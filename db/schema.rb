# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_29_211911) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "hikes", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.text "contact"
    t.float "lng", null: false
    t.float "lat", null: false
    t.string "difficulty", null: false
    t.string "usage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "distance", null: false
    t.integer "elevation_gain"
    t.string "route_type", null: false
    t.text "waypoints", null: false
    t.index ["name"], name: "index_hikes_on_name", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.text "review_text", null: false
    t.date "activity_date", null: false
    t.integer "user_id", null: false
    t.integer "hike_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hike_id"], name: "index_reviews_on_hike_id"
    t.index ["user_id", "hike_id", "activity_date"], name: "index_reviews_on_user_id_and_hike_id_and_activity_date", unique: true
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "taggables", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "taggable_id", null: false
    t.string "taggable_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id", "taggable_id", "taggable_type"], name: "index_taggables_on_tag_id_and_taggable_id_and_taggable_type", unique: true
    t.index ["tag_id"], name: "index_taggables_on_tag_id"
    t.index ["taggable_id"], name: "index_taggables_on_taggable_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.string "tag_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "about_me"
    t.boolean "privacy", default: false, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
