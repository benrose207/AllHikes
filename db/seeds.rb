# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
demo_user = User.create(first_name: "demo", last_name: "user", email: "demo@allhikes.com", password: "123qwe")
u1 = User.create(first_name: "John", last_name: "Muir", email: "john@muirwoods.com", password: "yosemite")
u2 = User.create(first_name: "Edward", last_name: "Abbey", email: "ed@abbey.com", password: "pqkwohfj")
u3 = User.create(first_name: "John James", last_name: "Audubon", email: "jj@audubonsociety.org", password: "birdsbirds")
u4 = User.create(first_name: "Rachel", last_name: "Carson", email: "rachel@carson.com", password: "safhu78h2rh")

uf1 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/John_Muir.jpg")
u1.profilePicture.attach(io: uf1, filename: "John_Muir.jpg")
uf2 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/edward_abbey.jpg")
u2.profilePicture.attach(io: uf2, filename: "edward_abbey.jpg")
uf3 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/Audubon.jpg")
u3.profilePicture.attach(io: uf3, filename: "Audubon.jpg")
uf4 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/Rachel+Carson.jpg")
u4.profilePicture.attach(io: uf4, filename: "Rachel+Carson.jpg")

Park.destroy_all
park1 = Park.create(name: "Yosemite National Park", acreage: 759620, contact: "209-372-0200", description: "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.", summary: "Looking for a great trail in Yosemite National Park, California? AllHikes has lots of great hiking trails, trail running trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Start checking them out and you'll be out on the trail in no time!", park_type: "National", lat: 37.748850, lng: -119.587162)

Location.destroy_all
l1 = Location.create(city: "Yosemite Valley", state: "California", country: "United States", locationable_id: park1.id, locationable_type: "Park")

Hike.destroy_all
h1 = Hike.create(name: "Mount Hoffman Trail", description: "Centrally located at an elevation of 10,850' Yosemite's Mount Hoffman provides one of the best overall views of the park. The short hiking distance make this a popular hike. The trail to May Lake is a short and pleasant climb. From May Lake the official trail disappears and becomes somewhat steeper and there are several use trails to the summit.", contact: "Yosemite Wilderness Center (209) 372-0740", lng: -119.49091, lat: 37.83276, difficulty: "difficult", usage: "heavy", distance: 5.6, elevation_gain: 1912, route_type: "Out & Back", waypoints: "[[-119.49091, 37.83276], [-119.51010, 37.84692], [-119.49091, 37.83276]]", park_id: park1.id)

hf1 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/mt_hoffmann2.JPG")
h1.coverPhoto.attach(io: hf1, filename: "mt_hoffmann2.JPG")

h2 = Hike.create(name: "Porcupine Creek Trail to Indian Ridge Natural Arch to North Dome", description: "Trail starts downhill from the Porcupine Creek Trailhead for the first 1.5 miles then forks to the left and climbs Indian Ridge.  At the top of the ridge is the 0.3 mile side trail to Indian Rock.  After the Indian Rock junction the trail follows Indian Ridge down to the summit of North Dome.", contact: "California Travel and Tourism Commision, P.O. Box 1499 , Sacramento, CA, 95812-1499, Phone: 800-862-2543", lng: -119.54612, lat: 37.80669, difficulty: "moderate", usage: "heavy", distance: 10.4, elevation_gain: 2089, route_type: "Out & Back", waypoints: "[[-119.54612, 37.80669], [-119.548856, 37.7999381], [-119.5503044, 37.7945928], [-119.5604753, 37.7823156], [-119.5575142, 37.7626066], [-119.5577288, 37.7559567], [-119.54612, 37.80669]]", park_id: park1.id)

hf2 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/north_dome1.JPG")
h2.coverPhoto.attach(io: hf2, filename: "north_dome1.JPG")

