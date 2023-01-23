# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
posts = Post.create([{ title: 'first post', content: 'this is my first post!'}, { title: 'second post', content: 'This is my second post!' }])
user1 = User.create({ username: 'rimoomey', email: 'rimon@realsite.com', password: 'blEddBloop'})
posts[0].user = user1
posts[0].save
posts[1].user = user1
posts[1].save