# BROOKSIDE — PROJECT CONTEXT & DEVELOPMENT GUIDE

## Purpose of This File

This document is the persistent context for AI-assisted development of the Brookside app.

Read this document before making significant changes to the app.

Brookside worldbuilding may happen outside this repository. This document does not need to contain every piece of Brookside lore. It contains the information necessary to understand what the app is, how it should feel, how gameplay works, and how new features should be implemented without accidentally changing the nature of the project.

When the existing code and this document conflict about how something is currently implemented, inspect the existing code before changing anything.

Do not rebuild working systems simply because another architecture might be cleaner.

⸻

## 1. WHAT IS BROOKSIDE?

Brookside is a cozy life-simulation world built around a collection of 18-inch dolls.

The physical dolls, handmade notebooks, printable ephemera, physical sets, photographs, stickers, and digital Brookside app are all parts of the same play system.

The app is NOT intended to replace physical doll play.

Its primary job is to create prompts, randomness, little events, decisions, and artifacts that inspire physical play and journaling.

The desired feeling is:

> "I wonder what's happening in Brookside today."

rather than:

> "I need to complete today's Brookside tasks."

Brookside is intentionally mundane.

Interesting events include things like:

* getting coffee
* browsing a thrift store
* finding something strange
* seeing a handwritten sign
* checking the community bulletin board
* finding a book
* spotting a cat
* making a craft
* walking a trail
* seeing the first fall leaf
* getting a phone call
* receiving a silly group chat message
* buying something from a vending machine
* taking an unnecessary picture of something funny

Ordinary life IS the gameplay.

⸻

## 2. THE PHYSICAL + DIGITAL PLAY LOOP

Brookside is a hybrid physical/digital life-sim.

A typical session might work like this:

1. Choose or randomly generate a doll.
2. Choose or randomly generate a location.
3. Open that location in the Brookside app or physical notebook.
4. Generate activities/events.
5. Physically play the scene if desired.
6. Record something in the location notebook.
7. Possibly collect an artifact, sticker, receipt, photo, etc.
8. Roll/generate what happens next.
9. Possibly travel to another Brookside location.
10. Record noteworthy events in the doll's small personal journal.

Not every play session needs to use every part of this loop.

The app should facilitate play, not create administrative work.

⸻

## 3. CORE DESIGN PHILOSOPHY

Brookside should be:

* cozy
* playful
* low pressure
* surprising
* tactile
* scrapbook-friendly
* nostalgic
* slightly silly
* mundane in an interesting way
* easy to pick up
* easy to stop playing

Brookside should NOT become:

* a productivity app
* a traditional RPG
* a management simulator
* a resource optimization game
* an idle game
* a streak-based game
* a task tracker
* a complicated inventory simulator

Avoid adding:

* XP
* levels
* skill trees
* currencies unless narratively useful
* daily streaks
* mandatory check-ins
* complicated statistics
* health/energy meters
* game-over states
* punishment for not playing
* systems requiring frequent maintenance

A useful development test is:

> "Does this create another little thing that can happen in Brookside?"

That is usually better than:

> "Does this create another system the player has to manage?"

⸻

## 4. "JUST ENOUGH" DESIGN PRINCIPLE

A major Brookside design principle is JUST ENOUGH.

Features should contain enough structure to create inspiration without requiring exhaustive simulation.

For example:

GOOD:
The thrift store generates three finds and the player chooses one.

TOO MUCH:
The thrift store tracks money, shelf inventory, store restocking, item rarity, resale value, employee schedules, and customer satisfaction.

GOOD:
Paws Coffee generates an order.

TOO MUCH:
The app simulates ingredients, stock levels, drink preparation, money, tips, and employee performance.

Random generation is often preferable to simulation.

⸻

## 5. CURRENT APP

Brookside is a mobile-friendly web app.

It is intended to work well from a phone and be hosted through GitHub Pages.

The current app contains or has contained features including:

