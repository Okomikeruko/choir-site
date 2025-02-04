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

tags = []

5.times do
  name = Faker::Music.instrument
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
    tag_ids: tags.sample(Random.rand(tags.count + 1)).map(&:id)
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
