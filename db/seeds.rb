# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

user1 = User.create!(email: "emily@gmail.com", password: "password", first_name: "emily", last_name: "hansen")
user2 = User.create!(email: "chandler@gmail.com", password: "password", first_name: "chandler", last_name: "bing")
user3 = User.create!(email: "monica@gmail.com", password: "password", first_name: "monica", last_name: "gellar")
