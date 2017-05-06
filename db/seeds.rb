Post.destroy_all
User.destroy_all

misty = User.create(email: "user@gmail.com", password: "123456", first_name: "Melissa", last_name: "Simmons")
fryguy = User.create(email: "fryguy@gmail.com", password: "098765", first_name: "Fry", last_name: "Hamson")

Post.create(dog_name: "Skip", image_url: "https://www.k9ofmine.com/wp-content/uploads/2014/09/ewok-dog-costume.jpg", description: "yub nub! yub nub!", user: fryguy)
Post.create(dog_name: "Champ", image_url: "http://stories.barkpost.com/wp-content/uploads/2014/04/dog-star-wars-costume-12.jpg", description: "You were my brother! I loved you!", user: fryguy)
Post.create(dog_name: "Molly", image_url: "http://stories.barkpost.com/wp-content/uploads/2014/05/star-wars-dog-costume-8.jpg", description: "Help me Obi-wan, I've grown a lot hair", user: misty)
Post.create(dog_name: "Sir Barksley", image_url: "https://img0.etsystatic.com/107/1/8256785/il_570xN.1054736492_okl7.jpg", description: "Rrrrrrr-ghghghghgh!", user: misty)
Post.create(dog_name: "Baxter", image_url: "http://www3.pictures.zimbio.com/mp/r_Mf-uluvPrx.jpg", description: "Give me treats, you will...", user: fryguy)
Post.create(dog_name: "King", image_url: "http://i1.mirror.co.uk/incoming/article6965338.ece/ALTERNATES/s615b/PAY-Storm-Trooper-Dog.jpg", description: "I even miss when I go pee-pees", user: misty)
