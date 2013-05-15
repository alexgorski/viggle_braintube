# encoding: UTF-8
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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130515203811) do

  create_table "characters", :force => true do |t|
    t.string   "name"
    t.string   "gender"
    t.string   "actor_name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "questions", :force => true do |t|
    t.string   "title"
    t.text     "body"
    t.string   "answer"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "show_id"
  end

  create_table "shows", :force => true do |t|
    t.string   "title"
    t.string   "program_id"
    t.string   "category"
    t.text     "ad_target_genres"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

  create_table "viewers", :force => true do |t|
    t.string   "gender"
    t.string   "display_name"
    t.string   "guid"
    t.string   "zipcode"
    t.string   "primary_tv_provider"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
  end

end
