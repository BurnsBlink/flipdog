# README

![Build Status](https://codeship.com/projects/67caff00-0b79-0135-0e9c-66e92f8b08cc/status?branch=master)
![Code Climate](https://codeclimate.com/github/BurnsBlink/flipdog.png)
![Coverage Status](https://coveralls.io/repos/BurnsBlink/flipdog/badge.png)

Run on Console:
rails s + npm start

Flipdog is a site with a fun theme that changes every 3 days. A user will share a photo of their dog dressed up in the current theme.

Features:

* Complete React frontend.
* Authenticated Users have access to a profile page to keep track of their first and last photo submissions.
* A dynamic home page, users can flip through other users photos, and up vote if they wish to.
* Easy to use photo upload form, that'll be posted immediately to the home section and profile page.
* 'Past winners' page will feature the photos from the previous theme that placed 1st, 2nd, & 3rd, sorted by the total amount of votes received.
* On the home page, a user can see the next upcoming theme, and at what time the switch will happen.
* Can create a brand new account with Devise, or sign in with Facebook account.
* Back end management handled through Ruby on Rails and PostgresSQL.
