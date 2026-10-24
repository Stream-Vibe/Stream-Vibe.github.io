window.GALLERY = [
 {
  "key": "w019",
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
  "key": "w020",
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
  "key": "w021",
  "env": "Physical",
  "title": "Picking up the red sanding tool",
  "level": "Explicit",
  "sub": "Single Event",
  "speed": 1.0,
  "start": 0.0,
  "end": 7.0,
  "users": [
   {
    "t": 0.0,
    "text": "Notify me when the person picks up the red sanding tool from the workbench."
   }
  ],
  "gold": [
   2.0
  ],
  "resp": [
   {
    "t": 2.0,
    "text": "The person has picked up the red sanding tool from the workbench.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Late",
      "color": "E5484D",
      "text": "The person has just picked up the red sanding tool from the workbench, with both hands gripping the tool and lifting it up."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The person picks up the red sanding tool from the workbench and holds it with both hands."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The person picks up the red sanding tool from the workbench."
     },
     {
      "name": "LiveStar",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The person in the gray T-shirt then takes out a red tool from the toolbox and places it on the ground."
     },
     {
      "name": "Mage-VL",
      "tag": "Late",
      "color": "E5484D",
      "text": "1"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 0,
   "MMDuet2": 1,
   "ViSpeak": 1,
   "LiveStar": 7,
   "Mage-VL": 0
  },
  "lanes": {
   "StreamVibe": [
    2.0
   ],
   "JoyAI": [],
   "MMDuet2": [
    2.0
   ],
   "ViSpeak": [
    4.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    2.0,
    3.0,
    4.0,
    6.0,
    7.0
   ],
   "Mage-VL": []
  }
 },
 {
  "key": "w053",
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
  "key": "w028",
  "env": "Physical",
  "title": "Each time the white mug is picked up",
  "level": "Explicit",
  "sub": "Recurring",
  "speed": 1.0,
  "start": 84.0,
  "end": 99.0,
  "users": [
   {
    "t": 0.0,
    "text": "Alert me each time the person starts holding the white coffee mug."
   }
  ],
  "gold": [
   94.0
  ],
  "resp": [
   {
    "t": 94.0,
    "text": "The person has started holding the white coffee mug.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The person has started holding the white coffee mug."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "A hand reaches out and touches the white coffee mug filled with coffee."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The person starts holding the white coffee mug."
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
      "text": "1"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 1,
   "MMDuet2": 2,
   "ViSpeak": 4,
   "LiveStar": 0,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    94.0
   ],
   "JoyAI": [
    94.0
   ],
   "MMDuet2": [
    95.0,
    99.0
   ],
   "ViSpeak": [
    84.0,
    89.0,
    92.0,
    97.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    88.0,
    96.0
   ]
  }
 },
 {
  "key": "w001",
  "env": "GUI",
  "title": "Styling headings in a Word report",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.0,
  "start": 0.0,
  "end": 15.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through formatting this Word inspection report, and make sure I'm picking the right structural styles for my headings and subheadings."
   }
  ],
  "gold": [
   5.0,
   10.0
  ],
  "resp": [
   {
    "t": 6.0,
    "text": "Select the 'Building Inspection Report' title and apply the Heading 1 style from the Styles gallery to set up your main document structure.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The document is now titled \"Building Inspection Report\" with a clear outline: Introduction, Inspection Methodology, Findings, and Conclusion. This gives us a solid structure to follow."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The title 'Building Inspection Report' is bolded and 12-point Aptos font, and there are numbered lists under the headings 'General Information', 'Exterior Inspection', 'Interior Inspection', and 'Conclusion'."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The heading of the document is \"Building Inspection Report\". The subheading is \"1. General Information\"."
     },
     {
      "name": "LiveStar",
      "tag": "Premature",
      "color": "E5484D",
      "text": "The video begins with a computer screen displaying a word processing software interface."
     },
     {
      "name": "Mage-VL",
      "tag": "Late",
      "color": "E5484D",
      "text": "Certainly! To format your Word document, you can start by selecting the text you want to format. For headings, you can use the 'Heading 1' style, which is typically used for the main title of your document. For subheadings, you can use the 'Heading 2' style, which is used for secondary headings. To apply these styles, simply click on the 'Styles"
     }
    ]
   },
   {
    "t": 10.0,
    "text": "Select Heading 1 from the Styles pane to apply it to the title.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The Styles pane has opened, showing options like Heading 1, Heading 2, and more. We're about to apply a heading style to the title."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "A Styles window pops up showing options like Normal, No Spacing, Heading 1, Heading 2, and Title, with the cursor hovering over the Styles window indicating an intention to change the heading style."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The video shows a Word document with a heading and subheading. The heading is \"Building Inspection Report\" and the subheading is \"1. External Information\"."
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
      "text": "Certainly! To format your Word document, you can start by selecting the text you want to format. For headings, you can use the 'Heading 1' style, which is typically used for the main title of your document. For subheadings, you can use the 'Heading 2' style, which is used for secondary headings. To apply these styles, simply click on the 'Styles"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 2,
   "JoyAI": 6,
   "MMDuet2": 3,
   "ViSpeak": 4,
   "LiveStar": 2,
   "Mage-VL": 1
  },
  "lanes": {
   "StreamVibe": [
    6.0,
    10.0
   ],
   "JoyAI": [
    0.0,
    5.0,
    9.0,
    10.0,
    13.0,
    15.0
   ],
   "MMDuet2": [
    6.0,
    10.0,
    13.0
   ],
   "ViSpeak": [
    6.0,
    9.0,
    12.0,
    15.0
   ],
   "LiveStar": [
    0.0,
    1.0
   ],
   "Mage-VL": [
    8.0
   ]
  }
 },
 {
  "key": "w016",
  "env": "GUI",
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
  "key": "w050",
  "env": "GUI",
  "title": "Shopping for a desk on Amazon",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.0,
  "start": 0.0,
  "end": 8.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through shopping on Amazon for a small adjustable desk and a clamp-on drawer, and check their dimensions to make sure they're compatible."
   }
  ],
  "gold": [
   3.0
  ],
  "resp": [
   {
    "t": 3.0,
    "text": "Search for a small adjustable desk on Amazon.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "I'll start by searching for a small adjustable desk. I'll type 'small adjustable desk' into the search bar and hit enter."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The user types 'adjustable height desk suitable for small spaces' into the search bar, and the results page displays various desks with different designs, prices, and sizes, including a sponsored listing for a standing desk priced at $119.89."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The video shows a person searching for a small adjustable desk and a clamp-on drawer on Amazon. The person clicks on the search bar and types in the keywords \"small adjustable desk\" and \"clamp-on drawer\". The search results show various products that match the search terms. The person then clicks on the \"Filter\" button to narrow down the search results. The person then clicks on the \"Price\" filter and selects the price range. The video ends with the person clicking on the \"Add to Cart\" button to add the selected products to the cart."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Then the screen switches to a computer screen, showing a shopping platform interface. The top of the screen displays the platform's logo and a search bar. Below the search bar are several options, including \"What's new,\" \"Bestsellers,\" \"Deals,\" \"Wish list,\" \"My account,\" and \"Help.\" The main part of the screen shows a selection of products, including shoes, headphones, and other items."
     },
     {
      "name": "Mage-VL",
      "tag": "Late",
      "color": "E5484D",
      "text": "I have navigated to the Amazon website and searched for 'small adjustable desk' and 'clamp-on drawer'. The search results show various products, including a small adjustable desk and a clamp-on drawer. I have checked the dimensions of these items to ensure they are compatible."
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 3,
   "MMDuet2": 2,
   "ViSpeak": 2,
   "LiveStar": 2,
   "Mage-VL": 1
  },
  "lanes": {
   "StreamVibe": [
    3.0
   ],
   "JoyAI": [
    0.0,
    3.0,
    6.0
   ],
   "MMDuet2": [
    5.0,
    7.0
   ],
   "ViSpeak": [
    4.0,
    7.0
   ],
   "LiveStar": [
    0.0,
    3.0
   ],
   "Mage-VL": [
    8.0
   ]
  }
 },
 {
  "key": "w052",
  "env": "GUI",
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
  "key": "w007",
  "env": "GUI",
  "title": "Exporting a video in Photoshop",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.0,
  "start": 40.0,
  "end": 55.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through editing this video clip in Photoshop, from adjusting the playback speed and lighting to finding the right render settings to export it."
   }
  ],
  "gold": [
   50.0
  ],
  "resp": [
   {
    "t": 50.0,
    "text": "In the Export Video dialog, select your desired format and quality settings, then click Export to save the final video.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The user selects a filter from the filter panel, preparing to apply it to the video."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The user navigates to the 'File' menu, selects 'Export', and then clicks on 'Render Video...' from the dropdown menu, with the video track displaying a mountainous landscape with green slopes and misty clouds."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The video shows a person using Photoshop to edit a video. The person first clicks on the \"File\" option, then clicks on the \"Open\" option, then clicks on the \"Video\" option, then clicks on the \"Open for Editing\" option, then clicks on the \"H.264\" option, then clicks on the \"Custom\" option, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks on the \"Custom\" option again, then clicks"
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
      "text": "Sure, I can walk you through the process of editing this video clip in Photoshop. First, you would start by adjusting the playback speed and lighting of the video. This can be done by selecting the video layer in the timeline and using the playback controls to preview the video. You can then adjust the speed of the video by clicking on the speed icon in the timeline and selecting a new speed. To"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 4,
   "MMDuet2": 2,
   "ViSpeak": 8,
   "LiveStar": 0,
   "Mage-VL": 1
  },
  "lanes": {
   "StreamVibe": [
    50.0
   ],
   "JoyAI": [
    45.0,
    48.0,
    50.0,
    52.0
   ],
   "MMDuet2": [
    49.0,
    51.0
   ],
   "ViSpeak": [
    40.0,
    42.0,
    44.0,
    46.0,
    48.0,
    50.0,
    52.0,
    54.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    40.0
   ]
  }
 },
 {
  "key": "w006",
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
  "key": "w038",
  "env": "Physical",
  "title": "Cream cheese toast, interrupted",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 38.0,
  "end": 51.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm making some cream cheese toast. Walk me through the steps as I prepare it."
   },
   {
    "t": 46.0,
    "text": "Is the toaster currently on?"
   }
  ],
  "gold": [
   46.0
  ],
  "resp": [
   {
    "t": 46.0,
    "text": "Yes, the red light on the toaster is on.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Yes, the toaster is on and toasting your bread. You can see the red light indicating it's working."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Yes, the toaster is currently on with a red light illuminated."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Yes, the toaster is on."
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Yes, the toaster is currently on."
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 2,
   "MMDuet2": 1,
   "ViSpeak": 2,
   "LiveStar": 0,
   "Mage-VL": 2
  },
  "lanes": {
   "StreamVibe": [
    46.0
   ],
   "JoyAI": [
    39.0,
    46.0
   ],
   "MMDuet2": [
    46.0
   ],
   "ViSpeak": [
    44.0,
    47.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    40.0,
    48.0
   ]
  }
 },
 {
  "key": "w043",
  "env": "Physical",
  "title": "Brewing espresso, interrupted",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.0,
  "start": 26.0,
  "end": 39.0,
  "users": [
   {
    "t": 0.0,
    "text": "Please guide me to the next step whenever I finish a stage in brewing espresso."
   },
   {
    "t": 34.0,
    "text": "What color are the cups placed under the coffee spout?"
   }
  ],
  "gold": [
   34.0
  ],
  "resp": [
   {
    "t": 34.0,
    "text": "The cups placed under the coffee spout are yellow and red.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The cups are yellow and red."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The cups are yellow and red."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The cups are yellow and red."
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
   "JoyAI": 5,
   "MMDuet2": 1,
   "ViSpeak": 3,
   "LiveStar": 0,
   "Mage-VL": 1
  },
  "lanes": {
   "StreamVibe": [
    34.0
   ],
   "JoyAI": [
    26.0,
    30.0,
    31.0,
    33.0,
    34.0
   ],
   "MMDuet2": [
    34.0
   ],
   "ViSpeak": [
    30.0,
    34.0,
    37.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    32.0
   ]
  }
 },
 {
  "key": "w002",
  "env": "GUI",
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
  "key": "w003",
  "env": "GUI",
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
 }
];
