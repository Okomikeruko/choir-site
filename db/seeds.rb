# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  email: 'whittakerlee81@gmail.com',
  password: 'P@$$w0rd',
  password_confirmation: 'P@$$w0rd'
)

bio = 'Potenti nullam ac tortor vitae. Sed turpis tincidunt id aliquet ' \
      'risus feugiat in ante metus. Aenean et tortor at risus viverra ' \
      'adipiscing at in tellus. Mauris a diam maecenas sed enim. Mattis rhoncus ' \
      'urna neque viverra justo nec. Mauris a diam maecenas sed enim ut sem. ' \
      'Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. ' \
      'Ut aliquam purus sit amet luctus. Velit laoreet id donec ultrices.  ' \
      '\n\n ' \
      'Ut venenatis tellus in metus vulputate eu scelerisque. Ut tortor pretium ' \
      'viverra suspendisse. Urna cursus eget nunc scelerisque. Tristique et ' \
      'egestas quis ipsum suspendisse ultrices. Odio ut sem nulla pharetra. ' \
      'Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum ' \
      'arcu. Lobortis feugiat vivamus at augue.'

Profile.create!(
  name: 'Sid Unrau',
  title: 'Choir Director',
  bio: bio,
  position: 1
)

Profile.create!(
  name: 'Lee Whittaker',
  title: 'Assistant Choir Director',
  bio: bio,
  position: 2
)

Profile.create!(
  name: 'Heather Taylor',
  title: 'Accompanist',
  bio: bio,
  position: 3
)

tag_names = []
tags = []
while tag_names.length < 5
  tag_names << Faker::Music.instrument
  tag_names = tag_names.uniq
end

tag_names.each do |name|
  tag = Tag.create!(
    name: name,
    slug: name.parameterize
  )
  tags << tag unless tag.nil?
end

categories = []

3.times do
  name = Faker::Company.buzzword
  category = Category.create!(
    name: name,
    slug: name.parameterize
  )
  categories << category unless category.nil?
end

15.times do
  Article.create!(
    title: Faker::Lorem.sentence.titleize,
    content: Faker::Lorem.paragraph,
    user_id: User.first.id,
    category_ids: categories.sample.id,
    tag_ids: tags.sample(Random.rand((tags.count + 1).to_f)).map(&:id)
  )
end

50.times do
  name = Faker::Name.first_name
  Message.create!(
    name: "#{name} #{Faker::Name.last_name}",
    email: Faker::Internet.email(name: name),
    subject: Faker::Lorem.sentence,
    message: Faker::Lorem.paragraphs.join(" \n "),
    read: Faker::Boolean.boolean
  )
end

# Members
%w[Soprano Alto Tenor Bass].each do |voice|
  6.times do
    case voice
    when 'Soprano', 'Alto'
      name = "#{Faker::Name.female_first_name} #{Faker::Name.last_name}"
    when 'Tenor', 'Bass'
      name = "#{Faker::Name.male_first_name} #{Faker::Name.last_name}"
    else
      break # Exit the 'times' loop, continues with next voice in 'each' loop
    end
    Member.create!(
      name: name,
      email: Faker::Internet.email,
      phone: Faker::PhoneNumber.cell_phone,
      vocal_range: voice
    )
  end
end

# Songs
song_titles = []
songs = []
while song_titles.length < 50
  title = Faker::Lorem.sentence.titleize
  next if song_titles.include? title

  begin
    song_titles << title
    song = Song.create!(title: title)
    %w[SATB\ w/\ Piano Piano Soprano Alto Tenor Bass].each do |name|
      instrument = Instrument.create(name: name, song: song)
      if instrument.errors.any?
        puts "Failed to create #{name} for song #{song.title}: #{instrument.errors.full_messages}"
      end
    end

    songs << song
  rescue => e
    puts "Error creating song #{title}: #{e.message}"
  end
end

# Rehearsals
104.times do |index|
  Rehearsal.create!(
    date: index.weeks.ago.end_of_week(start_day = :sunday),
    venue: Faker::Address.street_address,
    host: Faker::Name.name,
    songs: songs.sample((1..3).to_a.sample),
    time: "Noon"
  )
end

# Performances
36.times do |index|
  Performance.create!(
    date: (index - 12).months.ago.beginning_of_month.next_occurring(:sunday).advance(weeks: 2),
    venue: Faker::Address.street_address,
    songs: [songs.sample]
  )
end