h3 = Hike.create(name: "Gaylor Lakes Trail", description: "Gaylor Lakes hike offers some of the most spectacular high-country views off of Tioga Road. Climb steadily to a ridge with views of the high Sierra including Mt. Dana and Dana Meadows with its scattered ponds. At the ridge crest, the trail drops 200 feet to Middle Gaylor Lake.", contact: "California Travel and Tourism Commision, P.O. Box 1499 , Sacramento, CA, 95812-1499, Phone: 800-862-2543", lng: -119.25818, lat: 37.91008, difficulty: "difficult", usage: "moderate", distance: 3.5, elevation_gain: 1210, route_type: "Out & Back", waypoints: "[[-119.25827, 37.9102], [-119.2647511, 37.911836], [-119.26929, 37.91532], [-119.26764, 37.92387], [-119.26846, 37.92812], [-119.25827, 37.9102]]", park_id: park1.id)

hf3 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/gaylor_lakes1.JPG")
h3.coverPhoto.attach(io: hf3, filename: "gaylor_lakes1.JPG")

h4 = Hike.create(name: "Sentinel Dome and Taft Point", description: "Yosemite National Park is open to those with reservations begining on Thursday, June 11. See the park website for more info: https://www.nps.gov/yose/planyourvisit/covid19.htm Please note, there are temporary road closures in this area over winter time. Please consult the park's website before visiting.", lng: -119.58638, lat: 37.71247, difficulty: "moderate", usage: "heavy", distance: 5.1, elevation_gain: 1122, route_type: "Loop", waypoints: "[[-119.58632, 37.71241], [-119.58336, 37.72036], [-119.58429, 37.72315], [-119.58890, 37.72364], [-119.60455, 37.71306], [-119.58632, 37.71241]]", park_id: park1.id)

hf4 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/sentinel_dome1.JPG")
h4.coverPhoto.attach(io: hf4, filename: "sentinel_dome1.JPG")

h5 = Hike.create(name: "Mono Pass Trail", description: "This is an amazing intermediate trek to Mono pass. Upper Sardine Lake is a pleasant camping spot. Very beautiful views of Mono lake and a wonderful sunrise.", lng: -119.26236, lat: 37.89061, difficulty: "moderate", usage: "moderate", distance: 10.8, elevation_gain: 1653, route_type: "Out & Back", waypoints: "[[-119.26236, 37.89061], [-119.24449, 37.87746], [-119.22923, 37.86122], [-119.21520, 37.85580], [-119.20683, 37.85920], [-119.26236, 37.89061]]", park_id: park1.id)

hf5 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/mono_pass1.JPG")
h5.coverPhoto.attach(io: hf5, filename: "mono_pass1.JPG")

Tag.destroy_all
o1 = Tag.create(name: "blowdown", tag_type: "obstacle")
o2 = Tag.create(name: "bridge out", tag_type: "obstacle")
o3 = Tag.create(name: "bugs", tag_type: "obstacle")
o4 = Tag.create(name: "muddy", tag_type: "obstacle")
o5 = Tag.create(name: "over grown", tag_type: "obstacle")
o6 = Tag.create(name: "rocky", tag_type: "obstacle")
o7 = Tag.create(name: "scramble", tag_type: "obstacle")
o8 = Tag.create(name: "snow", tag_type: "obstacle")
o9 = Tag.create(name: "washed out", tag_type: "obstacle")
o10 = Tag.create(name: "closed", tag_type: "obstacle")
o11 = Tag.create(name: "off trail", tag_type: "obstacle")
o12 = Tag.create(name: "no shade", tag_type: "obstacle")
o13 = Tag.create(name: "private property", tag_type: "obstacle")
o14 = Tag.create(name: "fee", tag_type: "obstacle")

f1 = Tag.create(name: "beach", tag_type: "feature")
f2 = Tag.create(name: "cave", tag_type: "feature")
f3 = Tag.create(name: "forest", tag_type: "feature")
f4 = Tag.create(name: "lake", tag_type: "feature")
f5 = Tag.create(name: "hot springs", tag_type: "feature")
f6 = Tag.create(name: "river", tag_type: "feature")
f7 = Tag.create(name: "views", tag_type: "feature")
f8 = Tag.create(name: "waterfall", tag_type: "feature")
f9 = Tag.create(name: "wild flowers", tag_type: "feature")
f10 = Tag.create(name: "wildlife", tag_type: "feature")
f11 = Tag.create(name: "rails trails", tag_type: "feature")
f12 = Tag.create(name: "city walk", tag_type: "feature")
f13 = Tag.create(name: "historic site", tag_type: "feature")
f14 = Tag.create(name: "pub walk", tag_type: "feature")
f15 = Tag.create(name: "event", tag_type: "feature")

