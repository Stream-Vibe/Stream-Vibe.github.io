window.GALLERY = [
 {
  "key": "v054",
  "env": "Physical",
  "title": "The moment the coffee button is pressed",
  "level": "Explicit",
  "sub": "Single Event",
  "speed": 1.0,
  "start": 47.0,
  "end": 62.0,
  "users": [
   {
    "t": 0.0,
    "text": "Let me know when the person presses a button on the coffee machine."
   }
  ],
  "gold": [
   57.0
  ],
  "resp": [
   {
    "t": 57.0,
    "text": "The person has pressed a button on the coffee machine.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "MMDuet2",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The person presses a button on the coffee machine."
     },
     {
      "name": "LiveStar",
      "tag": "Premature",
      "color": "E5484D",
      "text": "Then, the hand reaches out again and presses a button on the coffee machine. The coffee machine starts to dispense coffee, and the coffee flows into the cup."
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "1"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 0,
   "MMDuet2": 0,
   "ViSpeak": 4,
   "LiveStar": 2,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    57.0
   ],
   "JoyAI": [],
   "MMDuet2": [],
   "ViSpeak": [
    47.0,
    51.0,
    56.0,
    60.0
   ],
   "LiveStar": [
    48.0,
    50.0
   ],
   "Mage-VL": [
    48.0,
    56.0
   ]
  }
 },
 {
  "key": "v056",
  "env": "Physical",
  "title": "When the skier starts down the slope",
  "level": "Explicit",
  "sub": "Single Event",
  "speed": 1.0,
  "start": 2.0,
  "end": 17.0,
  "users": [
   {
    "t": 0.0,
    "text": "Notify me when the skier in the camouflage jacket begins skiing down the slope."
   }
  ],
  "gold": [
   12.0
  ],
  "resp": [
   {
    "t": 12.0,
    "text": "The skier in the camouflage jacket has started skiing down the slope.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The skier in the camouflage jacket is now skiing down the slope, with red skis and ski poles in hand, moving steadily downhill."
     },
     {
      "name": "MMDuet2",
      "tag": "Late",
      "color": "E5484D",
      "text": "The skier in the camouflage jacket begins skiing down the slope, moving away from the camera and heading towards the snowy mountain peak."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The skier in the camouflage jacket begins skiing down the slope."
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Premature",
      "color": "E5484D",
      "text": "None of the choices provided"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 1,
   "MMDuet2": 1,
   "ViSpeak": 2,
   "LiveStar": 1,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    12.0
   ],
   "JoyAI": [
    14.0
   ],
   "MMDuet2": [
    15.0
   ],
   "ViSpeak": [
    6.0,
    14.0
   ],
   "LiveStar": [
    2.0
   ],
   "Mage-VL": [
    8.0,
    16.0
   ]
  }
 },
 {
  "key": "v057",
  "env": "Physical",
  "title": "When she asks about the camera",
  "level": "Explicit",
  "sub": "Single Event",
  "speed": 1.0,
  "start": 0.0,
  "end": 13.0,
  "users": [
   {
    "t": 0.0,
    "text": "Tell me as soon as the girl asks if someone is taking a video."
   }
  ],
  "gold": [
   9.0
  ],
  "resp": [
   {
    "t": 8.0,
    "text": "The girl asks if someone is taking a video.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Late",
      "color": "E5484D",
      "text": "The girl in the pink top is peeling potatoes at the sink, and she turns her head to look back and asks if someone is taking a video."
     },
     {
      "name": "MMDuet2",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The girl asks, \"Is someone taking a video?\""
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The woman in pink then cuts the apple in half with the knife, revealing the white flesh inside. She then cuts the apple into pieces and puts them into the bowl."
     },
     {
      "name": "Mage-VL",
      "tag": "Late",
      "color": "E5484D",
      "text": "0.0"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 0,
   "MMDuet2": 0,
   "ViSpeak": 3,
   "LiveStar": 7,
   "Mage-VL": 0
  },
  "lanes": {
   "StreamVibe": [
    8.0
   ],
   "JoyAI": [],
   "MMDuet2": [],
   "ViSpeak": [
    5.0,
    9.0,
    12.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    2.0,
    6.0,
    8.0,
    11.0,
    13.0
   ],
   "Mage-VL": []
  }
 },
 {
  "key": "v014",
  "env": "Physical",
  "title": "Microwave mug shakshuka",
  "level": "Implicit",
  "sub": "Guidance",
  "speed": 1.0,
  "start": 111.0,
  "end": 126.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through making this microwave mug shakshuka step by step, and let me know if I mess up the ingredients or cooking times."
   }
  ],
  "gold": [
   122.0
  ],
  "resp": [
   {
    "t": 121.0,
    "text": "The microwave is done. Carefully remove the mug and check if the egg is set.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Stir one last time to make sure everything's cooked through."
     },
     {
      "name": "MMDuet2",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The person is making microwave mug shakshuka."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Then, the scene switches to the microwave, where a hand is opening the microwave door."
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "1. Preheat the oven to 375 degrees Fahrenheit. 2. In a large bowl, whisk together the eggs, salt, and pepper. 3. In a separate bowl, whisk together the chickpeas, cumin, paprika, and cayenne pepper. 4. Add the chickpea mixture to the egg mixture and whisk until combined. 5."
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 16,
   "MMDuet2": 0,
   "ViSpeak": 3,
   "LiveStar": 3,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    121.0
   ],
   "JoyAI": [
    111.0,
    112.0,
    113.0,
    114.0,
    115.0,
    116.0,
    117.0,
    118.0,
    119.0,
    120.0,
    121.0,
    122.0,
    123.0,
    124.0,
    125.0,
    126.0
   ],
   "MMDuet2": [],
   "ViSpeak": [
    112.0,
    118.0,
    123.0
   ],
   "LiveStar": [
    119.0,
    121.0,
    124.0
   ],
   "Mage-VL": [
    112.0,
    120.0
   ]
  }
 },
 {
  "key": "v018",
  "env": "Physical",
  "title": "Swapping a toy car’s rear wheel",
  "level": "Implicit",
  "sub": "Guidance",
  "speed": 1.0,
  "start": 0.0,
  "end": 9.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through upgrading this toy car's rear wheel assembly, and make sure I'm using the right parts and securing everything tightly."
   }
  ],
  "gold": [
   4.0
  ],
  "resp": [
   {
    "t": 4.0,
    "text": "Go ahead and loosen the pink nut on the rear axle to start removing the old wheel.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Premature",
      "color": "E5484D",
      "text": "Okay, we're looking at a toy car chassis with pink and black components. The rear wheel assembly is already partially assembled, but we need to upgrade it. Let's start by checking the current setup."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Hands start by disassembling the rear part of the car, with one hand holding the white frame and the other manipulating components near the pink-hued parts and black wheels."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The person is using a screwdriver to tighten the screws on the rear wheel assembly of the toy car."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Then the hand pushes the toy car forward, and the front of the car moves up and down. Then the hand takes out a pink gear and puts it on the toy car."
     },
     {
      "name": "Mage-VL",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 2,
   "MMDuet2": 3,
   "ViSpeak": 1,
   "LiveStar": 6,
   "Mage-VL": 0
  },
  "lanes": {
   "StreamVibe": [
    4.0
   ],
   "JoyAI": [
    0.0,
    7.0
   ],
   "MMDuet2": [
    5.0,
    7.0,
    9.0
   ],
   "ViSpeak": [
    5.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    2.0,
    3.0,
    4.0,
    7.0
   ],
   "Mage-VL": []
  }
 },
 {
  "key": "v023",
  "env": "Physical",
  "title": "Cleaning a sink with baking soda paste",
  "level": "Implicit",
  "sub": "Guidance",
  "speed": 1.0,
  "start": 0.0,
  "end": 7.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through cleaning this bathroom sink with a DIY baking soda paste, and help me get the consistency and scrubbing right."
   }
  ],
  "gold": [
   2.0
  ],
  "resp": [
   {
    "t": 2.0,
    "text": "Go ahead and add a generous amount of baking soda into the bowl, then slowly pour in water to start mixing.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Okay, let's get started. First, make sure the sink is dry. We're going to clean this with a baking soda paste."
     },
     {
      "name": "MMDuet2",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "ViSpeak",
      "tag": "Late",
      "color": "E5484D",
      "text": "The person is preparing to clean the bathroom sink with a DIY baking soda paste."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Then the man in the white T-shirt puts down the phone, and the scene switches to a woman in a white T-shirt and a white headscarf. She is standing in front of the sink, holding a basin in her left hand and a bowl in her right hand. The woman in the white T-shirt puts the basin on the sink, then puts the bowl on the basin, and then puts the bowl on the right side of the sink."
     },
     {
      "name": "Mage-VL",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 2,
   "MMDuet2": 0,
   "ViSpeak": 1,
   "LiveStar": 2,
   "Mage-VL": 0
  },
  "lanes": {
   "StreamVibe": [
    2.0
   ],
   "JoyAI": [
    0.0,
    7.0
   ],
   "MMDuet2": [],
   "ViSpeak": [
    7.0
   ],
   "LiveStar": [
    0.0,
    1.0
   ],
   "Mage-VL": []
  }
 },
 {
  "key": "v102",
  "env": "Physical",
  "title": "Mug scrambled eggs, with questions mid-task",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 46.0,
  "end": 67.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm making scrambled eggs in a mug in the microwave. Walk me through the steps one by one as I go."
   },
   {
    "t": 26.0,
    "text": "Did I whisk the egg yet?"
   },
   {
    "t": 62.0,
    "text": "Did I add cheese to the mug?"
   }
  ],
  "gold": [
   55.0,
   62.0
  ],
  "resp": [
   {
    "t": 54.0,
    "text": "Place the mug in the microwave and set the timer.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Now, add a little bit of pepper to taste."
     },
     {
      "name": "MMDuet2",
      "tag": "Late",
      "color": "E5484D",
      "text": "Yes, the person added Daiya mozzarella shreds to the egg in the mug."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The person puts the mug in the microwave and sets the timer."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Then, the hand pours the egg white into the bowl."
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "yes"
     }
    ]
   },
   {
    "t": 62.0,
    "text": "Yes, you added cheese to the mug before microwaving it.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Yes, you did! You added a little bit of cheese to the mug."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Yes, the person added Daiya mozzarella shreds to the egg in the mug."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "yes"
     },
     {
      "name": "LiveStar",
      "tag": "Premature",
      "color": "E5484D",
      "text": "Then, the hand pours the egg white into the bowl."
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Did I whisk the egg yet?\nDid I add cheese to the mug?"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 2,
   "JoyAI": 22,
   "MMDuet2": 1,
   "ViSpeak": 4,
   "LiveStar": 1,
   "Mage-VL": 3
  },
  "lanes": {
   "StreamVibe": [
    54.0,
    62.0
   ],
   "JoyAI": [
    46.0,
    47.0,
    48.0,
    49.0,
    50.0,
    51.0,
    52.0,
    53.0,
    54.0,
    55.0,
    56.0,
    57.0,
    58.0,
    59.0,
    60.0,
    61.0,
    62.0,
    63.0,
    64.0,
    65.0,
    66.0,
    67.0
   ],
   "MMDuet2": [
    62.0
   ],
   "ViSpeak": [
    49.0,
    56.0,
    62.0,
    65.0
   ],
   "LiveStar": [
    56.0
   ],
   "Mage-VL": [
    48.0,
    56.0,
    64.0
   ]
  }
 },
 {
  "key": "v149",
  "env": "Physical",
  "title": "Tortilla chips and salsa, interrupted",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 240.0,
  "end": 253.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm making homemade tortilla chips and fresh salsa from scratch. Guide me step-by-step as I complete each part of the recipe."
   },
   {
    "t": 108.0,
    "text": "Which bowl should I put the chopped salsa ingredients into?"
   },
   {
    "t": 178.0,
    "text": "Do I have any raw tortilla pieces left to cook?"
   },
   {
    "t": 248.0,
    "text": "Where was the lemon half sitting before I picked it up?"
   }
  ],
  "gold": [
   248.0
  ],
  "resp": [
   {
    "t": 248.0,
    "text": "The lemon half was sitting on the counter next to the pressure cooker.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The lemon half was sitting on the counter before you picked it up."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The lemon half was sitting on the red cutting board."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The person is cooking tortilla chips in a pan."
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "None of the choices provided"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 14,
   "MMDuet2": 1,
   "ViSpeak": 2,
   "LiveStar": 0,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    248.0
   ],
   "JoyAI": [
    240.0,
    241.0,
    242.0,
    243.0,
    244.0,
    245.0,
    246.0,
    247.0,
    248.0,
    249.0,
    250.0,
    251.0,
    252.0,
    253.0
   ],
   "MMDuet2": [
    248.0
   ],
   "ViSpeak": [
    246.0,
    250.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    240.0,
    248.0
   ]
  }
 },
 {
  "key": "v154",
  "env": "Physical",
  "title": "Garage cleanup, interrupted",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 38.0,
  "end": 51.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm clearing cobwebs off the garage ceiling and organizing tools. Guide me on what step to take next as I work through it."
   },
   {
    "t": 15.0,
    "text": "Is the bin with the yellow lid for recycling or trash?"
   },
   {
    "t": 46.0,
    "text": "Where is the step stool?"
   }
  ],
  "gold": [
   46.0
  ],
  "resp": [
   {
    "t": 46.0,
    "text": "The step stool is positioned in the center of the garage, near the recycling bins.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The step stool is on the floor."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The step stool is positioned against a wall near a white door, with a green broom leaning against it, and a green and yellow toy vehicle and a blue dustpan nearby."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The person is cleaning the ceiling with a broom."
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "None of the choices provided"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 4,
   "MMDuet2": 1,
   "ViSpeak": 5,
   "LiveStar": 0,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    46.0
   ],
   "JoyAI": [
    40.0,
    46.0,
    47.0,
    51.0
   ],
   "MMDuet2": [
    46.0
   ],
   "ViSpeak": [
    38.0,
    43.0,
    46.0,
    47.0,
    50.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    40.0,
    48.0
   ]
  }
 },
 {
  "key": "v080",
  "env": "Physical",
  "title": "Fixing a garden hose, interrupted",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 17.0,
  "end": 30.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm fixing this outdoor garden hose connection. Let me know what to do next as I finish each step."
   },
   {
    "t": 25.0,
    "text": "What tool did I use to loosen the hose connection?"
   }
  ],
  "gold": [
   25.0
  ],
  "resp": [
   {
    "t": 25.0,
    "text": "You used a pair of pliers to loosen the hose connection.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "You used a wrench to loosen the hose connection."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "I used a pair of pliers to loosen the hose connection."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "a pipe wrench"
     },
     {
      "name": "LiveStar",
      "tag": "Late",
      "color": "E5484D",
      "text": "The person then uses the tool to clean the black pipe."
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Sure, I can help you with that. What is the first step you want to take?"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 6,
   "MMDuet2": 1,
   "ViSpeak": 3,
   "LiveStar": 0,
   "Mage-VL": 1
  },
  "lanes": {
   "StreamVibe": [
    25.0
   ],
   "JoyAI": [
    17.0,
    22.0,
    24.0,
    25.0,
    28.0,
    30.0
   ],
   "MMDuet2": [
    25.0
   ],
   "ViSpeak": [
    18.0,
    25.0,
    27.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    24.0
   ]
  }
 },
 {
  "key": "v044",
  "env": "Digital",
  "title": "Customizing a Nextcloud dashboard",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.0,
  "start": 30.0,
  "end": 45.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through customizing my Nextcloud dashboard so I can add the Recommended files and Upcoming tasks widgets, and remove Status and Weather."
   }
  ],
  "gold": [
   39.0
  ],
  "resp": [
   {
    "t": 40.0,
    "text": "Click the 'Weather' tile in the widget menu to remove it from your dashboard.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "If you need to add more widgets, click \"Add widget\" again and select from the list."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "An 'Edit widgets' window is open, showing options like Status, Weather, Recent activity, Upcoming events, and more, with a hand-like cursor hovering over the Status widget, and a note about the weather service explaining that weather data is requested by the Nextcloud server for privacy without personal information, sourced from Meteo, Nominatim, and OpenTopoData."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "To add the Recommended files and Upcoming tasks widgets, and remove Status and Weather, follow these steps:\n1. Click on the \"Customize\" button on the Nextcloud dashboard.\n2. In the \"Edit widgets\" section, click on the \"Recommended files\" and \"Upcoming tasks\" widgets to add them to the dashboard.\n3. To remove the \"Status\" and \"Weather\" widgets, click on them and then click on the \"Remove\" button.\n4. Save your changes by clicking on the \"Save\" button."
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Premature",
      "color": "E5484D",
      "text": "Sure, I can walk you through that process. First, you would need to click on the 'Edit widgets' button on your Nextcloud dashboard. Then, you would select the 'Recommended files' and 'Upcoming tasks' widgets and drag them to the desired location on your dashboard. After that, you would select the 'Status' and 'Weather' widgets and drag them to the trash can"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 7,
   "MMDuet2": 3,
   "ViSpeak": 8,
   "LiveStar": 0,
   "Mage-VL": 1
  },
  "lanes": {
   "StreamVibe": [
    40.0
   ],
   "JoyAI": [
    31.0,
    39.0,
    40.0,
    41.0,
    42.0,
    43.0,
    45.0
   ],
   "MMDuet2": [
    32.0,
    36.0,
    40.0
   ],
   "ViSpeak": [
    31.0,
    33.0,
    35.0,
    37.0,
    39.0,
    41.0,
    43.0,
    45.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    32.0
   ]
  }
 },
 {
  "key": "v048",
  "env": "Digital",
  "title": "Scheduling a message in Zulip",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.0,
  "start": 37.0,
  "end": 52.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through finding Laura's message history in Zulip, and then show me how to draft and schedule a direct message to Jessica."
   }
  ],
  "gold": [
   47.0
  ],
  "resp": [
   {
    "t": 47.0,
    "text": "Click the 'Schedule message' option in the dropdown menu to set a time for your message to Jessica.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "To edit the scheduled message, click on the \"Edit\" button next to it."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "A hand clicks on the three-dot icon next to the send button in the draft message box, causing a dropdown menu to appear with options including 'Schedule message', 'View scheduled messages', and 'Save draft and start a new message'."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The video shows a person clicking on the \"New message\" button, typing \"Hello Jessica,\" and scheduling the message for 10:00 AM."
     },
     {
      "name": "LiveStar",
      "tag": "Late",
      "color": "E5484D",
      "text": "The screen then moves to the right, showing a new message thread. The message thread is marked as \"New message thread\" and shows a conversation between two people. The screen then moves to the right, revealing a new message thread. The message thread is marked as \"New message thread\" and shows a conversation between two people. The screen then moves to the right, revealing a new message thread. The message thread is marked as \"New message thread\" and shows a conversation between two people."
     },
     {
      "name": "Mage-VL",
      "tag": "Premature",
      "color": "E5484D",
      "text": "Sure, I'll start by navigating to the 'DIRECT MESSAGES' section and selecting 'Jessica Indimil Lichuma' to view her message history. Then, I'll proceed to the 'DRAFTS' section to compose a new message."
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 8,
   "MMDuet2": 2,
   "ViSpeak": 8,
   "LiveStar": 1,
   "Mage-VL": 1
  },
  "lanes": {
   "StreamVibe": [
    47.0
   ],
   "JoyAI": [
    44.0,
    45.0,
    47.0,
    48.0,
    49.0,
    50.0,
    51.0,
    52.0
   ],
   "MMDuet2": [
    47.0,
    50.0
   ],
   "ViSpeak": [
    37.0,
    39.0,
    41.0,
    43.0,
    45.0,
    47.0,
    49.0,
    51.0
   ],
   "LiveStar": [
    50.0
   ],
   "Mage-VL": [
    40.0
   ]
  }
 },
 {
  "key": "v052",
  "env": "Digital",
  "title": "Renting a van on Expedia",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.0,
  "start": 0.0,
  "end": 15.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through booking a large passenger van in Boston on Expedia for my trip from March 10th to April 11th."
   }
  ],
  "gold": [
   10.0
  ],
  "resp": [
   {
    "t": 10.0,
    "text": "Click the 'Car rentals' tab at the top of the Expedia homepage to start searching for a van.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Click the destination input box. Type in Boston, Massachusetts."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The Expedia website shows options for flights, cars, packages, and things to do, with a 'Where to?' field set to Beijing (and vicinity), China, dates from 27 Dec - 31 Dec, and travelers as 2 travellers, 1 room; a pop-up asks if the user wants to see results closer to their location, and the Expedia Group logo is visible on the right side."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The video shows a computer screen with a web browser open to the Expedia website. The user clicks on the search bar and types in the destination and date of the trip. The user then clicks on the search button and the website displays the results of the search."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The mouse then moves to the right, and the screen switches to the Expedia website. The mouse hovers over the Expedia logo, and a mouse pointer appears. The mouse then moves to the right, and the Expedia logo disappears. The mouse then moves to the right, and the screen switches to the Expedia website. The mouse hovers over the Expedia logo, and a mouse pointer appears. The mouse then moves to the right, and the Expedia logo disappears."
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Sure, I can assist you with that. First, I will navigate to the Expedia website by typing 'expedia.com' into the Google search bar and pressing enter. Once on the Expedia homepage, I will click on the 'flights' option to begin the booking process."
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 6,
   "MMDuet2": 4,
   "ViSpeak": 5,
   "LiveStar": 5,
   "Mage-VL": 1
  },
  "lanes": {
   "StreamVibe": [
    10.0
   ],
   "JoyAI": [
    0.0,
    5.0,
    9.0,
    11.0,
    13.0,
    15.0
   ],
   "MMDuet2": [
    4.0,
    6.0,
    10.0,
    13.0
   ],
   "ViSpeak": [
    3.0,
    6.0,
    9.0,
    12.0,
    14.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    3.0,
    5.0,
    10.0
   ],
   "Mage-VL": [
    8.0
   ]
  }
 },
 {
  "key": "v016",
  "env": "Digital",
  "title": "Pixel-art rendering in Blender",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.0,
  "start": 266.0,
  "end": 281.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through setting up toon shading and pixel art rendering in Blender, guiding me through the shader nodes and output settings."
   }
  ],
  "gold": [
   275.0
  ],
  "resp": [
   {
    "t": 276.0,
    "text": "The pixel art render is complete. You can now export the image or continue refining the shader setup.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Now let's add some additional effects. Add a ColorRamp node to create some additional shading."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The character model is shown in two different poses, with one frame showing the character in a running-like stance and the other in a more relaxed pose, both against a plain gray background, demonstrating the pixel-art style."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": ""
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Premature",
      "color": "E5484D",
      "text": "{'error': '', 'answer': 'To set up toon shading and pixel art rendering in Blender, first, navigate to the shader nodes and select the Principled BSDF shader. Then, adjust the 'Roughness' value to 0.0 to achieve a toon shading effect. Next, go to the output settings and select 'Pixel Art' as the render engine. Adjust the"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 16,
   "MMDuet2": 4,
   "ViSpeak": 3,
   "LiveStar": 0,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    276.0
   ],
   "JoyAI": [
    266.0,
    267.0,
    268.0,
    269.0,
    270.0,
    271.0,
    272.0,
    273.0,
    274.0,
    275.0,
    276.0,
    277.0,
    278.0,
    279.0,
    280.0,
    281.0
   ],
   "MMDuet2": [
    276.0,
    277.0,
    279.0,
    281.0
   ],
   "ViSpeak": [
    266.0,
    275.0,
    280.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    272.0,
    280.0
   ]
  }
 },
 {
  "key": "v049",
  "env": "Digital",
  "title": "Slicing an image in Photoshop",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.0,
  "start": 0.0,
  "end": 8.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through slicing this image into a 3x3 grid in Photoshop and exporting the pieces as separate files."
   }
  ],
  "gold": [
   3.0
  ],
  "resp": [
   {
    "t": 3.0,
    "text": "Open the image you want to slice, then go to File > Automate > Crop to create the 3x3 grid.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Now go to File > New to create a new document. Set the width and height to 1000 pixels each, and make sure the resolution is 72 pixels/inch."
     },
     {
      "name": "MMDuet2",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "In Photoshop, click on the \"File\" option in the top left corner of the screen, then click on \"New\" to create a new document. Then, click on the \"Window\" option in the top left corner of the screen, then click on \"Split Window\" to split the screen into three parts. Then, click on the \"Select\" option in the top left corner of the screen, then click on \"All\" to select the entire image. Then, click on the \"Edit\" option in the top left corner of the screen, then click on \"Copy\" to copy the selected image. Then, click on the \"File\" option in the top left corner of the screen, then click on \"New\" to create a new document. Then, click on the \"Edit\" option in the top left corner of the screen, then click on \"Paste\" to paste the copied image into the new document. Then, click on the \"File\" option in the top left corner of the screen, then click on \"Save As\" to save the image as a separate file."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Then the screen switches to a photo editing software interface, where a photo of a castle is being edited."
     },
     {
      "name": "Mage-VL",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 2,
   "MMDuet2": 0,
   "ViSpeak": 2,
   "LiveStar": 5,
   "Mage-VL": 0
  },
  "lanes": {
   "StreamVibe": [
    3.0
   ],
   "JoyAI": [
    0.0,
    5.0
   ],
   "MMDuet2": [],
   "ViSpeak": [
    3.0,
    6.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    2.0,
    3.0,
    8.0
   ],
   "Mage-VL": []
  }
 },
 {
  "key": "v085",
  "env": "Digital",
  "title": "Zotero cleanup: answer, then keep tracking",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 41.0,
  "end": 58.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm reorganizing my Zotero reference library today. Give me a quick summary whenever I finish a key step in setting things up."
   },
   {
    "t": 21.0,
    "text": "Did I turn on automatic sync?"
   },
   {
    "t": 49.0,
    "text": "Which group am I about to delete?"
   }
  ],
  "gold": [
   49.0,
   53.0
  ],
  "resp": [
   {
    "t": 49.0,
    "text": "You're about to delete \"group1\".",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "You're about to delete 'group1'. The confirmation dialog shows the group name and asks if you're sure."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "You are about to delete the group named 'group1'."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "group1"
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Yes, you turned on automatic sync."
     }
    ]
   },
   {
    "t": 53.0,
    "text": "You've deleted the group and returned to the main Zotero Groups page. The deletion is complete, and you're back at the overview screen.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "You've returned to the Zotero Groups page. The 'group1' group is no longer visible, and the page shows a message about what groups can do."
     },
     {
      "name": "MMDuet2",
      "tag": "Premature",
      "color": "E5484D",
      "text": "You are about to delete the group named 'group1'."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "I am about to delete a group."
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Premature",
      "color": "E5484D",
      "text": "Yes, you turned on automatic sync."
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 2,
   "JoyAI": 7,
   "MMDuet2": 1,
   "ViSpeak": 4,
   "LiveStar": 0,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    49.0,
    53.0
   ],
   "JoyAI": [
    44.0,
    48.0,
    49.0,
    50.0,
    52.0,
    53.0,
    55.0
   ],
   "MMDuet2": [
    49.0
   ],
   "ViSpeak": [
    43.0,
    47.0,
    49.0,
    53.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    48.0,
    56.0
   ]
  }
 },
 {
  "key": "v086",
  "env": "Digital",
  "title": "Skyscanner search: answer, then recap",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 6.0,
  "end": 30.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm searching for flights from Paris to Zurich on Skyscanner. Give me a quick recap whenever I finish a main part of the search."
   },
   {
    "t": 14.0,
    "text": "Which Paris airport did I select as my departure point?"
   }
  ],
  "gold": [
   14.0,
   26.0
  ],
  "resp": [
   {
    "t": 14.0,
    "text": "You selected Paris Charles de Gaulle (CDG).",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "You selected Charles de Gaulle (CDG) as your departure airport."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Paris Charles de Gaulle (CDG) was selected as the departure point."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Charles de Gaulle airport"
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The mouse then moves to the upper right corner of the screen, and a white box appears with the black text \"Berlin\"."
     },
     {
      "name": "Mage-VL",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Charles de Gaulle (CDG)"
     }
    ]
   },
   {
    "t": 25.0,
    "text": "You've finished setting up your flight search from Paris to Zurich. The results are now showing, with the first option being a direct flight with Swiss International Air Lines for $158.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Late",
      "color": "E5484D",
      "text": "You selected May 1st, 2024 as your departure date."
     },
     {
      "name": "MMDuet2",
      "tag": "Late",
      "color": "E5484D",
      "text": "The departure date was 22/02/2025 and later changed to 12/05/2025."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "I selected Paris airport as my departure point."
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Late",
      "color": "E5484D",
      "text": "Charles de Gaulle"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 2,
   "JoyAI": 2,
   "MMDuet2": 1,
   "ViSpeak": 9,
   "LiveStar": 2,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    14.0,
    25.0
   ],
   "JoyAI": [
    13.0,
    14.0
   ],
   "MMDuet2": [
    14.0
   ],
   "ViSpeak": [
    7.0,
    11.0,
    14.0,
    15.0,
    18.0,
    20.0,
    23.0,
    26.0,
    29.0
   ],
   "LiveStar": [
    8.0,
    13.0
   ],
   "Mage-VL": [
    8.0,
    16.0
   ]
  }
 },
 {
  "key": "v166",
  "env": "Digital",
  "title": "Element settings, with side questions",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 54.0,
  "end": 67.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm customizing my Element messaging options and testing out markdown formatting. Give me a quick summary whenever I finish a main section."
   },
   {
    "t": 13.0,
    "text": "Are my encryption keys being backed up right now?"
   },
   {
    "t": 41.0,
    "text": "Where can I find Security and Privacy?"
   },
   {
    "t": 62.0,
    "text": "Which room is currently listed under low priority?"
   }
  ],
  "gold": [
   62.0
  ],
  "resp": [
   {
    "t": 62.0,
    "text": "The room labeled 'b-room' is currently listed under low priority.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The room 'low-priority' is listed under low priority."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The room 'b room' is currently listed under low priority."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The room \"UDITA MANDAL\" is currently listed under low priority."
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "None of the choices provided"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 13,
   "MMDuet2": 1,
   "ViSpeak": 5,
   "LiveStar": 0,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    62.0
   ],
   "JoyAI": [
    54.0,
    55.0,
    56.0,
    57.0,
    59.0,
    60.0,
    61.0,
    62.0,
    63.0,
    64.0,
    65.0,
    66.0,
    67.0
   ],
   "MMDuet2": [
    62.0
   ],
   "ViSpeak": [
    57.0,
    59.0,
    62.0,
    64.0,
    66.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    56.0,
    64.0
   ]
  }
 },
 {
  "key": "v153",
  "env": "Digital",
  "title": "Updating a WeKan board, interrupted",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 20.0,
  "end": 33.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm setting up our project boards in WeKan. Let me know what to do next after I finish each step."
   },
   {
    "t": 12.0,
    "text": "What label is currently selected for this card?"
   },
   {
    "t": 28.0,
    "text": "Did I remove the high priority label from the card?"
   }
  ],
  "gold": [
   28.0
  ],
  "resp": [
   {
    "t": 28.0,
    "text": "Yes, you removed the high priority label from the card.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Yes, you removed the 'High Priority' label from the card."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "No, the high priority label is still visible and selected for the card."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "yes"
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Premature",
      "color": "E5484D",
      "text": "None"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 13,
   "MMDuet2": 1,
   "ViSpeak": 5,
   "LiveStar": 0,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    28.0
   ],
   "JoyAI": [
    20.0,
    22.0,
    23.0,
    24.0,
    25.0,
    26.0,
    27.0,
    28.0,
    29.0,
    30.0,
    31.0,
    32.0,
    33.0
   ],
   "MMDuet2": [
    28.0
   ],
   "ViSpeak": [
    22.0,
    26.0,
    28.0,
    30.0,
    33.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    24.0,
    32.0
   ]
  }
 },
 {
  "key": "v128",
  "env": "Digital",
  "title": "Setting up Bitwarden, interrupted",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 30.0,
  "end": 43.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm setting up my Bitwarden vault and generating new passwords. Tell me what to do next as I complete each step."
   },
   {
    "t": 20.0,
    "text": "Which email address is currently signed into Bitwarden?"
   },
   {
    "t": 38.0,
    "text": "Do I have any items currently saved in my vault?"
   }
  ],
  "gold": [
   38.0
  ],
  "resp": [
   {
    "t": 38.0,
    "text": "No, your vault is currently empty.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "No, your vault is empty. You just saved one password, but there aren't any other items yet."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "No, there are no items currently saved in the vault."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "No, there are no items in the vault."
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "None"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 4,
   "MMDuet2": 1,
   "ViSpeak": 1,
   "LiveStar": 0,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    38.0
   ],
   "JoyAI": [
    30.0,
    31.0,
    32.0,
    38.0
   ],
   "MMDuet2": [
    38.0
   ],
   "ViSpeak": [
    38.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    32.0,
    40.0
   ]
  }
 }
];