* Surprise Me
* Today in Brookside
* Thrift Store Run
* Paws Coffee
* Brookside Library
* Rabbit & Ink
* Group Chat
* Brookside AIM
* Someone is Calling
* Vending Machine
* Photo Dump
* My Stuff

Before changing these systems, inspect the current implementation.

Do not assume this document describes their exact current code structure.

⸻

## 6. HOME SCREEN

The app should feel like entering Brookside rather than opening a software dashboard.

Established home-screen feature ordering has included:

1. Surprise Me
2. Today in Brookside
3. Thrift Store Run
4. Paws Coffee
5. Brookside Library
6. Rabbit & Ink
7. Group Chat
8. Brookside AIM
9. Someone is Calling
10. Vending Machine
11. Photo Dump
12. My Stuff

Preserve current ordering unless specifically asked to change it.

The app may expand as additional Brookside locations become playable.

⸻

## 7. DOLLS

Brookside characters are based on physical 18-inch dolls.

They should not be treated as children simply because they are dolls.

They function as ageless/adult characters within Brookside.

Known recurring characters include:

* Lucy Bennet
* Clara June Bennet
* Lea Grace
* Delilah "Deli"
* Winnifred "Winnie" Brooks
* Bonnie Bea
* Clarissa
* Hart Chapman
* Brittney Paige
* Piper McKay
* Nevaeh
* Talia
* Maisie O'Connor
* Kennley Ann
* Briar Jensen
* Peyton Rae
* Courtney Rae
* Hallie Jo

Other dolls may be added.

Do not invent surnames, relationships, jobs, or major personality information when the app does not need them.

Do not rename established dolls.

⸻

## 8. IMPORTANT CHARACTER / LOCATION ASSOCIATIONS

These associations are established Brookside canon.

### Lucy Bennet

Works at Rabbit & Ink Bookshop.

General vibe:
earthy, analog, 1990s comfort.

Lucy and Clara June are cousins.

Lucy and Delilah are college friends.

⸻

### Clara June Bennet

Cousin of Lucy Bennet.

General vibe:
pink lemonade afternoon.

⸻

### Lea Grace

Works at Brookside Library as Program Coordinator / Maker Space staff.

Sister of Delilah.

General vibe:
soft pastel goth / kawaii.

⸻

### Delilah "Deli"

Runs an art gallery/community art space.

Sister of Lea Grace.

Friend of Lucy from college.

⸻

### Winnifred "Winnie" Brooks

Children's Librarian at Brookside Library.

⸻

### Bonnie Bea

Associated with the Children's Museum.

⸻

### Clarissa

Vet tech / animal rescue worker.

Primarily associated with the rescue side of Paws Coffee & Animal Rescue.

⸻

### Hart Chapman

Co-runs the Community Arts & Recreation Center with Brittney Paige.

Cousin of Nevaeh.

⸻

### Brittney Paige

Co-runs the Community Arts & Recreation Center with Hart Chapman.

⸻

### Piper McKay

Environmental educator at the nature center.

⸻

### Nevaeh

General vibe:
1970s flower child.

Associated with antiques/thrifting.

Recognizable accessory:
avocado-green heart sunglasses.

⸻

### Talia

Barista at Paws Coffee.

General vibe:
alt/indie.

⸻

### Maisie O'Connor

Works at Brookside Thrift.

General vibe:
1990s sitcom summer.

⸻

### Kennley Ann

Works at Brookside Thrift.

General vibe:
autumn farmers market.

⸻

## 9. LOCATIONS

Brookside is a small-town/community world.

Established or planned locations include:

* Brookside Library
* Paws Coffee & Animal Rescue
* Brookside Thrift
* Rabbit & Ink Bookshop
* Community Arts & Recreation Center
* Deli's Art Gallery / community art space
* Piper's Nature Center
* Children's Museum
* Natural History Museum
* campground
* antique-related shopping
* a "woo woo" style shop

Not every location needs to be implemented in the app immediately.

Do not create complete new location systems unless requested.

⸻

## 10. BROOKSIDE LIBRARY

Important staff:

