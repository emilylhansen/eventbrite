# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

user1 = User.create!(email: "emily@gmail.com", password: "password", first_name: "Emily", last_name: "Hansen")
user2 = User.create!(email: "chandler@gmail.com", password: "password", first_name: "Chandler", last_name: "Bing")
user3 = User.create!(email: "monica@gmail.com", password: "password", first_name: "Monica", last_name: "Gellar")
user4 = User.create!(email: "pheobe@gmail.com", password: "password", first_name: "Pheobe", last_name: "Buffay")
user5 = User.create!(email: "ross@gmail.com", password: "password", first_name: "Ross", last_name: "Gellar")
user6 = User.create!(email: "joey@gmail.com", password: "password", first_name: "Joey", last_name: "Tribianni")
user7 = User.create!(email: "rachel@gmail.com", password: "password", first_name: "Rachel", last_name: "Greene")
user8 = User.create!(email: "gunther@gmail.com", password: "password", first_name: "Gunther", last_name: "Central-Perk")

Event.destroy_all

event1 = Event.create!(
  title: "LIVE Music ft. Pheobe Buffay",
  start_date_time: "2017-11-01 18:30:00",
  end_date_time: "2017-11-01 23:30:00",
  description: "Stop by Central Perk coffee shop for a scone and a cup
  of coffee, and listen to Pheobe Buffay sing all of her hit songs. You'll
  probably recognize her from her famouse music video 'Smelly Cat'!",
  price: 0,
  num_tickets: 50,
  organizer_id: user8.id,
  organizer_name: "Gunther",
  organizer_description: "I like my icy blonde hair and staring at Rachel.
  I love her.",
  avatar: File.open("app/assets/images/Ginkgo_biloba_scanned_leaf.jpg"),
  avatar_content_type: "image/jpeg",
  location: "Central Perk, New York, New York"
)