a1 = Tag.create(name: "backpacking", tag_type: "activity")
a2 = Tag.create(name: "bike touring", tag_type: "activity")
a3 = Tag.create(name: "bird watching", tag_type: "activity")
a4 = Tag.create(name: "camping", tag_type: "activity")
a5 = Tag.create(name: "cross country skiing", tag_type: "activity")
a6 = Tag.create(name: "fishing", tag_type: "activity")
a7 = Tag.create(name: "hiking", tag_type: "activity")
a8 = Tag.create(name: "horseback riding", tag_type: "activity")
a9 = Tag.create(name: "mountain biking", tag_type: "activity")
a10 = Tag.create(name: "nature trips", tag_type: "activity")
a11 = Tag.create(name: "ohv/off road driving", tag_type: "activity")
a12 = Tag.create(name: "paddle sports", tag_type: "activity")
a13 = Tag.create(name: "road biking", tag_type: "activity")
a14 = Tag.create(name: "rock climbing", tag_type: "activity")
a15 = Tag.create(name: "running", tag_type: "activity")
a16 = Tag.create(name: "scenic driving", tag_type: "activity")
a17 = Tag.create(name: "skiing", tag_type: "activity")
a18 = Tag.create(name: "snowshoeing", tag_type: "activity")
a19 = Tag.create(name: "via ferrata", tag_type: "activity")
a20 = Tag.create(name: "walking", tag_type: "activity")


Taggable.destroy_all
Taggable.create(tag_id: o6.id, taggable_id: h1.id, taggable_type: "Hike")
Taggable.create(tag_id: o7.id, taggable_id: h1.id, taggable_type: "Hike")
Taggable.create(tag_id: o8.id, taggable_id: h1.id, taggable_type: "Hike")
Taggable.create(tag_id: a3.id, taggable_id: h1.id, taggable_type: "Hike")
Taggable.create(tag_id: a7.id, taggable_id: h1.id, taggable_type: "Hike")
Taggable.create(tag_id: a10.id, taggable_id: h1.id, taggable_type: "Hike")
Taggable.create(tag_id: f3.id, taggable_id: h1.id, taggable_type: "Hike")
Taggable.create(tag_id: f4.id, taggable_id: h1.id, taggable_type: "Hike")
Taggable.create(tag_id: f7.id, taggable_id: h1.id, taggable_type: "Hike")
Taggable.create(tag_id: f9.id, taggable_id: h1.id, taggable_type: "Hike")

Taggable.create(tag_id: a1.id, taggable_id: h2.id, taggable_type: "Hike")
Taggable.create(tag_id: a4.id, taggable_id: h2.id, taggable_type: "Hike")
Taggable.create(tag_id: a7.id, taggable_id: h2.id, taggable_type: "Hike")
Taggable.create(tag_id: a15.id, taggable_id: h2.id, taggable_type: "Hike")
Taggable.create(tag_id: f3.id, taggable_id: h2.id, taggable_type: "Hike")
Taggable.create(tag_id: f7.id, taggable_id: h2.id, taggable_type: "Hike")
Taggable.create(tag_id: f9.id, taggable_id: h2.id, taggable_type: "Hike")
Taggable.create(tag_id: f10.id, taggable_id: h2.id, taggable_type: "Hike")
Taggable.create(tag_id: o6.id, taggable_id: h2.id, taggable_type: "Hike")