* Winnie Brooks — Children's Librarian
* Lea Grace — Program Coordinator / Maker Space

Established features may include:

* summer reading
* craft nights
* community bulletin board
* used book sale shelf
* seed library
* local history corner
* Maker Space
* scavenger hunts
* book browsing
* recommendations
* seasonal programming

A library visit should feel like visiting a community library, not managing one.

⸻

## 11. PAWS COFFEE & ANIMAL RESCUE

Important staff:

* Talia — coffee shop/barista
* Clarissa — rescue/vet-tech side

Paws combines a neighborhood coffee shop with animal rescue activity.

Possible play elements include:

* generate a drink
* time of day
* weather
* stay or to-go
* cafe activities
* seasonal menu
* rescue board
* adoption-related notices
* punch cards
* receipts
* fundraiser material
* small observations/events

The coffee shop should remain usable year-round.

Seasonal menus supplement the normal menu.

⸻

## 12. BROOKSIDE THRIFT

Important staff:

* Maisie O'Connor
* Kennley Ann

Core gameplay concept:

ROLL / GENERATE 3 FINDS.
BUY / KEEP 1.

The fun comes from deciding which strange or interesting object the visiting doll takes home.

The thrift store has many departments and item pools.

Possible artifacts include:

* receipts
* price stickers
* free-with-purchase items
* found ephemera

Do not turn the thrift store into a financial simulation.

⸻

## 13. CODE ORANGE

"Code Orange" is an established Brookside term.

It means:

HALLOWEEN MERCHANDISE HAS BEEN SPOTTED.

It often happens at Brookside Thrift.

Examples:

* ceramic pumpkin mug
* plastic ghost
* vintage Halloween decoration
* orange-and-black housewares
* Halloween sweater
* pumpkin-shaped dish
* strange seasonal decoration

Code Orange is playful.

It does NOT indicate:

* an emergency
* danger
* weather
* a security alert

Code Orange should be more common during the fall seasonal layer but may occasionally appear early.

⸻

## 14. RABBIT & INK BOOKSHOP

Important staff:

* Lucy Bennet

Possible gameplay:

* browsing
* book recommendations
* displays
* staff picks
* purchases
* interesting books
* small events
* community flyers
* seasonal displays

It should feel like a cozy independent bookstore.

⸻

## 15. PIPER'S NATURE CENTER

Important staff:

* Piper McKay

The nature center is particularly useful for seasonal gameplay.

Potential structure includes:

* Who's Working?
* Reason for Visit
* Activity Menu

Nature-based activities may include:

* trail walks
* observations
* leaves
* mushrooms
* specimens
* seasonal changes
* educational activities

Physical stickers may represent collected objects.

Example:

A fall leaf sticker can be placed onto a specimen journal card containing:

* trail
* where it was found
* what made the doll notice it
* tree type

The app should generate reasons to use physical stickers rather than replacing the physical sticker collection.

⸻

## 16. LOCATION NOTEBOOKS

Major Brookside locations may have physical notebooks.

These notebooks can contain:

* rules
* generators
* logs
* pockets
* receipts
* stickers
* menus
* flyers
* collected ephemera
* photos
* activity pages

The app and notebook should complement each other.

If a digital feature would be more delightful as a physical artifact, consider generating a prompt/result that tells the player to use the physical artifact instead of recreating everything digitally.

⸻

## 17. DOLL JOURNALS

Individual dolls may have small approximately 4x6 journals.

These record selected moments from their lives.

Not every generated event needs to be logged.

Logging should feel optional and scrapbook-like.

The app should never make journaling feel like required bookkeeping.

⸻

## 18. EPHEMERA

Ephemera is an important part of Brookside.

Examples:

* coffee receipts
* thrift receipts
* library slips
* flyers
* menus
* punch cards
* stickers
* specimen cards
* event tickets
* photo strips
* handwritten notes
* packaging
* tiny signs
* community notices
* found paper objects

Digital gameplay can create reasons for physical ephemera to exist.

The goal is not necessarily to digitally store every artifact.

