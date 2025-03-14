# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_03_03_215719) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", precision: nil, null: false
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "article_categories", force: :cascade do |t|
    t.bigint "article_id"
    t.bigint "category_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["article_id"], name: "index_article_categories_on_article_id"
    t.index ["category_id"], name: "index_article_categories_on_category_id"
  end

  create_table "article_tags", force: :cascade do |t|
    t.bigint "article_id"
    t.bigint "tag_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["article_id"], name: "index_article_tags_on_article_id"
    t.index ["tag_id"], name: "index_article_tags_on_tag_id"
  end

  create_table "articles", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.bigint "user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "published", default: false, null: false
    t.index ["user_id"], name: "index_articles_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.bigint "category_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "article_categories_count", default: 0
    t.index ["category_id"], name: "index_categories_on_category_id"
  end

  create_table "instruments", force: :cascade do |t|
    t.string "name"
    t.integer "position"
    t.bigint "song_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["name", "song_id"], name: "index_instruments_on_name_and_song_id", unique: true
    t.index ["song_id"], name: "index_instruments_on_song_id"
  end

  create_table "members", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
    t.string "talents"
    t.text "vocal_range"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "subject"
    t.text "message"
    t.boolean "read", default: false, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "performance_songs", force: :cascade do |t|
    t.bigint "performance_id"
    t.bigint "song_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["performance_id"], name: "index_performance_songs_on_performance_id"
    t.index ["song_id"], name: "index_performance_songs_on_song_id"
  end

  create_table "performances", force: :cascade do |t|
    t.string "venue"
    t.datetime "date", precision: nil
    t.text "details"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "profiles", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.text "bio"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "position"
  end

  create_table "rehearsal_songs", force: :cascade do |t|
    t.bigint "rehearsal_id"
    t.bigint "song_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["rehearsal_id"], name: "index_rehearsal_songs_on_rehearsal_id"
    t.index ["song_id"], name: "index_rehearsal_songs_on_song_id"
  end

  create_table "rehearsals", force: :cascade do |t|
    t.datetime "date", precision: nil
    t.string "venue"
    t.string "host"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "time"
    t.integer "rehearsal_songs_count", default: 0, null: false
  end

  create_table "songs", force: :cascade do |t|
    t.string "title"
    t.datetime "performance_date", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "slug"
    t.string "sort_order"
    t.text "description"
    t.integer "performances_count", default: 0
    t.integer "instruments_count", default: 0
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "article_tags_count", default: 0, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at", precision: nil
    t.datetime "last_sign_in_at", precision: nil
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "article_categories", "articles"
  add_foreign_key "article_categories", "categories"
  add_foreign_key "article_tags", "articles"
  add_foreign_key "article_tags", "tags"
  add_foreign_key "articles", "users"
  add_foreign_key "categories", "categories"
  add_foreign_key "instruments", "songs"
  add_foreign_key "performance_songs", "performances"
  add_foreign_key "performance_songs", "songs"
  add_foreign_key "rehearsal_songs", "rehearsals"
  add_foreign_key "rehearsal_songs", "songs"
end