Taggable.create(tag_id: a7.id, taggable_id: h3.id, taggable_type: "Hike")
Taggable.create(tag_id: a10.id, taggable_id: h3.id, taggable_type: "Hike")
Taggable.create(tag_id: a3.id, taggable_id: h3.id, taggable_type: "Hike")
Taggable.create(tag_id: a15.id, taggable_id: h3.id, taggable_type: "Hike")
Taggable.create(tag_id: f3.id, taggable_id: h3.id, taggable_type: "Hike")
Taggable.create(tag_id: f4.id, taggable_id: h3.id, taggable_type: "Hike")
Taggable.create(tag_id: f7.id, taggable_id: h3.id, taggable_type: "Hike")
Taggable.create(tag_id: f9.id, taggable_id: h3.id, taggable_type: "Hike")
Taggable.create(tag_id: f10.id, taggable_id: h3.id, taggable_type: "Hike")
Taggable.create(tag_id: o8.id, taggable_id: h3.id, taggable_type: "Hike")
Taggable.create(tag_id: f13.id, taggable_id: h3.id, taggable_type: "Hike")

Taggable.create(tag_id: a3.id, taggable_id: h4.id, taggable_type: "Hike")
Taggable.create(tag_id: a7.id, taggable_id: h4.id, taggable_type: "Hike")
Taggable.create(tag_id: a10.id, taggable_id: h4.id, taggable_type: "Hike")
Taggable.create(tag_id: a20.id, taggable_id: h4.id, taggable_type: "Hike")
Taggable.create(tag_id: f3.id, taggable_id: h4.id, taggable_type: "Hike")
Taggable.create(tag_id: f7.id, taggable_id: h4.id, taggable_type: "Hike")
Taggable.create(tag_id: f10.id, taggable_id: h4.id, taggable_type: "Hike")

Taggable.create(tag_id: a1.id, taggable_id: h5.id, taggable_type: "Hike")
Taggable.create(tag_id: a7.id, taggable_id: h5.id, taggable_type: "Hike")
Taggable.create(tag_id: a10.id, taggable_id: h5.id, taggable_type: "Hike")
Taggable.create(tag_id: a20.id, taggable_id: h5.id, taggable_type: "Hike")
Taggable.create(tag_id: a3.id, taggable_id: h5.id, taggable_type: "Hike")
Taggable.create(tag_id: f3.id, taggable_id: h5.id, taggable_type: "Hike")
Taggable.create(tag_id: f4.id, taggable_id: h5.id, taggable_type: "Hike")
Taggable.create(tag_id: f6.id, taggable_id: h5.id, taggable_type: "Hike")
Taggable.create(tag_id: f7.id, taggable_id: h5.id, taggable_type: "Hike")
Taggable.create(tag_id: f9.id, taggable_id: h5.id, taggable_type: "Hike")
Taggable.create(tag_id: f10.id, taggable_id: h5.id, taggable_type: "Hike")

Review.destroy_all

