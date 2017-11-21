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
user9 = User.create!(email: "jack@gmail.com", password: "password", first_name: "Jack", last_name: "Gellar")
user10 = User.create!(email: "judy@gmail.com", password: "password", first_name: "Judy", last_name: "Gellar")
user11 = User.create!(email: "demo@gmail.com", password: "password", first_name: "Demo", last_name: "Demo")

Event.destroy_all

event1 = Event.create!(
  title: "LIVE music at the park!!",
  start_date_time: "2017-11-01 18:30:00",
  end_date_time: "2017-11-01 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user11.id,
  organizer_name: "Bryant Park",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/music-park.jpg"),
  avatar_content_type: "image/jpeg",
  location: "Bryant Park, New York, New York"
)

event2 = Event.create!(
  title: "Live music at Central Perk ft. Pheobe Buffay",
  start_date_time:  "2017-11-01 18:30:00",
  end_date_time: "2017-11-01 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 0,
  num_tickets: 500,
  organizer_id: user8.id,
  organizer_name: "Gunther",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/pheobe.jpg"),
  avatar_content_type: "image/jpeg",
  location: "Central Perk, New York, New York"
)

event3 = Event.create!(
  title: "Yoga at Mindful Studio",
  start_date_time:  "2017-11-01 18:30:00",
  end_date_time: "2017-11-01 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user11.id,
  organizer_name: "Mindful Studio",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/yoga2.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

event4 = Event.create!(
  title: "The Good Lyfe Sunday Brunch & Day Party",
  start_date_time: "2017-11-26 12:30:00",
  end_date_time:"2017-11-26 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 25.00,
  num_tickets: 100,
  organizer_id: user11.id,
  organizer_name: "Barcelona Bites",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/brunch.jpg"),
  avatar_content_type: "image/jpeg",
  location: "Barcelona Bites, New York, New York"
)

event5 = Event.create!(
  title: "Tour this dead plant",
  start_date_time:  "2017-11-01 18:30:00",
  end_date_time: "2017-11-01 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user11.id,
  organizer_name: "Monica",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/plant.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

event6 = Event.create!(
  title: "GallopNYC RPG Holiday Sweat Party",
  start_date_time:  "2017-12-16 13:30:00",
  end_date_time: "2017-12-16 16:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 30.00,
  num_tickets: 35,
  organizer_id: user4.id,
  organizer_name: "Solace CrossFit",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/crossfit.jpg"),
  avatar_content_type: "image/jpeg",
  location: "Solace CrossFit, New York, New York"
)

event7 = Event.create!(
  title: "Fall music festival",
  start_date_time: "2017-11-01 18:30:00",
  end_date_time: "2017-11-01 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 50.50,
  num_tickets: 500,
  organizer_id: user5.id,
  organizer_name: "Music Festival",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/concert.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)
event8 = Event.create!(
  title: "Tour this rock",
  start_date_time:  "2017-11-01 18:30:00",
  end_date_time:"2017-11-01 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user4.id,
  organizer_name: "Joey",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/rock.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)
event9 = Event.create!(
  title: "Tour this patch of grass",
  start_date_time:  "2017-11-01 18:30:00",
  end_date_time: "2017-11-01 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user6.id,
  organizer_name: "Jack",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/grass.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)
event10 = Event.create!(
  title: "Free records at Rhino Records",
  start_date_time: "2017-11-01 18:30:00",
  end_date_time: "2017-11-01 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user7.id,
  organizer_name: "Rhino Records",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/records.jpg"),
  avatar_content_type: "image/jpeg",
  location: "Rhino Records, New York, New York"
)
event11 = Event.create!(
  title: "Join us at Tap NYC",
  start_date_time:  "2017-12-04 18:30:00",
  end_date_time: "2017-12-04 20:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 25.00,
  num_tickets: 100,
  organizer_id: user8.id,
  organizer_name: "Feed Your Sister",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/sandwich.jpg"),
  avatar_content_type: "image/jpeg",
  location: "TAP NYC, New York, New York"
)

event12 = Event.create!(
  title: "Ugly Sweater Holiday Yacht Party",
  start_date_time:  "2017-12-19 18:00:00",
  end_date_time: "2017-12-19 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 35.00,
  num_tickets: 500,
  organizer_id: user9.id,
  organizer_name: "Hornblower Cruises",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/ugly_sweater.jpg"),
  avatar_content_type: "image/jpeg",
  location: "Hornblower Cruises & Events Pier 15, Financial District, New York, New York"
)

event13 = Event.create!(
  title: "Tantra Speed Date",
  start_date_time:  "2017-11-29 18:30:00",
  end_date_time: "2017-12-01 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 60.00,
  num_tickets: 40,
  organizer_id: user10.id,
  organizer_name: "Reflections Center for Conscious Living & Yoga",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/tantra.jpg"),
  avatar_content_type: "image/jpeg",
  location: "Reflections Center for Conscious Living & Yoga, Kips Bay, New York, New York"
)

event14 = Event.create!(
  title: "Tour this stick",
  start_date_time:  "2017-11-01 18:30:00",
  end_date_time: "2017-11-01 23:30:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 15.50,
  num_tickets: 500,
  organizer_id: user11.id,
  organizer_name: "All the sticks of NYC",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/sticks.jpg"),
  avatar_content_type: "image/jpeg",
  location: "New York, New York"
)

event15 = Event.create!(
  title: "Hamilton",
  start_date_time:  "2017-11-21 19:00:00",
  end_date_time: "2017-11-21 22:00:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 250.50,
  num_tickets: 500,
  organizer_id: user1.id,
  organizer_name: "Richard Rodgers Theatre",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/Hamilton.jpg"),
  avatar_content_type: "image/jpeg",
  location: "Richard Rodgers Theatre, New York, New York"
)
event16 = Event.create!(
  title: "HENNY&WAFFLES | NOVEMBER 26 | HUDSON TERRACE | NYC",
  start_date_time:  "2017-11-26 13:30:00",
  end_date_time: "2017-11-26 23:00:00",
  description:
  "Dominus et Domina Dursley, qui vivebant in aedibus Gestationis
  Ligustrorum numero quattuor signatis, non sine superbia dicebant se
  ratione ordinaria vivendi uti neque se paenitere illius rationis. in toto
  orbe terrarum vix credas quemquam esse minus deditum rebus novis
  et arcanis, quod ineptias tales omnino spernebant.
  Dominus Dursley praeerat societati nomine Grunnings, quae terebras
  fecit. vir erat amplus et corpulentus nullo fere collo, maxima tamen
  mystace. Domina Dursley erat macra et flava et prope alterum
  tantum colli habebat quam alii homines, quod magno ei usui fuit
  quod tantum tempus consumebat in collo super saepes hortorum
  porrigendo, finitimos inspiciens. Durslei filium parvum nomine
  Dudley habebant nec usquam, eorum sententia, erat puer splendidior.
  Durslei omnia habebant quae volebant, sed rem quandam occultam
  tenebant, et maxime timebant ne quis hoc secretum cognosceret.
  putabant enim id fore intolerabile si quis de Potteris certior fieret.
  Domina Potter erat soror Dominae Dursley, sed aliquot iam annos
  altera cum altera non convenerat; re vera Domina Dursley simulabat
  se non habere sororem, quod soror et coniunx eius, vir nefarius, erant
  omnibus modis dissimiles Dursleis. Durslei horrescebant rati quid
  dicturi essent finitimi si in viam suam advenirent Potteri. Durslei
  sciebant Potteros quoque filium parvum habere, sed eum ne viderant
  quidem. hic puer erat alia causa cur Potteros arcerent; nolebant enim
  filium suum Dudleum puero tali familiarem esse",
  price: 0,
  num_tickets: 500,
  organizer_id: user2.id,
  organizer_name: "HENNY&WAFFLES",
  organizer_description: "I'm a great event organizer",
  avatar: File.open("app/assets/images/waffles.jpg"),
  avatar_content_type: "image/jpeg",
  location: "Hudson Terrace, New York, New York"
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
# category20 = Category.create!(name: "Auto, Boat & Air")
# category21 = Category.create!(name: "School Activities")

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

event_category1 = EventCategory.create!(event_id: event1.id, category_id: category2.id)
event_category2 = EventCategory.create!(event_id: event2.id, category_id: category2.id)
event_category3 = EventCategory.create!(event_id: event3.id, category_id: category11.id)
event_category4 = EventCategory.create!(event_id: event4.id, category_id: category3.id)
event_category5 = EventCategory.create!(event_id: event5.id, category_id: category17.id)
event_category6 = EventCategory.create!(event_id: event6.id, category_id: category11.id)
event_category7 = EventCategory.create!(event_id: event7.id, category_id: category2.id)
event_category8 = EventCategory.create!(event_id: event8.id, category_id: category17.id)
event_category9 = EventCategory.create!(event_id: event9.id, category_id: category17.id)
event_category10 = EventCategory.create!(event_id: event10.id, category_id: category2.id)
event_category11 = EventCategory.create!(event_id: event11.id, category_id: category3.id)
event_category12 = EventCategory.create!(event_id: event12.id, category_id: category15.id)
event_category13 = EventCategory.create!(event_id: event13.id, category_id: category16.id)
event_category14 = EventCategory.create!(event_id: event14.id, category_id: category17.id)
event_category15 = EventCategory.create!(event_id: event15.id, category_id: category9.id)
event_category16 = EventCategory.create!(event_id: event16.id, category_id: category3.id)

EventEventType.destroy_all

event_event_type1 = EventEventType.create!(event_id: event1.id, event_type_id: event_type12.id)
event_event_type2 = EventEventType.create!(event_id: event2.id, event_type_id: event_type12.id)
event_event_type3 = EventEventType.create!(event_id: event3.id, event_type_id: event_type1.id)
event_event_type4 = EventEventType.create!(event_id: event4.id, event_type_id: event_type12.id)
event_event_type5 = EventEventType.create!(event_id: event5.id, event_type_id: event_type4.id)
event_event_type6 = EventEventType.create!(event_id: event6.id, event_type_id: event_type1.id)
event_event_type7 = EventEventType.create!(event_id: event7.id, event_type_id: event_type13.id)
event_event_type8 = EventEventType.create!(event_id: event8.id, event_type_id: event_type4.id)
event_event_type9 = EventEventType.create!(event_id: event9.id, event_type_id: event_type4.id)
event_event_type10 = EventEventType.create!(event_id: event10.id, event_type_id: event_type12.id)
event_event_type11 = EventEventType.create!(event_id: event11.id, event_type_id: event_type12.id)
event_event_type12 = EventEventType.create!(event_id: event12.id, event_type_id: event_type2.id)
event_event_type13 = EventEventType.create!(event_id: event13.id, event_type_id: event_type5.id)
event_event_type14 = EventEventType.create!(event_id: event14.id, event_type_id: event_type4.id)
event_event_type15 = EventEventType.create!(event_id: event15.id, event_type_id: event_type3.id)
event_event_type15 = EventEventType.create!(event_id: event16.id, event_type_id: event_type12.id)

Ticket.destroy_all

ticket1 = Ticket.create!(event_id: event1.id, purchaser_id: user11.id)
ticket2 = Ticket.create!(event_id: event1.id, purchaser_id: user1.id)
ticket3 = Ticket.create!(event_id: event1.id, purchaser_id: user2.id)
ticket4 = Ticket.create!(event_id: event2.id, purchaser_id: user11.id)
ticket5 = Ticket.create!(event_id: event2.id, purchaser_id: user1.id)
ticket6 = Ticket.create!(event_id: event3.id, purchaser_id: user11.id)
ticket7 = Ticket.create!(event_id: event3.id, purchaser_id: user3.id)
ticket8 = Ticket.create!(event_id: event3.id, purchaser_id: user4.id)
ticket9 = Ticket.create!(event_id: event4.id, purchaser_id: user5.id)
ticket10 = Ticket.create!(event_id: event4.id, purchaser_id: user6.id)
ticket11 = Ticket.create!(event_id: event4.id, purchaser_id: user7.id)
ticket12 = Ticket.create!(event_id: event5.id, purchaser_id: user8.id)
ticket13 = Ticket.create!(event_id: event5.id, purchaser_id: user9.id)
ticket14 = Ticket.create!(event_id: event6.id, purchaser_id: user10.id)
ticket15 = Ticket.create!(event_id: event6.id, purchaser_id: user1.id)
ticket16 = Ticket.create!(event_id: event7.id, purchaser_id: user11.id)
ticket17 = Ticket.create!(event_id: event7.id, purchaser_id: user2.id)
ticket18 = Ticket.create!(event_id: event8.id, purchaser_id: user3.id)
ticket19 = Ticket.create!(event_id: event8.id, purchaser_id: user4.id)
ticket20 = Ticket.create!(event_id: event9.id, purchaser_id: user5.id)
ticket21 = Ticket.create!(event_id: event9.id, purchaser_id: user6.id)
ticket22 = Ticket.create!(event_id: event10.id, purchaser_id: user7.id)
ticket23 = Ticket.create!(event_id: event11.id, purchaser_id: user11.id)
ticket24 = Ticket.create!(event_id: event12.id, purchaser_id: user11.id)
ticket25 = Ticket.create!(event_id: event13.id, purchaser_id: user9.id)
ticket26 = Ticket.create!(event_id: event14.id, purchaser_id: user8.id)
ticket27 = Ticket.create!(event_id: event15.id, purchaser_id: user1.id)
ticket28 = Ticket.create!(event_id: event16.id, purchaser_id: user2.id)

SavedEvent.destroy_all

saved_event1 = SavedEvent.create!(user_id: user11.id, event_id: event1.id)
saved_event2 = SavedEvent.create!(user_id: user11.id, event_id: event2.id)
saved_event3 = SavedEvent.create!(user_id: user11.id, event_id: event3.id)
saved_event4 = SavedEvent.create!(user_id: user11.id, event_id: event4.id)
saved_event5 = SavedEvent.create!(user_id: user11.id, event_id: event7.id)
saved_event6 = SavedEvent.create!(user_id: user11.id, event_id: event14.id)
saved_event7 = SavedEvent.create!(user_id: user11.id, event_id: event15.id)
saved_event8 = SavedEvent.create!(user_id: user11.id, event_id: event16.id)
