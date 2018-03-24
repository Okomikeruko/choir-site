# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create(
#   email: "whittakerlee81@gmail.com",
#   password: "luvsux",
#   password_confirmation: "luvsux"
# )

bio = "Potenti nullam ac tortor vitae. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Aenean et tortor at risus viverra adipiscing at in tellus. Mauris a diam maecenas sed enim. Mattis rhoncus urna neque viverra justo nec. Mauris a diam maecenas sed enim ut sem. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ut aliquam purus sit amet luctus. Velit laoreet id donec ultrices.

Ut venenatis tellus in metus vulputate eu scelerisque. Ut tortor pretium viverra suspendisse. Urna cursus eget nunc scelerisque. Tristique et egestas quis ipsum suspendisse ultrices. Odio ut sem nulla pharetra. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Lobortis feugiat vivamus at augue."

Profile.create(
  name: "Sid Unrau",
  title: "Choir Director",
  bio: bio,
  position: 1
)

Profile.create(
  name: "Lee Whittaker",
  title: "Assistant Choir Director",
  bio: bio,
  position: 2
)

Profile.create(
  name: "Heather Taylor",
  title: "Accompanist",
  bio: bio,
  position: 3
)