r1 = Review.create(rating: 4, review_text: "This was a really nice hike, good mix of different terrains/scenery.  It was a bit damp when we went - was hoping for wildflowers but I think we were too early in the season.  I detracted one star because it took a lot longer than expected, and it was almost dark by the time we got back to our car.", activity_date: "2020-02-25", tag_ids: [a7.id, o4.id], user_id: u4.id, hike_id: h2.id)
r2 = Review.create(rating: 5, review_text: "AMAZING HIKE!  I was looking for a romantic hike to take with my new girlfriend, and this totally fit the bill.  We packed our lunches and had a little picnic on the ridge.  She loves nature, and we saw a hawk and THREE RABBITS!  She said it was the most fun she’s ever had on a date :)", activity_date: "2018-06-29", tag_ids: [a7.id], user_id: u3.id, hike_id: h4.id)
r3 = Review.create(rating: 1, review_text: "Was looking to take a nice meditative solo hike...this was not it.  Trail was really crowded and the family ahead of me kept whining about how hot it was.  I guess it might have been nice in a different season, but I would not recommend it in August.  I was so tired when I got to the top, and then realized I had forgotten my sandwich in the car.  Just my luck.  I somehow trudged all the way back, starving, and when I got back I had locked my keys in my car.  Luckily the annoying family was able to help me out.  But there are so many signs posted about not leaving food in your car (because of bears), I don’t get why there are no signs telling you not to leave your keys in the car.", activity_date: "2019-08-17", tag_ids: [a7.id, o12.id], user_id: u2.id, hike_id: h5.id)
r4 = Review.create(rating: 3, review_text: "I wanted to love this hike, but I was underwhelmed.  I’d read that this was supposed to have a really nice view at the top, but the day I went it was really misty and there wasn’t much to see.  I’d like to try it again on another day.  I’d never seen the river so full before though, so I guess that was cool.  I was really hoping to see some rabbits, which I’d read about in other reviews, but none came out.", activity_date: "2019-03-18", tag_ids: [a7.id, o9.id, o11.id], user_id: u4.id, hike_id: h4.id)
r5 = Review.create(rating: 5, review_text: "This is one of my all-time favorite hikes.  Part of me wanted to not write this review, so I could keep it to myself.  The blue sky, crystal clear water, and grazing herds of deer are pretty much the epitome of natural beauty.  The first section is a little challenging and rocky, but then you’re rewarded with an absolutely pristine meadow clearing.  Then the scenery changes again and becomes more forested as you approach the summit.  The way back goes surprisingly quickly - actually too quickly, since it’s over before you know it.  Spring is definitely the best season for this one, but I’ve also done it in the fall.", activity_date: "2017-04-12", tag_ids: [a7.id, o6.id, o7.id], user_id: u1.id, hike_id: h1.id)
r6 = Review.create(rating: 5, review_text: "Ah, nature.  What did we do to deserve your sweet dewdrops and bonny flowers?  We humans have enraged the gods of karma, and are paying the price.  Yet you continue to change, day after day, season after season, to remind us that this planet has never been about us, and never will be.  We may try, scratching meager trails into your skin and erecting parking lots on your sides, but you shall prevail, always and forever.", activity_date: "2020-05-29", tag_ids: [a7.id], user_id: u3.id, hike_id: h3.id)
r7 = Review.create(rating: 4, review_text: "Solid hike for families or beginners.  Part of the trail is paved, and the rest is pretty flat.  I went on Memorial Day and it was pretty crowded.  I also saw several dogs on the trail, even though I’m pretty sure they’re not allowed.  It offers a good bang for your buck, with minimal effort and maximum payoff.  Speaking of bucks, I saw one on this hike!  Haha.  Would hike again.", activity_date: "2018-05-28", tag_ids: [a7.id], user_id: h1.id, hike_id: u3.id)
r8 = Review.create(rating: 5, review_text: "This. Hike. Has. Everything.  Water, wildlife, flowers, trees, views, and even some cool blazes.  I wanted to add my own blaze by carving my initials in a tree but my dad told me not to - lame.  Still, it was awesome to feel like a wilderness explorer with my pack and poles.", activity_date: "2019-06-18", tag_ids: [a7.id, o8.id, o7.id], user_id: u3.id, hike_id: h5.id)
r9 = Review.create(rating: 1, review_text: "Ok first of all let me start by saying that I am not a nature gal.  I don’t like getting dirty, or sweating, or bugs.  Actually I don’t really like being outdoors.  So when my new boyfriend told me to pack sneakers for a surprise date, I was concerned to say the least.  Things didn’t improve when this huge brown bird with claws almost landed on my head.  My boo seemed excited about it though - and then he really freaked out when we saw some bunny rabbits which are basically rats without tails, ew.  I still don’t get hiking.  The best part of the day was the looooooong shower I took afterwards.", activity_date: "2018-06-29", tag_ids: [a7.id, o3.id, o4.id, o9.id], user_id: u2.id, hike_id: h4.id)
r10 = Review.create(rating: 5, review_text: "This was just lovely.  The crisp October air and golden autumn light were truly magical.  Apart from several songbirds, I had the trail to myself.  I pondered, I strolled, I meditated on my life, I ambled along, and broke into a run when I reached the end.  I could hear rustling leaves in my head for days afterwards, and the peace this hike provided will not be easily forgotten.", activity_date: "2019-10-10", tag_ids: [a7.id], user_id: u4.id, hike_id: h1.id)


