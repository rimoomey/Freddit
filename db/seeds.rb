Post.destroy_all
Comment.destroy_all
User.destroy_all
Like.destroy_all
Topic.destroy_all

post1 = Post.create(title: "first post", content: "this is my first post!", num_likes: 1)
post2 = Post.create(title: "second post", content: "This is my second post!", num_likes: 1)
post3 = Post.create(title: "third post", content: "This is my third post!", num_likes: 1)
topics = Topic.create([{name: "Dog Fun"}, {name: "Sports Ball"}])
user1 = User.create(username: "rimoomey", email: "rimon@realsite.com", password: "blEddBloop")
post1.user = user1
post1.topic = topics[0]
post1.save
post2.user = user1
post2.topic = topics[1]
post2.save
post3.user = user1
post3.topic = topics[0]
post3.save

like = Like.new
like.likeable = post1
like.user = user1
like.save
