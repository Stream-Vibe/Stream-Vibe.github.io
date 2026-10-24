window.GALLERY = [
 {
  "key": "g127",
  "scenario": "Egocentric",
  "title": "The moment the coffee button is pressed",
  "level": "Explicit",
  "sub": "Single Event",
  "speed": 1.0,
  "start": 45.0,
  "end": 64.0,
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
   "JoyAI": 1,
   "MMDuet2": 2,
   "ViSpeak": 21,
   "LiveStar": 6,
   "Mage-VL": 12
  },
  "lanes": {
   "StreamVibe": [
    57.0
   ],
   "JoyAI": [],
   "MMDuet2": [
    46.0
   ],
   "ViSpeak": [
    47.0,
    51.0,
    56.0,
    60.0,
    64.0
   ],
   "LiveStar": [
    48.0,
    50.0
   ],
   "Mage-VL": [
    48.0,
    56.0,
    64.0
   ]
  }
 },
 {
  "key": "g128",
  "scenario": "Egocentric",
  "title": "Picking up the red sanding tool",
  "level": "Explicit",
  "sub": "Single Event",
  "speed": 1.0,
  "start": 0.0,
  "end": 18.0,
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
   "JoyAI": 1,
   "MMDuet2": 1,
   "ViSpeak": 24,
   "LiveStar": 13,
   "Mage-VL": 15
  },
  "lanes": {
   "StreamVibe": [
    2.0
   ],
   "JoyAI": [
    8.0
   ],
   "MMDuet2": [
    2.0
   ],
   "ViSpeak": [
    4.0,
    12.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    2.0,
    3.0,
    4.0,
    6.0,
    7.0,
    8.0,
    9.0,
    17.0,
    18.0
   ],
   "Mage-VL": [
    8.0,
    16.0
   ]
  }
 },
 {
  "key": "g126",
  "scenario": "Egocentric",
  "title": "When the skier starts down the slope",
  "level": "Explicit",
  "sub": "Single Event",
  "speed": 1.0,
  "start": 0.0,
  "end": 19.0,
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
   "ViSpeak": 25,
   "LiveStar": 3,
   "Mage-VL": 16
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
    0.0,
    1.0,
    2.0
   ],
   "Mage-VL": [
    8.0,
    16.0
   ]
  }
 },
 {
  "key": "g124",
  "scenario": "Cooking & Everyday",
  "title": "Tell me when the turkey goes in",
  "level": "Explicit",
  "sub": "Single Event",
  "speed": 1.0,
  "start": 6.0,
  "end": 25.0,
  "users": [
   {
    "t": 0.0,
    "text": "Notify me when the chef places the raw turkey into the roasting pan."
   }
  ],
  "gold": [
   18.0
  ],
  "resp": [
   {
    "t": 18.0,
    "text": "The chef has placed the raw turkey into the roasting pan.",
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
      "tag": "Premature",
      "color": "E5484D",
      "text": "The chef places the raw turkey into the roasting pan."
     },
     {
      "name": "LiveStar",
      "tag": "Premature",
      "color": "E5484D",
      "text": "The scene then switches to the kitchen with the white countertop. The man in the white chef's uniform is standing in front of the white refrigerator, holding a glass of oil in his right hand and a glass of water in his left hand. He then pours the oil into the glass of water."
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
   "JoyAI": 1,
   "MMDuet2": 0,
   "ViSpeak": 17,
   "LiveStar": 14,
   "Mage-VL": 18
  },
  "lanes": {
   "StreamVibe": [
    18.0
   ],
   "JoyAI": [
    8.0
   ],
   "MMDuet2": [],
   "ViSpeak": [
    15.0,
    24.0
   ],
   "LiveStar": [
    9.0,
    10.0,
    11.0
   ],
   "Mage-VL": [
    8.0,
    16.0,
    24.0
   ]
  }
 },
 {
  "key": "g132",
  "scenario": "Cooking & Everyday",
  "title": "When he opens the hatchback door",
  "level": "Explicit",
  "sub": "Single Event",
  "speed": 1.0,
  "start": 25.0,
  "end": 46.0,
  "users": [
   {
    "t": 0.0,
    "text": "Notify me when the man opens the door of the silver hatchback."
   }
  ],
  "gold": [
   39.0
  ],
  "resp": [
   {
    "t": 37.0,
    "text": "The man has opened the door of the silver hatchback.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The man in the black short-sleeve shirt is standing beside a silver hatchback, his right hand reaching out to open the car door, with the door handle and part of the car body clearly visible."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The man in the black shirt and dark pants continues to approach the silver Volkswagen Golf, stands beside it, and appears to be preparing to open the car door as he looks at the vehicle."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The man opens the door of the silver hatchback."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The scene then switches to a man in a black shirt and black pants, wearing a black watch on his left wrist, standing in front of a silver car. He then punches the watch, and the screen goes black."
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
   "MMDuet2": 10,
   "ViSpeak": 19,
   "LiveStar": 21,
   "Mage-VL": 11
  },
  "lanes": {
   "StreamVibe": [
    37.0
   ],
   "JoyAI": [
    37.0
   ],
   "MMDuet2": [
    37.0,
    39.0
   ],
   "ViSpeak": [
    27.0,
    39.0
   ],
   "LiveStar": [
    29.0,
    33.0,
    34.0,
    35.0,
    36.0,
    38.0,
    39.0,
    44.0
   ],
   "Mage-VL": [
    40.0
   ]
  }
 },
 {
  "key": "g131",
  "scenario": "Cooking & Everyday",
  "title": "When she asks about the camera",
  "level": "Explicit",
  "sub": "Single Event",
  "speed": 1.0,
  "start": 0.0,
  "end": 18.0,
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
   "JoyAI": 1,
   "MMDuet2": 0,
   "ViSpeak": 11,
   "LiveStar": 8,
   "Mage-VL": 4
  },
  "lanes": {
   "StreamVibe": [
    8.0
   ],
   "JoyAI": [
    14.0
   ],
   "MMDuet2": [],
   "ViSpeak": [
    5.0,
    9.0,
    12.0,
    15.0,
    18.0
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
   "Mage-VL": [
    16.0
   ]
  }
 },
 {
  "key": "g77",
  "scenario": "Office & Web",
  "title": "Calibrating a plot in Grabit",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.25,
  "start": 0.0,
  "end": 41,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through calibrating this plot in Grabit, and steer me right if I pick the wrong reference points or miskey the axis values."
   }
  ],
  "gold": [
   7.0,
   22.0,
   28.0,
   34.0,
   37.0
  ],
  "resp": [
   {
    "t": 7.0,
    "text": "Click the origin point at the bottom-left corner of the graph to set the x-axis reference.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The instruction says to click on the origin of the X-axis. That's where we'll start marking our reference points."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The 'Calibrate' button is highlighted, indicating the start of the calibration process."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The video shows a computer screen with a graph on it. The graph has two axes, one labeled \"Aluminum\" and the other labeled \"Steel.\" The graph shows the relationship between the two variables. The video shows a person clicking on the origin of the x-axis."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Subsequently, the red line on the graph starts to descend, and the blue line starts to rise."
     },
     {
      "name": "Mage-VL",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Sure, I'd be happy to guide you through the calibration process in Grabit. First, you'll need to select the correct reference points on the plot. For the x-axis, you should click on the origin point where the strain axis begins. For the y-axis, you should click on the origin point where the stress axis begins. Once you've selected these points, you'll need to enter"
     }
    ]
   },
   {
    "t": 22.0,
    "text": "Click the maximum value point on the x-axis to set the upper bound for the strain scale.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The instruction says to click on the maximum value of the Y-axis. This will help us set the upper limit for the vertical scale."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "A red box with the text 'Enter Value' appears near the maximum value of the x-axis, indicating where to input the value, with the instruction to click on the maximum value of the x-axis displayed in red text at the bottom of the screen."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The x-axis value of the origin is 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
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
      "text": "Sure, I'd be happy to guide you through the calibration process in Grabit. Let's start by identifying the reference points on the plot. \n\nFirst, we need to click on the origin of the x-axis. This is the point where the x-axis and y-axis intersect, which is at the bottom left corner of the plot. Once you click on this point, a red box will appear"
     }
    ]
   },
   {
    "t": 28.0,
    "text": "The x-axis calibration is complete. Next, click the origin point at the bottom-left corner of the graph to set the y-axis reference.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The instruction says to click on the origin of the Y-axis again. This will help us confirm the lower limit for the vertical scale."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "A red box with the text 'Click on the ORIGIN of y-axis' is prominently displayed, instructing to click on the origin of the y-axis, with the origin marked by an 'I' symbol and the y-axis ranging from 0 to 0.25."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The x-axis value of the origin is 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
     },
     {
      "name": "LiveStar",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "Mage-VL",
      "tag": "Silent",
      "color": "E5484D",
      "text": ""
     }
    ]
   },
   {
    "t": 32.0,
    "text": "Click the maximum value point on the y-axis to set the upper bound for the stress scale.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The Y-axis maximum has been marked again. Now we'll set the X-axis maximum by clicking on the corresponding point."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "A red box with the text 'Click on the MAXIMUM value of y-axis' is prominently displayed, instructing to click on the maximum value of the y-axis, with the y-axis ranging from 0 to 350 and the origin marked by an 'I' symbol."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The x-axis value of the origin is 0.000000, and the y-axis value of the origin is 0.000000. The maximum value of the x-axis is 0.250000, and the maximum value of the y-axis is 0.000000."
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
      "text": "Sure, I'd be happy to guide you through the calibration process in Grabit. Let's start by identifying the reference points on the plot. The first step is to click on the origin of the x-axis, which is the point where the x-axis and y-axis intersect. This point should be at the coordinates (0,0). \n\nNext, we need to click on the maximum value of"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 4,
   "JoyAI": 25,
   "MMDuet2": 8,
   "ViSpeak": 13,
   "LiveStar": 5,
   "Mage-VL": 5
  },
  "lanes": {
   "StreamVibe": [
    7.0,
    22.0,
    28.0,
    32.0
   ],
   "JoyAI": [
    0.0,
    1.0,
    7.0,
    15.0,
    18.0,
    19.0,
    21.0,
    22.0,
    23.0,
    25.0,
    26.0,
    27.0,
    28.0,
    29.0,
    30.0,
    31.0,
    32.0,
    33.0,
    34.0,
    35.0,
    36.0,
    37.0,
    38.0,
    39.0,
    40.0
   ],
   "MMDuet2": [
    6.0,
    8.0,
    18.0,
    23.0,
    29.0,
    33.0,
    36.0,
    39.0
   ],
   "ViSpeak": [
    3.0,
    7.0,
    10.0,
    13.0,
    16.0,
    19.0,
    22.0,
    25.0,
    28.0,
    31.0,
    34.0,
    36.0,
    39.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    2.0,
    4.0,
    7.0
   ],
   "Mage-VL": [
    8.0,
    16.0,
    24.0,
    32.0,
    40.0
   ]
  }
 },
 {
  "key": "g73",
  "scenario": "Office & Web",
  "title": "Customizing a Nextcloud dashboard",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.5,
  "start": 0.0,
  "end": 47.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through customizing my Nextcloud dashboard so I can add the Recommended files and Upcoming tasks widgets, and remove Status and Weather."
   }
  ],
  "gold": [
   4.0,
   16.0,
   28.0,
   39.0
  ],
  "resp": [
   {
    "t": 3.0,
    "text": "The widget menu is open. Click the 'Recommended files' tile to add it to your dashboard.",
    "hit": false,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Then select \"Dashboard\" from the list to open the dashboard editor."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The 'Customize' button is clicked, bringing up an 'Edit widgets' window with options including Status, Weather, Recent activity, Upcoming events, and more, where the user can select or deselect widgets like Recommended files and Upcoming tasks."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "To customize your Nextcloud dashboard, you can follow these steps:\n1. Click on the \"Customize\" button in the top right corner of the screen.\n2. In the \"Customize\" menu, select \"Edit widgets\" from the dropdown menu.\n3. In the \"Edit widgets\" menu, you can drag and drop the widgets you want to add or remove from the dashboard.\n4. To add the \"Recommended files\" and \"Upcoming tasks\" widgets, drag and drop them from the \"Recommended files\" and \"Upcoming tasks\" sections into the dashboard.\n5. To remove the \"Status\" and \"Weather\" widgets, drag and drop them from the dashboard into the \"Recommended files\" and \"Upcoming tasks\" sections.\n6. Save your changes by clicking on the \"Save\" button in the top right corner of the \"Customize\" menu."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The folder is then closed, and the mouse cursor moves to the desktop. The desktop is then opened, revealing a photo of a mountain range. The folder is then opened, revealing a photo of a mountain range."
     },
     {
      "name": "Mage-VL",
      "tag": "Late",
      "color": "E5484D",
      "text": "Sure, I can guide you through that. First, click on the 'Edit' button in the top right corner of your Nextcloud dashboard. Then, select the 'Recommended files' and 'Upcoming tasks' widgets from the list and drag them to the desired position on your dashboard. Next, click on the 'Status' and 'Weather' widgets and drag them to the trash can icon to"
     }
    ]
   },
   {
    "t": 14.0,
    "text": "Now that the Recommended files widget is on your dashboard, click the widget menu again and select 'Upcoming tasks' to add it.",
    "hit": false,
    "base": null
   },
   {
    "t": 16.0,
    "text": "The Upcoming tasks widget is now on your dashboard. To finish, click the widget menu one last time and remove the Status and Weather widgets.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Now that you've added those, let's remove the widgets you don't want."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The 'Edit widgets' window lists various widgets including Status, Weather, Recent activity, Upcoming events, and more, with a cursor hovering over the 'Upcoming tasks' checkbox, indicating the user is about to deselect it."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "To add the Recommended files and Upcoming tasks widgets, click on the \"Edit widgets\" button, then click on the \"Recommended files\" and \"Upcoming tasks\" buttons. To remove Status and Weather, click on the \"Edit widgets\" button, then click on the \"Status\" and \"Weather\" buttons and click the \"Remove\" button."
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
      "text": "Sure, I can guide you through that. First, click on the 'Edit' button in the top right corner of your Nextcloud dashboard. Then, select the 'Recommended files' and 'Upcoming tasks' widgets from the list and drag them to the desired position on your dashboard. Next, click on the 'Status' and 'Weather' widgets and drag them to the trash can icon to"
     }
    ]
   },
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
   "StreamVibe": 4,
   "JoyAI": 36,
   "MMDuet2": 16,
   "ViSpeak": 27,
   "LiveStar": 3,
   "Mage-VL": 4
  },
  "lanes": {
   "StreamVibe": [
    3.0,
    14.0,
    16.0,
    40.0
   ],
   "JoyAI": [
    0.0,
    3.0,
    8.0,
    11.0,
    14.0,
    16.0,
    18.0,
    20.0,
    22.0,
    27.0,
    29.0,
    31.0,
    39.0,
    40.0,
    41.0,
    42.0,
    43.0,
    45.0,
    46.0,
    47.0
   ],
   "MMDuet2": [
    3.0,
    5.0,
    8.0,
    10.0,
    15.0,
    18.0,
    21.0,
    23.0,
    28.0,
    32.0,
    36.0,
    40.0,
    47.0
   ],
   "ViSpeak": [
    4.0,
    8.0,
    11.0,
    14.0,
    17.0,
    19.0,
    22.0,
    25.0,
    27.0,
    29.0,
    31.0,
    33.0,
    35.0,
    37.0,
    39.0,
    41.0,
    43.0,
    45.0,
    47.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    3.0
   ],
   "Mage-VL": [
    8.0,
    32.0
   ]
  }
 },
 {
  "key": "g86",
  "scenario": "Office & Web",
  "title": "Building a to-do table in Word",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.0,
  "start": 0.0,
  "end": 35.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through creating a daily to-do list table in Word, and help me format the headers and adjust the columns."
   }
  ],
  "gold": [
   6.0,
   10.0,
   13.0,
   28.0
  ],
  "resp": [
   {
    "t": 4.0,
    "text": "Now that you've typed the title, go ahead and insert a table to start building your to-do list.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "We're going to create a daily to-do list table in Word."
     },
     {
      "name": "MMDuet2",
      "tag": "Late",
      "color": "E5484D",
      "text": "A table has been inserted into the document, and the 'Table Design' tab is open showing options for header row, first column, total row, last column, banded rows, banded columns, shading, border styles, and border painter; the user is about to select a table style."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "In the video, a person is creating a daily to-do list table in Word. The person first types \"Daily To-Do List\" in the document, then clicks on the \"Table\" option in the toolbar, and finally clicks on the \"Insert Table\" option."
     },
     {
      "name": "LiveStar",
      "tag": "Premature",
      "color": "E5484D",
      "text": "The folder window is opened again, and the folder is closed again."
     },
     {
      "name": "Mage-VL",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "Sure, I can guide you through the process. First, click on the 'Insert' tab and select 'Table' from the options. Choose the number of rows and columns you want for your table. Once the table is inserted, you can format the headers by selecting the header row and applying bold formatting. To adjust the columns, click on the column you want to resize and drag the edge to"
     }
    ]
   },
   {
    "t": 10.0,
    "text": "With the table inserted, type your column headers into the top row.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "First, go to the Insert tab and click on Table."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The user clicks on the 'Insert' tab, selects 'Table', and a dropdown menu appears with options like 'Insert Table', 'Draw Table', and 'Excel Spreadsheet'."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "In the video, a person is creating a daily to-do list table in Word. The person first types \"Daily To-Do List\" in the document, then selects the table option from the toolbar, and finally selects the table style."
     },
     {
      "name": "LiveStar",
      "tag": "Premature",
      "color": "E5484D",
      "text": "The folder window is opened again, and the folder is closed again."
     },
     {
      "name": "Mage-VL",
      "tag": "Late",
      "color": "E5484D",
      "text": "Sure, I'll start by opening the 'Insert' tab and clicking on 'Table'. Then, I'll select the 'Insert Table' option and choose a 3-column table. After inserting the table, I'll click on the 'Design' tab and select a table style. Next, I'll click on the 'Layout' tab and choose 'Distribute Columns' to evenly space the columns"
     }
    ]
   },
   {
    "t": 15.0,
    "text": "Now that your headers are in place, you can adjust the column widths to make the table easier to read.",
    "hit": false,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Select the number of columns and rows you want."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The user selects a table style, resulting in a table with columns labeled 'Tasks', 'Due Dates', and 'Status'; the 'Table Design' tab remains open with options for header row, first column, total row, last column, banded rows, banded columns, shading, border styles, and border painter."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "In the video, a person is creating a daily to-do list table in Word. The person first types \"Daily To-Do List\" in the document, then clicks on the \"Table\" option in the toolbar, and selects the \"Table\" option. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects the \"Table\" option again. The person then clicks on the \"Table\" option again, and selects"
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
      "text": "Sure, I'll start by opening the 'Insert' tab and clicking on 'Table'. Then, I'll select the 'Insert Table' option and choose a 3-column table. After inserting the table, I'll click on the 'Design' tab and select a table style. Next, I'll click on the 'Layout' tab and choose 'Distribute Columns' to evenly space the columns"
     }
    ]
   },
   {
    "t": 19.0,
    "text": "To adjust the column widths, click and drag the vertical lines between the column headers.",
    "hit": false,
    "base": null
   }
  ],
  "counts": {
   "StreamVibe": 4,
   "JoyAI": 63,
   "MMDuet2": 5,
   "ViSpeak": 27,
   "LiveStar": 4,
   "Mage-VL": 10
  },
  "lanes": {
   "StreamVibe": [
    4.0,
    10.0,
    15.0,
    19.0
   ],
   "JoyAI": [
    0.0,
    5.0,
    9.0,
    12.0,
    14.0,
    17.0,
    19.0,
    20.0,
    21.0,
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
    33.0,
    34.0,
    35.0
   ],
   "MMDuet2": [
    9.0,
    11.0,
    14.0,
    16.0,
    20.0
   ],
   "ViSpeak": [
    3.0,
    8.0,
    11.0,
    15.0,
    18.0,
    22.0,
    25.0,
    29.0,
    31.0,
    34.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    2.0,
    3.0
   ],
   "Mage-VL": [
    8.0,
    16.0,
    24.0,
    32.0
   ]
  }
 },
 {
  "key": "g00",
  "scenario": "Office & Web",
  "title": "Excel charts, then the request changes",
  "level": "Dynamic",
  "sub": "Revision",
  "speed": 1.0,
  "start": 44.0,
  "end": 76,
  "users": [
   {
    "t": 0.0,
    "text": "I'm working on analyzing this trajectory data in Excel — let me know if I make any calculation mistakes or select the wrong data ranges for my charts."
   },
   {
    "t": 61.0,
    "text": "Stop catching my calculation mistakes; instead, give me a recap whenever I finish a stage."
   }
  ],
  "gold": [
   56.0,
   69.0
  ],
  "resp": [
   {
    "t": 68.0,
    "text": "You've finished setting up the dual-axis line chart with both datasets plotted.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Premature",
      "color": "E5484D",
      "text": "You've finished building the chart — the line graph is now displayed with your trajectory data plotted."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The user is in the process of changing the chart type, with the 'Chart Tools' menu open showing options like 'Chart Styles', 'Layout', and 'Format', and a graph preview featuring a blue line labeled 'Series1' and a brown line labeled 'Series2' on a grid with numerical values along the axes."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The person is creating a chart in Excel."
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
      "text": "Understood. I'll wait for you to complete each stage and then provide a recap."
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 1,
   "JoyAI": 3,
   "MMDuet2": 7,
   "ViSpeak": 24,
   "LiveStar": 3,
   "Mage-VL": 7
  },
  "lanes": {
   "StreamVibe": [
    68.0
   ],
   "JoyAI": [
    53.0,
    65.0
   ],
   "MMDuet2": [
    54.0,
    56.0,
    64.0,
    67.0
   ],
   "ViSpeak": [
    45.0,
    48.0,
    50.0,
    52.0,
    56.0,
    58.0,
    61.0,
    62.0,
    64.0,
    66.0,
    69.0,
    71.0,
    74.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    48.0,
    56.0,
    64.0,
    72.0,
    75.0
   ]
  }
 },
 {
  "key": "g33",
  "scenario": "Office & Web",
  "title": "Anki setup with interrupting questions",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 2.25,
  "start": 0.0,
  "end": 75,
  "users": [
   {
    "t": 0.0,
    "text": "I'm setting up my flashcards and installing add-ons in Anki today. Only interrupt me when I finish a main part of the setup to give me a quick progress summary."
   },
   {
    "t": 7.0,
    "text": "Which deck's statistics am I currently looking at?"
   },
   {
    "t": 33.0,
    "text": "Which deck am I currently adding this card to?"
   }
  ],
  "gold": [
   7.0,
   12.0,
   33.0,
   55.0,
   72.0
  ],
  "resp": [
   {
    "t": 7.0,
    "text": "You're looking at the \"Default\" deck's statistics.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "You're looking at the 'Default' deck's statistics, which shows 0 cards due today and 0 cards due in the future."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The statistics are for the 'deck/current' deck, which has no cards studied today and no future due reviews."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "You are looking at the statistics of the \"collection\" deck."
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The screen then switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked, and the screen switches to a white window with a white button that says \"Save Game\". The white button is clicked,"
     },
     {
      "name": "Mage-VL",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "default"
     }
    ]
   },
   {
    "t": 26.0,
    "text": "You've finished creating the first flashcard with \"What is\" on the front and \"A\" on the back. The rest of your flashcard setup and add-on installation is still pending.",
    "hit": false,
    "base": null
   },
   {
    "t": 33.0,
    "text": "You're adding it to the \"Brainstorming\" deck.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "You're adding this card to the 'Default' deck, which is the standard deck in Anki."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "I am currently adding this card to the 'Brainstorming' deck."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "You are currently looking at the statistics of the \"Brainstorming\" deck."
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
   "StreamVibe": 3,
   "JoyAI": 5,
   "MMDuet2": 4,
   "ViSpeak": 25,
   "LiveStar": 5,
   "Mage-VL": 8
  },
  "lanes": {
   "StreamVibe": [
    7.0,
    26.0,
    33.0
   ],
   "JoyAI": [
    0.0,
    7.0,
    33.0,
    59.0,
    71.0
   ],
   "MMDuet2": [
    5.0,
    7.0,
    13.0,
    33.0
   ],
   "ViSpeak": [
    4.0,
    7.0,
    8.0,
    11.0,
    16.0,
    19.0,
    23.0,
    26.0,
    30.0,
    33.0,
    35.0,
    37.0,
    39.0,
    42.0,
    44.0,
    46.0,
    49.0,
    51.0,
    53.0,
    56.0,
    58.0,
    62.0,
    65.0,
    69.0,
    72.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    2.0,
    4.0,
    5.0
   ],
   "Mage-VL": [
    8.0,
    16.0,
    32.0,
    40.0,
    48.0,
    64.0,
    72.0,
    74.0
   ]
  }
 },
 {
  "key": "g44",
  "scenario": "Creative & Dev Tools",
  "title": "VS Code setup with quick questions",
  "level": "Dynamic",
  "sub": "Interruption",
  "speed": 1.75,
  "start": 0.0,
  "end": 53.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm setting up a C# .NET console app in VS Code. Give me a quick summary every time I wrap up one of the main setup stages."
   },
   {
    "t": 11.0,
    "text": "Which extension pack did my notes say to install?"
   },
   {
    "t": 37.0,
    "text": "What command should I run next?"
   }
  ],
  "gold": [
   11.0,
   29.0,
   37.0,
   46.0
  ],
  "resp": [
   {
    "t": 11.0,
    "text": "The C# Dev Kit extension pack.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The C# Dev Kit extension pack."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The notes said to install the C# extension pack."
     },
     {
      "name": "ViSpeak",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "The .NET extension pack"
     },
     {
      "name": "LiveStar",
      "tag": "Late",
      "color": "E5484D",
      "text": "The screen then switches to a different application, showing a list of files and directories. The screen displays a line of text: \"run the script\"."
     },
     {
      "name": "Mage-VL",
      "tag": "Premature",
      "color": "E5484D",
      "text": "Sure, I'd be happy to help you with that. Here's a quick summary of the main setup stages for a C# .NET console app in VS Code:\n\n1. **Creating the Project**: You started by creating a new C# .NET console app project in VS Code. This is the initial step where you define the project structure and name.\n\n2. **Installing Required Packages**: Next"
     }
    ]
   },
   {
    "t": 23.0,
    "text": "The C# Dev Kit extension is installed and the project files are visible in the Explorer. The next step is to create a new C# console application.",
    "hit": false,
    "base": null
   },
   {
    "t": 37.0,
    "text": "dotnet new console",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "Run `dotnet restore` to restore the project's dependencies."
     },
     {
      "name": "MMDuet2",
      "tag": "Correct",
      "color": "1F9D55",
      "text": "You should run the dotnet new console command next."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "dotnet run"
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
      "text": "C# extension pack"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 3,
   "JoyAI": 14,
   "MMDuet2": 6,
   "ViSpeak": 27,
   "LiveStar": 4,
   "Mage-VL": 8
  },
  "lanes": {
   "StreamVibe": [
    11.0,
    23.0,
    37.0
   ],
   "JoyAI": [
    0.0,
    11.0,
    30.0,
    36.0,
    37.0,
    40.0,
    43.0,
    47.0,
    51.0
   ],
   "MMDuet2": [
    11.0,
    14.0,
    16.0,
    19.0,
    32.0,
    37.0
   ],
   "ViSpeak": [
    3.0,
    6.0,
    9.0,
    11.0,
    12.0,
    14.0,
    17.0,
    20.0,
    23.0,
    26.0,
    29.0,
    32.0,
    34.0,
    37.0,
    38.0,
    40.0,
    42.0,
    44.0,
    46.0,
    48.0,
    50.0,
    52.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    3.0,
    15.0
   ],
   "Mage-VL": [
    8.0,
    16.0,
    24.0,
    32.0,
    40.0,
    48.0
   ]
  }
 },
 {
  "key": "g72",
  "scenario": "Creative & Dev Tools",
  "title": "Learning Joplin step by step",
  "level": "Implicit",
  "sub": "Tool use",
  "speed": 1.75,
  "start": 0.0,
  "end": 57.0,
  "users": [
   {
    "t": 0.0,
    "text": "I'm new to Joplin, so walk me through finding note statistics, copying the dev mode command, and deleting a note attachment."
   }
  ],
  "gold": [
   0.0,
   19.0,
   35.0,
   50.0
  ],
  "resp": [
   {
    "t": 0.0,
    "text": "To find note statistics, click the 'Statistics' button in the top menu bar.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The video starts with the Joplin desktop app open, showing the main interface with a blank note area."
     },
     {
      "name": "MMDuet2",
      "tag": "Late",
      "color": "E5484D",
      "text": "To find note statistics, click on the Tools menu at the top of the screen and select the Note option."
     },
     {
      "name": "ViSpeak",
      "tag": "Late",
      "color": "E5484D",
      "text": ""
     },
     {
      "name": "LiveStar",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The screen is divided into upper and lower parts. The upper part shows a white interface with a black background. The lower part shows a black interface with a white background."
     },
     {
      "name": "Mage-VL",
      "tag": "Late",
      "color": "E5484D",
      "text": "Sure, I can guide you through these steps. First, to find note statistics, you would click on the 'Statistics' button located in the top menu bar of Joplin. This will open a new window displaying various statistics about your notes, such as the number of notes, tags, and more. Next, to copy the dev mode command, you would click on the 'Dev mode'"
     }
    ]
   },
   {
    "t": 30.0,
    "text": "Click 'Copy command' in the dialog box to copy the dev mode command to your clipboard.",
    "hit": false,
    "base": null
   },
   {
    "t": 50.0,
    "text": "Click 'Delete' in the confirmation dialog to remove the attachment.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "The user clicks the Open in browser button, opening a browser window."
     },
     {
      "name": "MMDuet2",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "A confirmation dialog box titled 'Delete attachment' appears asking to confirm deletion of the file 'Nobody blames you_1497593879_e17_341a8961c0f40b5a0aaw9f629398da.jpg', with 'Delete' and 'Cancel' options, and the cursor is positioned over the 'Delete' button."
     },
     {
      "name": "ViSpeak",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "To find note statistics, click on the \"Note statistics\" option in the top right corner of the screen. To copy the dev mode command, click on the \"Dev tools\" option in the top right corner of the screen. To delete a note attachment, click on the \"Attachment\" option in the top right corner of the screen, then click on the \"Delete\" button next to the attachment you want to delete."
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
      "text": "Sure, I'd be happy to guide you through those steps. First, to find note statistics, you can click on the 'Statistics' button located at the top of the Joplin interface. This will display a summary of your notes, including the number of notes, tags, and other useful information. Next, to copy the dev mode command, you would need to click on the 'Dev"
     }
    ]
   }
  ],
  "counts": {
   "StreamVibe": 3,
   "JoyAI": 41,
   "MMDuet2": 8,
   "ViSpeak": 23,
   "LiveStar": 4,
   "Mage-VL": 5
  },
  "lanes": {
   "StreamVibe": [
    0.0,
    30.0,
    50.0
   ],
   "JoyAI": [
    0.0,
    15.0,
    19.0,
    22.0,
    23.0,
    25.0,
    27.0,
    28.0,
    29.0,
    30.0,
    34.0,
    35.0,
    36.0,
    37.0,
    38.0,
    39.0,
    40.0,
    41.0,
    42.0,
    43.0,
    44.0,
    45.0,
    46.0,
    47.0,
    50.0,
    51.0,
    52.0,
    53.0,
    54.0,
    55.0,
    56.0,
    57.0
   ],
   "MMDuet2": [
    5.0,
    16.0,
    26.0,
    31.0,
    46.0,
    48.0,
    51.0,
    53.0
   ],
   "ViSpeak": [
    7.0,
    11.0,
    14.0,
    17.0,
    20.0,
    23.0,
    26.0,
    29.0,
    31.0,
    34.0,
    38.0,
    41.0,
    43.0,
    45.0,
    48.0,
    50.0,
    52.0,
    54.0,
    56.0
   ],
   "LiveStar": [
    0.0,
    1.0,
    15.0,
    31.0
   ],
   "Mage-VL": [
    8.0,
    16.0,
    24.0,
    32.0,
    56.0
   ]
  }
 },
 {
  "key": "g12",
  "scenario": "Creative & Dev Tools",
  "title": "Photoshop composite, request revised",
  "level": "Dynamic",
  "sub": "Revision",
  "speed": 2.25,
  "start": 42.0,
  "end": 116,
  "users": [
   {
    "t": 0.0,
    "text": "I'm making a soap bubble composite in Photoshop—give me a brief recap of my progress whenever I wrap up a main part of the design."
   },
   {
    "t": 78.0,
    "text": "Hold off on stage summaries from now on — instead, just give me a heads-up whenever I finish a major part of the bubble composite."
   }
  ],
  "gold": [
   54.0,
   112.0
  ],
  "resp": [
   {
    "t": 54.0,
    "text": "The main soap bubble sphere is now fully rendered with its highlights and reflections. You still need to add the background elements and finalize the composite.",
    "hit": true,
    "base": [
     {
      "name": "JoyAI",
      "tag": "Wrong content",
      "color": "E08A1E",
      "text": "You've opened the Gradient Editor to adjust the gradient's color stops. You're adding a new stop and changing its color, which will let you fine-tune the bubble's color transition."
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
      "text": "You are making a soap bubble composite in Photoshop."
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
      "text": "Sure, I'd be happy to help you with that."
     }
    ]
   },
   {
    "t": 73.0,
    "text": "The sky background layer is now loaded. You still need to position it behind the bubble and adjust the layer order to complete the composite.",
    "hit": false,
    "base": null
   }
  ],
  "counts": {
   "StreamVibe": 2,
   "JoyAI": 40,
   "MMDuet2": 1,
   "ViSpeak": 25,
   "LiveStar": 4,
   "Mage-VL": 13
  },
  "lanes": {
   "StreamVibe": [
    54.0,
    73.0
   ],
   "JoyAI": [
    43.0,
    45.0,
    46.0,
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
    67.0,
    68.0,
    69.0,
    70.0,
    71.0,
    72.0,
    73.0,
    74.0,
    75.0,
    76.0,
    77.0,
    104.0
   ],
   "MMDuet2": [
    79.0
   ],
   "ViSpeak": [
    47.0,
    52.0,
    57.0,
    63.0,
    68.0,
    74.0,
    78.0,
    81.0,
    85.0,
    88.0,
    92.0,
    95.0,
    99.0,
    103.0,
    106.0,
    110.0,
    114.0
   ],
   "LiveStar": [],
   "Mage-VL": [
    48.0,
    56.0,
    64.0,
    72.0,
    80.0,
    88.0,
    96.0,
    104.0,
    112.0,
    115.0
   ]
  }
 }
];
