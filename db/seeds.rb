Post.destroy_all
User.destroy_all

misty = User.create(email: "user@gmail.com", password: "123456", first_name: "Melissa", last_name: "Simmons")
fryguy = User.create(email: "fryguy@gmail.com", password: "098765", first_name: "Fry", last_name: "Hamson")

Post.create(dog_name: "Skip", image_url: "https://img0.etsystatic.com/125/0/10692466/il_340x270.981333968_ily8.jpg", description: "Captain Golden", user: fryguy)
Post.create(dog_name: "Champ", image_url: "https://media.xogrp.com/images/83126cd9-afdb-40ec-9b2f-7f304996914c~rt_auto", description: "Champ looking royal!", user: fryguy)
Post.create(dog_name: "Wrinkles", image_url: "http://media.spokesman.com/photos/2016/09/30/mart_Halloween_Media_Preview.JPG.jpg", description: "You're under aruffest", user: misty)
Post.create(dog_name: "Sir Barksley", image_url: "https://s-media-cache-ak0.pinimg.com/originals/1f/0a/04/1f0a04d79e63f0d54a036657bb1a054b.jpg", description: "King of Pride Rock", user: misty)
Post.create(dog_name: "Baxter", image_url: "http://humor.gunaxin.com/wp-content/uploads/gallery/pet-costumes/d60420a5682767f7a47df90c9782e98f.jpg", description: "Extra bacon please", user: fryguy)
Post.create(dog_name: "King", image_url: "https://s-media-cache-ak0.pinimg.com/736x/49/f6/2e/49f62e55b3725d413f3cc1c4e2730b63.jpg", description: "There's a new hero in town", user: misty)