event2 = Event.create!(
  title: "Poke Ugly Naked Guy with a stick",
  start_date_time: "2017-11-01 18:30:00",
  end_date_time: "2017-11-01 23:30:00",
  description: "We're looking for several people to check if the ugly naked guy
  accross the street is alive. He hasn't moved in several hours and
  we are very worried about him. Please bring all of your chopsticks. We
  are fashioning a long poking device.",
  price: 0,
  num_tickets: 5,
  organizer_id: user6.id,
  organizer_name: "Joey",
  organizer_description: "I pizza, meatball subs, and women.",
  avatar: File.open("app/assets/images/Ginkgo_biloba_scanned_leaf.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

event3 = Event.create!(
  title: "Soap Opera Acting Workshop ft. Joey Tribianni",
  start_date_time: "2017-10-01 18:30:00",
  end_date_time: "2017-10-01 23:30:00",
  description: "Spend two hours with Soapie nominated actor Joey Tribianni!
  Joey is a very experienced actor who starred in 'Days of our Lives' as
  Dr. Drake Ramoray and has appeared in many small, low-budget, unkown shows.
  Learn Tribianni's almost award-winning techniques.",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user6.id,
  organizer_name: "Bronx Community College",
  organizer_description: "We embrace the arts!",
  avatar: File.open("app/assets/images/Ginkgo_biloba_scanned_leaf.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

event4 = Event.create!(
  title: "Visit this stick",
  start_date_time: "2017-10-01 18:30:00",
  end_date_time: "2017-10-01 23:30:00",
  description: "You'll have a great time!",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user1.id,
  organizer_name: "Emily",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/Ginkgo_biloba_scanned_leaf.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

event5 = Event.create!(
  title: "Tour this rock!",
  start_date_time: "2017-10-01 18:30:00",
  end_date_time: "2017-10-01 23:30:00",
  description: "You'll have a great time!",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user1.id,
  organizer_name: "Emily",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/Ginkgo_biloba_scanned_leaf.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

event6 = Event.create!(
  title: "Walk on this famous patch of grass",
  start_date_time: "2017-10-01 18:30:00",
  end_date_time: "2017-10-01 23:30:00",
  description: "You'll have a great time!",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user1.id,
  organizer_name: "Emily",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/Ginkgo_biloba_scanned_leaf.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

event7 = Event.create!(
  title: "Take pictures with this NYC leaf",
  start_date_time: "2017-10-01 18:30:00",
  end_date_time: "2017-10-01 23:30:00",
  description: "You'll have a great time!",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user1.id,
  organizer_name: "Emily",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/Ginkgo_biloba_scanned_leaf.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

event8 = Event.create!(
  title: "Tour this dead plant",
  start_date_time: "2017-10-01 18:30:00",
  end_date_time: "2017-10-01 23:30:00",
  description: "You'll have a great time!",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user1.id,
  organizer_name: "Emily",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/Ginkgo_biloba_scanned_leaf.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

event9 = Event.create!(
  title: "Collect acorns with me in Central Park",
  start_date_time: "2017-10-01 18:30:00",
  end_date_time: "2017-10-01 23:30:00",
  description: "You'll have a great time!",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user1.id,
  organizer_name: "National Acorn Lovers Association",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/Ginkgo_biloba_scanned_leaf.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

Category.destroy_all

category1 = Category.create!(name: "Business")
category2 = Category.create!(name: "Music")
category3 = Category.create!(name: "Food & Drink")
category4 = Category.create!(name: "Arts")
category5 = Category.create!(name: "Other")
category6 = Category.create!(name: "Health")
category7 = Category.create!(name: "Community")
category8 = Category.create!(name: "Family & Education")
category9 = Category.create!(name: "Film & Media")
category10 = Category.create!(name: "Science & Tech")
category11 = Category.create!(name: "Sports & Fitness")
category12 = Category.create!(name: "Hobbies")
category13 = Category.create!(name: "Charity & Causes")
category14 = Category.create!(name: "Fashion")
category15 = Category.create!(name: "Holiday")
category16 = Category.create!(name: "Spirituality")
category17 = Category.create!(name: "Travel & Outdoor")
category18 = Category.create!(name: "Home & Lifestyle")
category19 = Category.create!(name: "Government")
category20 = Category.create!(name: "Auto, Boat & Air")
category21 = Category.create!(name: "School Activities")

EventType.destroy_all

event_type1 = EventType.create!(name: "Class")
event_type2 = EventType.create!(name: "Party")
event_type3 = EventType.create!(name: "Performance")
event_type4 = EventType.create!(name: "Tour")
event_type5 = EventType.create!(name: "Networking")
event_type6 = EventType.create!(name: "Seminar")
event_type7 = EventType.create!(name: "Other")
event_type8 = EventType.create!(name: "Conference")
event_type9 = EventType.create!(name: "Race")
event_type10 = EventType.create!(name: "Gala")
event_type11 = EventType.create!(name: "Game")
event_type12 = EventType.create!(name: "Attraction")
event_type13 = EventType.create!(name: "Festival")
event_type14 = EventType.create!(name: "Screening")
event_type15 = EventType.create!(name: "Expo")
event_type16 = EventType.create!(name: "Retreat")
event_type17 = EventType.create!(name: "Appearance")
event_type18 = EventType.create!(name: "Tournament")
event_type19 = EventType.create!(name: "Convention")
event_type20 = EventType.create!(name: "Rally")

EventCategory.destroy_all

event_category1 = EventCategory.create!(event_id: event1.id, category_id: category1.id)
event_category2 = EventCategory.create!(event_id: event2.id, category_id: category2.id)
event_category3 = EventCategory.create!(event_id: event3.id, category_id: category3.id)
event_category4 = EventCategory.create!(event_id: event4.id, category_id: category4.id)

EventEventType.destroy_all

event_event_type1 = EventEventType.create!(event_id: event1.id, event_type_id: event_type1.id)
event_event_type2 = EventEventType.create!(event_id: event2.id, event_type_id: event_type2.id)
event_event_type3 = EventEventType.create!(event_id: event3.id, event_type_id: event_type3.id)
event_event_type4 = EventEventType.create!(event_id: event4.id, event_type_id: event_type3.id)
event_event_type5 = EventEventType.create!(event_id: event5.id, event_type_id: event_type3.id)
event_event_type6 = EventEventType.create!(event_id: event6.id, event_type_id: event_type4.id)
event_event_type7 = EventEventType.create!(event_id: event7.id, event_type_id: event_type5.id)
event_event_type8 = EventEventType.create!(event_id: event8.id, event_type_id: event_type7.id)
event_event_type9 = EventEventType.create!(event_id: event9.id, event_type_id: event_type7.id)

Ticket.destroy_all

ticket1 = Ticket.create!(event_id: event1.id, purchaser_id: user1.id)
ticket1 = Ticket.create!(event_id: event1.id, purchaser_id: user2.id)
ticket1 = Ticket.create!(event_id: event1.id, purchaser_id: user3.id)
ticket1 = Ticket.create!(event_id: event2.id, purchaser_id: user1.id)
ticket1 = Ticket.create!(event_id: event3.id, purchaser_id: user1.id)
ticket1 = Ticket.create!(event_id: event4.id, purchaser_id: user2.id)
ticket1 = Ticket.create!(event_id: event4.id, purchaser_id: user3.id)

SavedEvent.destroy_all

saved_event1 = SavedEvent.create!(user_id: user1.id, event_id: event1.id)
saved_event1 = SavedEvent.create!(user_id: user1.id, event_id: event2.id)
saved_event1 = SavedEvent.create!(user_id: user1.id, event_id: event3.id)
saved_event1 = SavedEvent.create!(user_id: user1.id, event_id: event4.id)
saved_event1 = SavedEvent.create!(user_id: user2.id, event_id: event1.id)
saved_event1 = SavedEvent.create!(user_id: user2.id, event_id: event2.id)
saved_event1 = SavedEvent.create!(user_id: user3.id, event_id: event1.id)
saved_event1 = SavedEvent.create!(user_id: user3.id, event_id: event3.id)
saved_event1 = SavedEvent.create!(user_id: user4.id, event_id: event3.id)
saved_event1 = SavedEvent.create!(user_id: user5.id, event_id: event3.id)
saved_event1 = SavedEvent.create!(user_id: user5.id, event_id: event4.id)