⸻

## 19. MY STUFF

The app has a "My Stuff" concept using local storage.

This can preserve selected finds/results.

Keep inventory intentionally lightweight.

It should feel like:

> "Look at the little things I've collected."

Not:

> "Manage 487 inventory objects."

Use localStorage where appropriate.

Avoid requiring accounts, databases, or cloud infrastructure unless explicitly requested later.

⸻

## 20. RANDOMNESS

Random generation is central to Brookside.

Dice-inspired structures such as d6, d8, d12, and d20 tables are common in the physical notebooks.

The digital app can replicate these random tables.

Random results should provide enough specificity to inspire play while leaving room for imagination.

Avoid writing every result as a complete story.

GOOD:

> "You find a ceramic strawberry-shaped sugar bowl."

LESS USEFUL:

> "You find a ceramic strawberry-shaped sugar bowl and immediately remember your grandmother's kitchen, causing you to call Lucy and plan a picnic tomorrow."

Let the player decide what the result means.

⸻

## 21. SEASONS — OVERALL CONCEPT

Brookside has four major seasons:

SPRING
SUMMER
FALL
WINTER

Seasons are a GLOBAL GAMEPLAY LAYER.

They are NOT separate game modes.

Selecting Fall should mean:

> "You are playing normal Brookside, and it happens to be fall."

It should NOT mean:

> "Every activity is now a fall activity."

⸻

## 22. SEASON BALANCE

Target approximately:

70–80% NORMAL BROOKSIDE
20–30% SEASONAL BROOKSIDE

This is a conceptual target rather than a rigid requirement for every generator.

Some locations, particularly the nature center, may naturally contain more seasonal material.

Seasonal content should remain special enough to notice.

⸻

## 23. SEASON SELECTION

The player should be able to manually select the current Brookside season.

Possible interface:

🌷 Spring
☀️ Summer
🍂 Fall
❄️ Winter

Do not automatically force the real-world season.

The player decides when Brookside changes seasons.

Store the selected season in localStorage so it persists.

The current season should be accessible by other generators through one shared value/function rather than maintaining unrelated season settings throughout the app.

⸻

## 24. SEASONAL CONTENT TYPES

Seasons can affect several categories.

### A. Ambient Details

Very small observations.

Example fall results:

* leaves have collected outside the library
* someone came into Paws wearing a sweater
* the thrift store has a box of Halloween mugs
* there's a back-to-school flyer still hanging up
* the afternoon light feels unusually golden

These do not need to change the activity.

⸻

### B. Seasonal Activities

Occasional activities only available during a season.

Examples:

Fall:

* collect a leaf at the nature center
* check the Code Orange shelf
* try a fall Paws drink

Winter:

* browse indoor activities
* get a warm seasonal drink

Spring:

* look for new growth
* check the seed library

Summer:

* participate in summer reading
* get an iced drink
* do an outdoor activity

⸻

### C. Seasonal Collectibles

These are especially useful because Brookside uses physical stickers and ephemera.

Examples:

* leaf
* mushroom
* menu
* flyer
* tiny seasonal sticker
* event ticket
* seasonal receipt
* nature specimen
* Code Orange find

⸻

### D. Seasonal Visual Changes

The app may eventually use subtle visual changes.

Examples:

* small seasonal icon
* header accent
* seasonal illustration
* tiny environmental decoration

Do not completely redesign the interface for every season.

⸻

## 25. FALL IN BROOKSIDE

Fall currently has the most developed seasonal identity.

Fall roughly covers:

* back-to-school
* early fall
* Halloween
* later fall
* Thanksgiving-adjacent atmosphere

These do not need to be separate app modes.

The season can evolve through content additions.

Important fall concepts already established:

* Paws fall menu
* Paws seasonal window/display
* Brookside Thrift Code Orange shelf
* nature center leaf collecting
* fall stickers
* mushroom stickers
* seasonal notebook / collected seasonal artifacts

Avoid making every fall result explicitly Halloween-related.

