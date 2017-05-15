Post.destroy_all
User.destroy_all
Theme.destroy_all

misty = User.create(email: "user@gmail.com", password: "123456", first_name: "Melissa", last_name: "Simmons")
fryguy = User.create(email: "fryguy@gmail.com", password: "098765", first_name: "Guy", last_name: "Hamson")
mister = User.create(email: "aahah@gmail.com", password: "qwerty", first_name: "Tom", last_name: "Gustin")
thor = User.create(email: "odison@gmail.com", password: "asdfgh", first_name: "Kyla", last_name: "Pierce")

starwars = Theme.create(theme: "Star-Wars")
superhero = Theme.create(theme: "Superhero")

Post.create(dog_name: "Skip", image_url: "https://www.k9ofmine.com/wp-content/uploads/2014/09/ewok-dog-costume.jpg", description: "yub nub! yub nub!", vote_count: 14, user: fryguy, theme: starwars)
Post.create(dog_name: "Champ", vote_count: 31, image_url: "http://stories.barkpost.com/wp-content/uploads/2014/04/dog-star-wars-costume-12.jpg", description: "You were my brother! I loved you!", user: thor, theme: starwars)
Post.create(dog_name: "Molly", vote_count: 9, image_url: "http://stories.barkpost.com/wp-content/uploads/2014/05/star-wars-dog-costume-8.jpg", description: "Help me Obi-wan, I've grown a lot hair", user: misty, theme: starwars)
Post.create(dog_name: "Sir Barksley", vote_count: 2, image_url: "https://img0.etsystatic.com/107/1/8256785/il_570xN.1054736492_okl7.jpg", description: "Rrrrrrr-ghghghghgh!", user: misty, theme: starwars)
Post.create(dog_name: "Baxter", image_url: "http://www3.pictures.zimbio.com/mp/r_Mf-uluvPrx.jpg", description: "Give me treats, you will...", user: fryguy, theme: starwars)
Post.create(dog_name: "King", vote_count: 22, image_url: "http://i1.mirror.co.uk/incoming/article6965338.ece/ALTERNATES/s615b/PAY-Storm-Trooper-Dog.jpg", description: "I even miss when I go pee-pees", user: mister, theme: starwars)

Post.create(dog_name: "Rollo", vote_count: 19, image_url: "https://img0.etsystatic.com/125/0/10692466/il_340x270.981333968_ily8.jpg", description: "Captain Golden", user: thor, theme: superhero)
Post.create(dog_name: "Odin", vote_count: 39, image_url: "https://s-media-cache-ak0.pinimg.com/originals/06/84/4d/06844d7932c5b9abbf4c69ae7c972ccb.jpg", description: "I bring the lightning", user: thor, theme: superhero)
Post.create(dog_name: "Thunder", vote_count: 11, image_url: "http://media.danoah.com/wp-content/uploads/2015/08/05033040/3-buddha-bullodog-batman-dog-costume.jpg", description: "The watcher of the night", user: fryguy, theme: superhero)
Post.create(dog_name: "Misty", vote_count: 4, image_url: "https://img0.etsystatic.com/068/0/6048132/il_570xN.797235646_57wm.jpg", description: "The fastest dog alive", user: misty, theme: superhero)
Post.create(dog_name: "Sweetie", vote_count: 1, image_url: "https://images.incuboom.com/global/images/customerimages/large/wonder-woman-dog-halloween-costume-21525.jpg", description: "I don't think she likes it", user: mister, theme: superhero)
Post.create(dog_name: "Coolio", vote_count: 23, image_url: "https://s-media-cache-ak0.pinimg.com/originals/18/9e/e9/189ee93db924c3c8d76e244f633ca0b3.jpg", description: "Spider-dog, Spider-dog", user: fryguy, theme: superhero)
Post.create(dog_name: "Lazor", vote_count: 7, image_url: "https://www.rover.com/blog/wp-content/uploads/2014/09/batman-dog.jpg", description: "This is my city", user: misty, theme: superhero)
Post.create(dog_name: "Poppy", vote_count: 17, image_url: "http://lolbook.com/cache/PKPpaWQEsTST.jpg", description: "I'm with you till the end of the line", user: thor, theme: superhero)
Post.create(dog_name: "Milly, Max, & Mabel", vote_count: 0, image_url: "http://www.chihuahuaclothes.co/wp-content/uploads/2009/costumes-for-dogs-superhero-halloween-costumes.jpg", description: "The Trinity", user: fryguy, theme: superhero)


theme_arr = ["Pokemon", "Other-Animals", "Hats", "Sports", "Tacos", "Sunglasses", "Scarfs", "Harry-Potter", "Jackets", "Christmas", "Patriotic", "Pirate"]
themes = theme_arr.shuffle!
themes.each do |theme|
  Theme.create( theme: theme )
end
