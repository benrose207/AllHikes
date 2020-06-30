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


Hike.destroy_all
h1 = Hike.create(name: "Mount Hoffman Trail", description: "Centrally located at an elevation of 10,850' Yosemite's Mount Hoffman provides one of the best overall views of the park. The short hiking distance make this a popular hike. The trail to May Lake is a short and pleasant climb. From May Lake the official trail disappears and becomes somewhat steeper and there are several use trails to the summit.", contact: "Yosemite Wilderness Center (209) 372-0740", lng: -119.49091, lat: 37.83276, difficulty: "difficult", usage: "heavy", distance: 5.6, elevation_gain: 1912, route_type: "Out & Back", waypoints: "[[-119.49091, 37.83276], [-119.51010, 37.84692], [-119.49091, 37.83276]]")

h2 = Hike.create(name: "Porcupine Creek Trail to Indian Ridge Natural Arch to North Dome", description: "Trail starts downhill from the Porcupine Creek Trailhead for the first 1.5 miles then forks to the left and climbs Indian Ridge.  At the top of the ridge is the 0.3 mile side trail to Indian Rock.  After the Indian Rock junction the trail follows Indian Ridge down to the summit of North Dome.", contact: "California Travel and Tourism Commision, P.O. Box 1499 , Sacramento, CA, 95812-1499, Phone: 800-862-2543", lng: -119.54612, lat: 37.80669, difficulty: "moderate", usage: "heavy", distance: 10.4, elevation_gain: 2089, route_type: "Out & Back", waypoints: "[[-119.54612, 37.80669], [-119.548856, 37.7999381], [-119.5503044, 37.7945928], [-119.5604753, 37.7823156], [-119.5575142, 37.7626066], [-119.5577288, 37.7559567], [-119.54612, 37.80669]]")

h3 = Hike.create(name: "Gaylor Lakes Trail", description: "Gaylor Lakes hike offers some of the most spectacular high-country views off of Tioga Road. Climb steadily to a ridge with views of the high Sierra including Mt. Dana and Dana Meadows with its scattered ponds. At the ridge crest, the trail drops 200 feet to Middle Gaylor Lake.", contact: "California Travel and Tourism Commision, P.O. Box 1499 , Sacramento, CA, 95812-1499, Phone: 800-862-2543", lng: -119.25818, lat: 37.91008, difficulty: "difficult", usage: "moderate", distance: 3.5, elevation_gain: 1210, route_type: "Out & Back", waypoints: "[[-119.25827, 37.9102], [-119.2647511, 37.911836], [-119.26929, 37.91532], [-119.26764, 37.92387], [-119.26846, 37.92812], [-119.25827, 37.9102]]")

h4 = Hike.create(name: "Sentinel Dome and Taft Point", description: "Yosemite National Park is open to those with reservations begining on Thursday, June 11. See the park website for more info: https://www.nps.gov/yose/planyourvisit/covid19.htm Please note, there are temporary road closures in this area over winter time. Please consult the park's website before visiting.", lng: -119.58638, lat: 37.71247, difficulty: "moderate", usage: "heavy", distance: 5.1, elevation_gain: 1122, route_type: "Loop", waypoints: "[[-119.58632, 37.71241], [-119.58336, 37.72036], [-119.58429, 37.72315], [-119.58890, 37.72364], [-119.60455, 37.71306], [-119.58632, 37.71241]]")

h5 = Hike.create(name: "Mono Pass Trail", description: "This is an amazing intermediate trek to Mono pass. Upper Sardine Lake is a pleasant camping spot. Very beautiful views of Mono lake and a wonderful sunrise.", lng: -119.26236, lat: 37.89061, difficulty: "moderate", usage: "moderate", distance: 10.8, elevation_gain: 1653, route_type: "Out & Back", waypoints: "[[-119.26236, 37.89061], [-119.24449, 37.87746], [-119.22923, 37.86122], [-119.21520, 37.85580], [-119.20683, 37.85920], [-119.26236, 37.89061]]")

file1 = open('https://all-hikes-seeds.s3-us-west-1.amazonaws.com/cristina-anne-costello-70ngqW6E0oY-unsplash.jpg')
h1.photo.attach(io: file, filename: 'cristina-anne-costello-70ngqW6E0oY-unsplash.jpg')

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