Halloween is one component of Brookside fall.

⸻

## 26. SPRING, SUMMER, WINTER

These seasons can remain lighter until more worldbuilding is completed.

Do not invent huge seasonal systems just to make all four seasons symmetrical.

It is acceptable for Fall to temporarily have more content.

Build season architecture so additional content can be added later without restructuring the entire app.

⸻

## 27. SEASONAL NOTEBOOK CONCEPT

There may be a physical seasonal notebook/scrapbook.

Its purpose is not necessarily another game.

Instead, it can collect evidence of the season across Brookside.

Potential contents:

* Paws seasonal menu
* thrift receipt
* Code Orange evidence
* leaf specimen
* library flyer
* sticker
* photo
* photo strip
* event ticket
* handwritten note
* packaging
* seasonal ephemera

This creates a cross-location record of the season.

The app may generate items/events that can be physically added to this notebook.

⸻

## 28. PHOTO DUMP

Photo Dump is a Brookside app feature that generates casual photographic moments.

The important concept is:

> "What random things ended up on someone's camera roll today?"

Examples:

* three weird mugs at Brookside Thrift
* handwritten FREE STICKERS sign
* blurry orange cat
* Nevaeh pointing at an alarming lamp
* coffee on the Paws table
* strange library display
* first orange leaf
* Code Orange sighting
* thrift find
* someone's shoes
* bad picture of a friend
* random sign

Photos should favor ordinary, funny, or visually interesting moments.

They do not need to document every major activity.

⸻

## 29. PHOTO STRIPS / EXTERNAL IMAGE GENERATION

The Brookside app itself does NOT currently need to generate AI images.

Photo Dump may generate structured text that can be copied elsewhere and turned into images.

A future useful feature may be:

COPY PHOTO PROMPT

Example output:

```
BROOKSIDE PHOTO DUMP
Season: Fall
Doll: Nevaeh
Location: Brookside Thrift

1:32 PM — Three weird mugs lined up on a shelf.
4:08 PM — Handwritten FREE STICKERS sign.
5:17 PM — Code Orange: ceramic ghost in housewares.
6:41 PM — Nevaeh pointing at an alarming lamp.
```

Do not add an exposed AI API key to client-side JavaScript.

⸻

## 30. BROOKSIDE APP SPRITES

The app may use custom doll sprites/GIFs.

These are visual representations of established dolls.

Sprite artwork is created separately from the app.

Do not attempt to redesign or algorithmically generate doll sprites unless specifically requested.

When existing sprite/GIF assets exist, reuse them.

Do not substitute emoji or generic avatars for established sprite assets without being asked.

⸻

## 31. GROUP CHAT / AIM / PHONE FEATURES

Brookside contains communication-style generators such as:

* Group Chat
* Brookside AIM
* Someone is Calling

These exist primarily to make the dolls feel like they continue existing outside of location visits.

Generated communication should generally be:

* casual
* mundane
* characterful
* sometimes silly
* brief enough to feel like actual messages

Not every conversation needs to advance a plot.

Examples of appropriate reasons to message someone:

* asking who wants coffee
* sending a terrible thrift-store photo
* asking if someone left something at the library
* sharing a Code Orange sighting
* inviting someone somewhere
* complaining about a weird object
* sending a picture of a cat

⸻

## 32. "TODAY IN BROOKSIDE"

Today in Brookside should help create the feeling that the town is alive.

It can surface:

* who's around
* little events
* weather-like atmosphere if implemented
* location happenings
* community observations
* seasonal details
* mundane events

Avoid making every day exceptional.

A day where:

> "Paws put the fall menu out and someone donated a box of romance novels to the library sale shelf"

is a successful Brookside day.

⸻

## 33. SURPRISE ME / LITTLE ADVENTURE

Random adventure features should help answer:

> "What should I play?"

They may combine:

* doll
* location
* activity
* small event

Keep results playable.

Do not generate an entire predetermined narrative.

⸻

## 34. VENDING MACHINE