Photo.destroy_all

p1 = Photo.new(hike_id: h1.id, user_id: u1.id, caption: "View of Half Dome from above")
pp1 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0703.JPG")
p1.photo.attach(io: pp1, filename: "DSC_0703.JPG")
p1.save

p2 = Photo.new(hike_id: h1.id, user_id: u1.id)
pp2 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0692.JPG")
p2.photo.attach(io: pp2, filename: "DSC_0692.JPG")
p2.save

p3 = Photo.new(hike_id: h1.id, user_id: u1.id, caption: "Mt Hoffmann")
pp3 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0700.JPG")
p3.photo.attach(io: pp3, filename: "DSC_0700.JPG")
p3.save

p4 = Photo.new(hike_id: h1.id, user_id: u1.id, caption: "Still plenty of snow to be found")
pp4 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0682.JPG")
p4.photo.attach(io: pp4, filename: "DSC_0682.JPG")
p4.save

p5 = Photo.new(hike_id: h1.id, user_id: u4.id, caption: "Gorgeous view, and no one in sight")
pp5 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0696.JPG")
p5.photo.attach(io: pp5, filename: "DSC_0696.JPG")
p5.save

p6 = Photo.new(hike_id: h1.id, user_id: u4.id)
pp6 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0694.JPG")
p6.photo.attach(io: pp6, filename: "DSC_0694.JPG")
p6.save

p7 = Photo.new(hike_id: h3.id, user_id: u3.id)
pp7 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0292.JPG")
p7.photo.attach(io: pp7, filename: "DSC_0292.JPG")
p7.save

p8 = Photo.new(hike_id: h3.id, user_id: u3.id, caption: "View from the old mine at the top")
pp8 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0282.JPG")
p8.photo.attach(io: pp8, filename: "DSC_0282.JPG")
p8.save

p9 = Photo.new(hike_id: h3.id, user_id: u3.id)
pp9 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0277.JPG")
p9.photo.attach(io: pp9, filename: "DSC_0277.JPG")
p9.save

p10 = Photo.new(hike_id: h5.id, user_id: u2.id, caption: "Quite the intimidating name")
pp10 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0174.JPG")
p10.photo.attach(io: pp10, filename: "DSC_0174.JPG")
p10.save

p11 = Photo.new(hike_id: h5.id, user_id: u2.id)
pp11 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0146.JPG")
p11.photo.attach(io: pp11, filename: "DSC_0146.JPG")
p11.save

p12 = Photo.new(hike_id: h2.id, user_id: u4.id)
pp12 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0255.JPG")
p12.photo.attach(io: pp12, filename: "DSC_0255.JPG")
p12.save

p13 = Photo.new(hike_id: h2.id, user_id: u4.id, caption: "Spectacular view of Half Dome")
pp13 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0228.JPG")
p13.photo.attach(io: pp13, filename: "DSC_0228.JPG")
p13.save

p14 = Photo.new(hike_id: h2.id, user_id: u4.id)
pp14 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0249.JPG")
p14.photo.attach(io: pp14, filename: "DSC_0249.JPG")
p14.save

p15 = Photo.new(hike_id: h2.id, user_id: u4.id, caption: "Thought I was at the top... not quite")
pp15 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0244.JPG")
p15.photo.attach(io: pp15, filename: "DSC_0244.JPG")
p15.save

p16 = Photo.new(hike_id: h4.id, user_id: u1.id, caption: "A smokey day in the valley")
pp16 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0204.JPG")
p16.photo.attach(io: pp16, filename: "DSC_0204.JPG")
p16.save

p17 = Photo.new(hike_id: h4.id, user_id: u1.id)
pp17 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0200.JPG")
p17.photo.attach(io: pp17, filename: "DSC_0200.JPG")
p17.save

p18 = Photo.new(hike_id: h4.id, user_id: u1.id)
pp18 = open("https://all-hikes-seeds.s3-us-west-1.amazonaws.com/DSC_0199.JPG")
p18.photo.attach(io: pp18, filename: "DSC_0199.JPG")
p18.save