(() => {
  const calls = [
    {
      who: "Talia", icon: "☕",
      line: "Paws is empty and I need you to choose my next bad idea.",
      options: [
        { text: "Mystery syrup combo.", reply: "Excellent. Barista's Choice plus one wildcard. Pick the wildcard.", next: [
          { text: "Lavender.", reply: "Bold. Floral. Potentially a candle. I respect it.", next: [
            { text: "Save me one.", reply: "Already writing your name on a cup." },
            { text: "Taste it first.", reply: "Cowardly but sensible. I'll report back." }
          ]},
          { text: "Brown sugar.", reply: "Okay wait, that might actually be unfairly good.", next: [
            { text: "I knew it.", reply: "Do not get smug until I taste it." },
            { text: "Add cinnamon too.", reply: "You understand the assignment." }
          ]},
          { text: "Something seasonal.", reply: "Pumpkin it is. This may be terrible. Do you want me to save you one?", next: [
            { text: "Obviously.", reply: "Correct answer. Cup labeled." },
            { text: "Taste it first.", reply: "Fine. But if it's amazing I'm charging consultant fees." },
            { text: "Absolutely not.", reply: "Coward. I'm labeling a cup for you anyway." }
          ]}
        ]},
        { text: "Make something pink.", reply: "I knew you were going to say that. Raspberry is already on the counter.", next: [
          { text: "Add vanilla.", reply: "Cute and dangerously drinkable. Done." },
          { text: "Add whipped cream.", reply: "Now it's a whole event. Excellent." },
          { text: "Surprise me.", reply: "Terrible thing to say to a bored barista. Perfect." }
        ]},
        { text: "Please behave.", reply: "You have called the wrong person for sensible advice.", next: [
          { text: "I tried.", reply: "And I appreciate the paperwork." },
          { text: "Fine. One bad idea.", reply: "That's the spirit. I'll keep it medium-bad." }
        ]}
      ]
    },
    {
      who: "Clarissa", icon: "🐾",
      line: "The rescue has a kitten who keeps climbing into the clean towel basket and I need a witness.",
      options: [
        { text: "Send a picture.", reply: "Already sent six. She looks extremely innocent in every one.", next: [
          { text: "She's innocent then.", reply: "This is exactly how she keeps getting away with it." },
          { text: "I need a seventh picture.", reply: "Finally, someone taking this seriously." }
        ]},
        { text: "Name her immediately.", reply: "Do not tempt me. She has enough nicknames already.", next: [
          { text: "What are they?", reply: "Towel Goblin, Miss Ma'am, and Small Criminal." },
          { text: "Towel Goblin wins.", reply: "Unfortunately it really does." }
        ]},
        { text: "I'm coming over.", reply: "Good. Bring coffee and zero judgment.", next: [
          { text: "On my way.", reply: "Perfect. She'll probably be asleep by the time you get here." },
          { text: "Do I bring a toy?", reply: "Yes. Something she can ignore in favor of the towel basket." }
        ]}
      ]
    },
    {
      who: "Lucy", icon: "📚",
      line: "I found a note tucked inside a used book and now I am emotionally invested.",
      options: [
        { text: "Read it.", reply: "It says, ‘Meet me by the fountain after work.’ That's it.", next: [
          { text: "What book was it in?", reply: "An old mystery novel, which is not helping." },
          { text: "We have to investigate.", reply: "I knew you'd understand." }
        ]},
        { text: "What kind of note?", reply: "Tiny blue paper, folded twice, very deliberate handwriting.", next: [
          { text: "Definitely a mystery.", reply: "Exactly. I have already made a tiny evidence pile." },
          { text: "Probably a grocery list.", reply: "You are no fun and also objectively wrong." }
        ]},
        { text: "Put it in the library mysteries file.", reply: "Winnie would absolutely support this investigation.", next: [
          { text: "Call Winnie.", reply: "This is escalating beautifully." },
          { text: "Keep it at Rabbit & Ink.", reply: "Fine. The bookstore now has an unofficial mysteries drawer." }
        ]}
      ]
    },
    {
      who: "Nevaeh", icon: "🪩",
      line: "There is a chair outside a house with a FREE sign and I think it has potential.",
      options: [
        { text: "What kind of chair?", reply: "Orange vinyl. Chrome legs. Slightly alarming. Perfect.", next: [
          { text: "Go get it.", reply: "I knew I called the right person." },
          { text: "Inspect for spiders first.", reply: "Practical. Annoying. Correct." }
        ]},
        { text: "Absolutely not.", reply: "You haven't even seen it.", next: [
          { text: "I know your taste.", reply: "That is both rude and fair." },
          { text: "Send a picture.", reply: "Fine. Prepare to apologize to the chair." }
        ]},
        { text: "Go get the chair.", reply: "Already turning the car around.", next: [
          { text: "Of course you are.", reply: "This was technically just a courtesy call." },
          { text: "Where will it go?", reply: "That is a future-Nevaeh problem." }
        ]}
      ]
    },
    {
      who: "Piper", icon: "🍃",
      line: "Do you think finding one perfect acorn counts as an activity?",
      options: [
        { text: "Absolutely.", reply: "Great. Nature Center programming officially approved by committee of us two.", next: [
          { text: "Give it a specimen card.", reply: "Already writing ‘exceptionally round’ under observations." },
          { text: "Display it proudly.", reply: "Tiny pedestal incoming." }
        ]},
        { text: "Only if documented.", reply: "I knew you were going to say that. Specimen card it is.", next: [
          { text: "Trail name too.", reply: "Obviously. Full scientific bureaucracy for one acorn." },
          { text: "Add a tiny sketch.", reply: "This is becoming a very serious acorn." }
        ]},
        { text: "Find two.", reply: "Ambitious. I respect the escalation.", next: [
          { text: "Make it a collection.", reply: "And now I need a little tray. Look what you've done." },
          { text: "One for me.", reply: "Deal. I'll choose the second-most-perfect one." }
        ]}
      ]
    },
    {
      who: "Maisie", icon: "🧥",
      line: "The trinket shelf has become dangerously good today.",
      options: [
        { text: "Define dangerously.", reply: "Brass animals, a clown pin, fruit charms, and one suspicious marble egg.", next: [
          { text: "Tell me about the egg.", reply: "Heavy, swirly, and absolutely not an actual egg. Probably." },
          { text: "Fruit charms first.", reply: "Correct. There is a tiny strawberry calling your name." }
        ]},
        { text: "Hold something for me.", reply: "Dangerous request. Pick a category.", next: [
          { text: "Tiny animal.", reply: "Brass rabbit. Done. No returns on emotional attachment." },
          { text: "Charm.", reply: "Little red apple. Extremely you." },
          { text: "Dealer's choice.", reply: "You have surrendered all legal rights to complain." }
        ]},
        { text: "Send photos.", reply: "Sending an irresponsible number of pictures now.", next: [
          { text: "This was a mistake.", reply: "Yes. A delightful mistake." },
          { text: "Zoom in on the clown pin.", reply: "I knew there was something wrong with you." }
        ]}
      ]
    },
    {
      who: "Kennley Ann", icon: "🍎",
      line: "There is a ceramic apple basket here and it is testing my character.",
      options: [
        { text: "Stay strong.", reply: "Thank you. I needed one sensible person.", next: [
          { text: "How much is it?", reply: "$3. Which has made the sensible argument much weaker." },
          { text: "Walk away.", reply: "I'm walking. Very slowly. Past it again." }
        ]},
        { text: "How much?", reply: "$3. Unfortunately reasonable.", next: [
          { text: "Buy it.", reply: "Thank you for enabling my seasonal ceramics problem." },
          { text: "Still no.", reply: "Harsh. Responsible. I dislike it." }
        ]},
        { text: "Your character can have one.", reply: "Finally, justice.", next: [
          { text: "Send a picture when it's home.", reply: "It is apparently coming home now. Good work." },
          { text: "What goes in it?", reply: "Tiny apples, keys, maybe exactly nothing. The possibilities." }
        ]}
      ]
    },
    {
      who: "Delilah", icon: "🎨",
      line: "I need a volunteer for a tiny art emergency.",
      options: [
        { text: "Define tiny.", reply: "Forty labels that are each half an inch too wide.", next: [
          { text: "That is not tiny.", reply: "The labels are tiny. The emotional damage is medium." },
          { text: "I'll bring scissors.", reply: "You are a hero and I will buy snacks." }
        ]},
        { text: "I'm available.", reply: "Perfect. Bring your best patient cutting energy.", next: [
          { text: "Do we get snacks?", reply: "Obviously. This is an art emergency, not a punishment." },
          { text: "How many did you say?", reply: "Forty. Do not make that face at me." }
        ]},
        { text: "Is paint involved?", reply: "Not yet, but there is always paint eventually.", next: [
          { text: "Then yes.", reply: "Excellent. I knew that would get you." },
          { text: "Suspicious answer.", reply: "Correct response. Still need you though." }
        ]}
      ]
    },
    {
      who: "Lea Grace", icon: "🐇",
      line: "Someone left a tiny plastic frog in the Maker Space and I think it lives here now.",
      options: [
        { text: "Name it.", reply: "Desk Frog. Simple. Strong. No notes.", next: [
          { text: "Perfect.", reply: "Desk Frog appreciates your support." },
          { text: "Needs a last name.", reply: "Oh no. You're right. This is now a committee matter." }
        ]},
        { text: "Put it on your desk.", reply: "Already beside the tape dispenser like it pays rent.", next: [
          { text: "Give it a name tag.", reply: "I have a label maker and no self-control. Done." },
          { text: "Tiny chair next.", reply: "Do not tempt the Maker Space coordinator with a build prompt." }
        ]},
        { text: "Investigate the frog.", reply: "Thank you for taking this as seriously as I am.", next: [
          { text: "Check lost and found.", reply: "No frog reports. The mystery deepens." },
          { text: "Ask Winnie.", reply: "Winnie says, and I quote, ‘that's your frog now.’" }
        ]}
      ]
    },
    {
      who: "Hallie Jo", icon: "📦",
      line: "I just saw a sign downtown that says FREE ROCK. Singular.",
      options: [
        { text: "Take the rock.", reply: "Already holding it. Good rock.", next: [
          { text: "Describe good rock.", reply: "Flat, gray, pleasantly heavy. Five stars." },
          { text: "Name it.", reply: "This was not supposed to become a responsibility." }
        ]},
        { text: "Photo first.", reply: "Sending proof because I know this sounds made up.", next: [
          { text: "Extremely Brookside.", reply: "Right? No notes." },
          { text: "The sign is better than the rock.", reply: "Honestly the sign may be the real collectible." }
        ]},
        { text: "That's extremely Brookside.", reply: "Exactly. I felt obligated to call someone.", next: [
          { text: "Thank you for your service.", reply: "Community reporting matters." },
          { text: "Bring it to Paws.", reply: "Talia is going to ask why I brought a rock to coffee." }
        ]}
      ]
    },
    {
      who: "Winnie", icon: "📖",
      line: "Someone returned a library book with a grocery list inside and I need to discuss it.",
      options: [
        { text: "What's on the list?", reply: "Milk, cereal, batteries, and ‘something fun.’", next: [
          { text: "Strong list.", reply: "Exactly. Efficient but emotionally aware." },
          { text: "What was the fun thing?", reply: "Unknown. This is now the central mystery." }
        ]},
        { text: "Keep it for the mystery file.", reply: "Finally, someone understands archival responsibility.", next: [
          { text: "Label and date it.", reply: "Already did. We run a serious institution here." },
          { text: "Show Lucy.", reply: "Oh she is absolutely going to care too much about this." }
        ]},
        { text: "Was the book good?", reply: "Judging by the coffee stain and bent corner, it was loved.", next: [
          { text: "That's a five-star review.", reply: "My preferred rating system, honestly." },
          { text: "What book?", reply: "A cozy mystery. Of course it was." }
        ]}
      ]
    },
    {
      who: "Clara June", icon: "🍋",
      line: "I need a pink drink that feels like an afternoon off.",
      options: [
        { text: "Strawberry lemonade.", reply: "Yes. Pink, tart, tiny vacation energy.", next: [
          { text: "Extra ice.", reply: "Correct. Cold enough to require a sweater indoors." },
          { text: "Add a cute straw.", reply: "Obviously. Presentation is half the afternoon off." }
        ]},
        { text: "Something fizzy.", reply: "Tiny bubbles. Very important. Maybe raspberry soda with lemon.", next: [
          { text: "Perfect.", reply: "I knew you'd understand the assignment." },
          { text: "Add cherries.", reply: "Now we're bordering on fancy and I support it." }
        ]},
        { text: "Ask Talia.", reply: "Dangerous but correct.", next: [
          { text: "Put her on speaker.", reply: "This is becoming a beverage conference call." },
          { text: "Tell her ‘pink and calm.’", reply: "She says that is ‘an excellent brief.’" }
        ]}
      ]
    },
    {
      who: "Briar", icon: "💿",
      line: "I found a tiny silver CD wallet and I suddenly need to make a mix.",
      options: [
        { text: "What's track one?", reply: "Something with a dramatic twenty-second intro. Obviously.", next: [
          { text: "Commit to the drama.", reply: "Thank you. No shuffle. The sequence matters." },
          { text: "Start with something loud.", reply: "Also valid. We may need two mixes now." }
        ]},
        { text: "Make it aggressively Y2K.", reply: "Glitter gel pen labeling has already begun.", next: [
          { text: "Add a tiny star sticker.", reply: "There are now seventeen. Restraint failed." },
          { text: "Burn two copies.", reply: "One for the car, one for emotional security." }
        ]},
        { text: "Decorate the cover first.", reply: "Exactly. The cover determines the entire musical direction.", next: [
          { text: "Silver and blue.", reply: "Cold futuristic mall-kiosk energy. Perfect." },
          { text: "Pink and orange.", reply: "Now it feels like summer 2002. Excellent." }
        ]}
      ]
    },
    {
      who: "Hart", icon: "🏀",
      line: "I need one more activity for tonight at the Community Center and my brain is empty.",
      options: [
        { text: "Bracelet table.", reply: "Easy, social, and I already have bins of beads.", next: [
          { text: "Mystery bead bowl.", reply: "Oh that's good. One blind pick required." },
          { text: "Make friendship ones.", reply: "Community Center friendship bracelet diplomacy. Done." }
        ]},
        { text: "Tiny scavenger hunt.", reply: "Five clues and a ridiculous prize. I can work with that.", next: [
          { text: "Prize should be stickers.", reply: "Obviously. Universal Brookside currency." },
          { text: "Hide one clue outside.", reply: "Weather permitting, yes. Excellent final clue energy." }
        ]},
        { text: "Random craft supplies.", reply: "Honestly the most realistic answer.", next: [
          { text: "Put them in a mystery bag.", reply: "Make something using only what you pull. I love it." },
          { text: "Set a timer.", reply: "Ten-minute chaos craft. Adding it now." }
        ]}
      ]
    },
    {
      who: "Brittney Paige", icon: "📸",
      line: "Can you settle something? Is a photo booth corner too much for a normal weeknight event?",
      options: [
        { text: "Never too much.", reply: "Thank you. I'm hanging the backdrop.", next: [
          { text: "Add a timestamp sign.", reply: "Cute. Very little-memory-strip. Done." },
          { text: "Needs props.", reply: "Obviously. I have three bins already." }
        ]},
        { text: "Only with props.", reply: "Finally, a person with standards.", next: [
          { text: "Big sunglasses.", reply: "Non-negotiable." },
          { text: "Tiny signs.", reply: "I am making one that says ‘I was here.’" }
        ]},
        { text: "Maybe a tiny one.", reply: "Exactly. Small concentrated fun.", next: [
          { text: "One chair and a curtain.", reply: "That is extremely achievable. Thank you." },
          { text: "Keep it simple.", reply: "I will try, which is not the same as promising." }
        ]}
      ]
    },
    {
      who: "Bonnie Bea", icon: "🧸",
      line: "I tested a new museum activity and the kids immediately used it in a way I did not anticipate.",
      options: [
        { text: "What happened?", reply: "They were supposed to sort shapes. They built a pretend bakery.", next: [
          { text: "That's better.", reply: "Honestly? Much better. I'm rewriting the activity." },
          { text: "What were they selling?", reply: "Triangle cake, circle cookies, and one extremely expensive rectangle." }
        ]},
        { text: "Did it still work?", reply: "Better than the plan, which is rude but useful.", next: [
          { text: "Keep the bakery version.", reply: "Already making a tiny menu sign." },
          { text: "Call it open-ended learning.", reply: "Perfect. Professional language saves the day." }
        ]},
        { text: "That's probably a good sign.", reply: "Exactly. They took ownership immediately.", next: [
          { text: "Let them design the next one.", reply: "Okay wait, that's actually a fantastic program idea." },
          { text: "Document the chaos.", reply: "I have notes. So many notes." }
        ]}
      ]
    },
    {
      who: "Addy Walker", icon: "🌼",
      line: "I found a little notebook and now I feel like it needs a purpose before I can use it.",
      options: [
        { text: "Make it a tiny log.", reply: "One line a day? That feels low-stakes enough.", next: [
          { text: "Exactly one line.", reply: "Perfect. No turning it into homework." },
          { text: "Add the date and one sticker.", reply: "Okay, now I genuinely want to start tonight." }
        ]},
        { text: "Use it badly on purpose.", reply: "That is weirdly liberating advice.", next: [
          { text: "Messy handwriting required.", reply: "Excellent. Lowering standards immediately." },
          { text: "Skip pages too.", reply: "Reckless. I like it." }
        ]},
        { text: "Sticker inventory.", reply: "Practical and extremely tempting.", next: [
          { text: "By category.", reply: "This is how I accidentally create a filing system." },
          { text: "No categories. Just chaos.", reply: "Much safer. Sticker notebook it is." }
        ]}
      ]
    }
  ];

  function randomCall(lastWho = null) {
    const pool = lastWho ? calls.filter(call => call.who !== lastWho) : calls;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function getOptions(node) {
    return Array.isArray(node?.options) ? node.options : Array.isArray(node?.next) ? node.next : [];
  }

  window.BrooksideCallsV2 = { calls, randomCall, getOptions };
})();