The vending machine is an example of an intentionally tiny Brookside feature.

It exists because pressing a button and seeing what snack/item comes out is fun.

This is a useful reference point for future features.

Not every feature needs strategic depth.

⸻

## 35. UI / VISUAL FEEL

The Brookside app should not look like:

* enterprise software
* a corporate dashboard
* fintech
* a modern SaaS admin panel
* a serious productivity app
* a generic AI-generated website

Preferred qualities:

* cozy
* handmade
* nostalgic
* colorful
* scrapbook-adjacent
* early internet influence
* Y2K / 2000s / early 2010s flavor
* approachable
* slightly imperfect
* playful

However:

Do not perform a large visual redesign unless specifically requested.

Preserve the established visual identity of the existing app.

⸻

## 36. MOBILE FIRST

The app is primarily used from a phone.

Prioritize:

* readable text
* tappable buttons
* simple screens
* short interaction paths
* minimal typing
* no tiny controls
* reasonable vertical scrolling
* layouts that work on narrow screens

Do not optimize primarily for desktop at the expense of mobile usability.

⸻

## 37. TECHNICAL PHILOSOPHY

Brookside should remain relatively simple technically.

Current priorities:

* GitHub Pages compatibility
* front-end implementation
* HTML/CSS/JavaScript
* localStorage
* lightweight assets
* minimal dependencies
* understandable code

Do not introduce:

* a backend
* database
* authentication
* build pipeline
* JavaScript framework
* package ecosystem

unless there is a clear need and it has been specifically approved.

If the existing repository already uses a particular structure, work within it.

⸻

## 38. LOCAL STORAGE

localStorage is appropriate for small persistent settings such as:

* current season
* saved items
* player preferences
* selected doll if appropriate
* lightweight state

Use clear, Brookside-specific key names.

Example:

```javascript
brooksideSeason
```

Avoid storing unnecessary duplicated state.

⸻

## 39. DATA ARCHITECTURE

When possible, content pools should be easy to expand.

For example, seasonal content might conceptually resemble:

```javascript
const brooksideSeasonalContent = {
    spring: {
        ambient: [],
        activities: [],
        collectibles: []
    },
    summer: {
        ambient: [],
        activities: [],
        collectibles: []
    },
    fall: {
        ambient: [],
        activities: [],
        collectibles: []
    },
    winter: {
        ambient: [],
        activities: [],
        collectibles: []
    }
};
```

Location-specific seasonal content may also exist.

Avoid hardcoding the same seasonal logic separately into every button if a reusable helper can handle it.

At the same time, do not perform a massive refactor solely to achieve theoretical architectural purity.

Incremental improvement is preferred.

⸻

## 40. CONTENT POOLS

Brookside benefits from LARGE random pools.

Repeated results reduce the feeling that the town is alive.

When adding generator content:

Prefer many short results over a few elaborate results.

Content should also be easy to expand manually.

Avoid requiring code changes in many different places just to add one new result.

⸻

## 41. WRITING STYLE FOR GENERATED RESULTS

Brookside generated text should generally be concise.

GOOD:

> "Someone left a stack of FREE STICKERS by the register."

GOOD:

> "Code Orange: ceramic jack-o'-lantern mug."

GOOD:

> "The first red leaf of the season is stuck to the Paws window."

Avoid unnecessarily literary narration such as:

> "As the crisp autumn breeze dances through the charming streets of Brookside, Nevaeh discovers…"

Avoid generic AI language.

Brookside is specific, casual, and observational.

⸻

## 42. HUMOR

Brookside humor is often based on treating mundane things as noteworthy.

Examples:

* an alarming lamp
* a very friendly cat
* aggressively ugly thrift-store mugs
* someone documenting a Code Orange sighting
* unnecessary pictures
* oddly specific signs
* weird community-board flyers

The app does not need punchlines.

The object/event itself can be funny.

⸻

## 43. CONTENT SHOULD LEAVE SPACE

Do not over-explain generated events.

A generator should create the spark.

The player creates the story.

For example:

GOOD:

> "Lucy finds an old photo being used as a bookmark."

NOT:

> "Lucy finds an old photo being used as a bookmark. She decides it must belong to a former Brookside resident and spends the afternoon investigating its mysterious origins."

The second version has already played the game for the player.

⸻

## 44. DEVELOPMENT WORKFLOW FOR AI

When asked to change the app:

STEP 1:
Read this file.

STEP 2:
Inspect the relevant existing HTML, CSS, and JavaScript.

STEP 3:
Identify how the existing feature currently works.

STEP 4:
Make the smallest reasonable change that accomplishes the request.

STEP 5:
Preserve unrelated working features.

STEP 6:
Test for obvious JavaScript errors and broken interactions.

STEP 7:
Explain what changed in plain language.

Do not immediately rewrite whole files unless necessary.

⸻

## 45. BEFORE ADDING A FEATURE

Ask internally:

1. Does this support actual Brookside play?
2. Is this something fun that happens, or another thing to manage?
3. Can this be simpler?
4. Does it preserve normal Brookside gameplay?
5. Could this create physical play or ephemera?
6. Will this work comfortably on a phone?
7. Am I changing unrelated features unnecessarily?

⸻

## 46. DO NOT "IMPROVE" WITHOUT PERMISSION

Do not automatically:

* redesign navigation
* rename buttons
* rewrite established copy
* replace existing art
* reorganize all JavaScript
* remove quirky features
* normalize Brookside into standard app conventions
* replace working systems with frameworks
* delete apparently unused assets without checking

Some unconventional design choices are intentional.

⸻

## 47. CURRENT MAJOR DEVELOPMENT DIRECTION

The current major development direction is:

**SEASONS IN BROOKSIDE.**

The initial implementation should establish the seasonal architecture without requiring every location to have complete seasonal content immediately.

Priority concepts:

1. Global current season.
2. Manual season selection.
3. localStorage persistence.
4. Normal gameplay remains dominant.
5. Seasonal content occasionally appears.
6. Fall receives the richest initial content.
7. Other seasons remain expandable.
8. Existing generators can gradually become season-aware.

Potential first season-aware features:

* Today in Brookside
* Paws Coffee
* Brookside Thrift
* Brookside Library
* Photo Dump

Piper's Nature Center can become strongly seasonal when its app implementation is developed.

⸻

## 48. CURRENT FALL CONTENT TO SUPPORT

Initial fall implementation can draw from concepts including:

### PAWS:

* fall seasonal menu
* seasonal window display
* occasional fall observation

### THRIFT:

* Code Orange shelf
* Halloween finds
* ordinary fall clothing/housewares
* seasonal free-box items

### LIBRARY:

* back-to-school remnants
* fall bulletin-board notices
* fall craft/event
* seasonal book display

### PHOTO DUMP:

* changing leaf
* weird seasonal thrift item
* seasonal drink
* Code Orange sighting
* fall sign
* someone wearing a sweater
* seasonal window
* ordinary photos with fall subtly visible

### TODAY IN BROOKSIDE:

* changing weather/atmosphere
* leaves appearing
* fall menus/displays appearing
* community events
* Halloween slowly appearing rather than dominating immediately

⸻

## 49. FUTURE SEASON DEPTH

Eventually seasons may include smaller phases such as:

Fall:

* back-to-school / early fall
* October / Halloween
* November / late fall

Winter:

* early winter
* holidays
* deep winter

Spring:

* early spring
* rainy spring
* late spring

Summer:

* early summer
* peak summer
* late summer

DO NOT implement these sub-seasons unless requested.

The four-season architecture should simply avoid making future expansion difficult.

⸻

## 50. THE MOST IMPORTANT RULE

Brookside should always feel like there is more happening than the player is required to see.

The app provides glimpses.

A drink order.
A thrift receipt.
A text.
A strange lamp.
A library flyer.
A leaf.
A blurry photo.
A cat outside the coffee shop.

Together, those little pieces create the world.

Protect that feeling when developing the app.
