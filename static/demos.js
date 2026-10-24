window.DEMOS = [
 {
  "key": "ex_turkey",
  "level": "Explicit",
  "chip": "Explicit · Single event",
  "title": "Tell me when the turkey goes in",
  "speed": 2.0,
  "users": [
   {
    "t": 0.0,
    "text": "Notify me when the chef places the raw turkey into the roasting pan.",
    "update": false
   }
  ],
  "groups": [
   {
    "t": 7.0,
    "ours": "The chef has placed the raw turkey into the roasting pan.",
    "base": [
     {
      "name": "JoyAI",
      "text": "The chef is holding a raw turkey with both hands and placing it into a metal roasting pan, with the turkey's body already resting on the pan's bottom, and the chef's left hand supporting the turkey from below.",
      "tag": "Premature",
      "color": "E5484D"
     },
     {
      "name": "ViSpeak",
      "text": "The chef places the raw turkey into the roasting pan.",
      "tag": "Off-time",
      "color": "E5484D"
     }
    ]
   }
  ],
  "update_label": "User changes the request"
 },
 {
  "key": "d1_chairs",
  "level": "Explicit",
  "chip": "Explicit · Recurring",
  "title": "Counting chairs as they appear",
  "speed": 8.0,
  "users": [
   {
    "t": 0.0,
    "text": "Count the unique chairs and seating furniture pieces in the room as they appear.",
    "update": false
   }
  ],
  "groups": [
   {
    "t": 0.62,
    "ours": "A wooden chair is visible in the bedroom. Total count: 1.",
    "base": [
     {
      "name": "JoyAI",
      "text": "I see 1 unique chair and seating furniture pieces in the video.",
      "tag": "Vague",
      "color": "E3A008"
     },
     {
      "name": "ViSpeak",
      "text": "There are two chairs in the room.",
      "tag": "Vague",
      "color": "E3A008"
     }
    ]
   },
   {
    "t": 12.88,
    "ours": "A black swivel chair is visible in the room. Total count: 3.",
    "base": [
     {
      "name": "JoyAI",
      "text": "I see 1 unique chair and seating furniture pieces in the video.",
      "tag": "Repetitive",
      "color": "E5484D"
     },
     {
      "name": "ViSpeak",
      "text": "There are 3 chairs in the room.",
      "tag": "Vague",
      "color": "E3A008"
     }
    ]
   }
  ],
  "update_label": "User changes the request"
 },
 {
  "key": "ex_brush",
  "level": "Explicit",
  "chip": "Explicit · Recurring",
  "title": "Alert me each time the pop-up opens",
  "speed": 2.0,
  "users": [
   {
    "t": 0.0,
    "text": "Alert me each time the brush preset picker pop-up opens in the options bar.",
    "update": false
   }
  ],
  "groups": [
   {
    "t": 3.0,
    "ours": "The brush preset picker pop-up has opened again.",
    "base": [
     {
      "name": "JoyAI",
      "text": "",
      "tag": "Silent",
      "color": "E5484D"
     },
     {
      "name": "ViSpeak",
      "text": "",
      "tag": "Silent",
      "color": "E5484D"
     }
    ]
   },
   {
    "t": 10.5,
    "ours": "The brush preset picker pop-up has opened for the third time.",
    "base": [
     {
      "name": "JoyAI",
      "text": "",
      "tag": "Silent",
      "color": "E5484D"
     },
     {
      "name": "ViSpeak",
      "text": "The brush preset picker pop-up opens in the options bar.",
      "tag": "Correct",
      "color": "1F9D55"
     }
    ]
   }
  ],
  "update_label": "User changes the request"
 },
 {
  "key": "d2_jamrolls",
  "level": "Implicit",
  "chip": "Implicit · Guidance",
  "title": "Making bread jam rolls",
  "speed": 2.5,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through making these mini bread jam rolls step by step, and warn me if I'm flattening, rolling, or slicing the bread incorrectly.",
    "update": false
   }
  ],
  "groups": [
   {
    "t": 2.8,
    "ours": "Trim off the crusts from the bread slices using a knife before spreading the jam.",
    "base": [
     {
      "name": "JoyAI",
      "text": "He's flattening the bread with his hands, making it thinner and more even.",
      "tag": "Wrong",
      "color": "E5484D"
     },
     {
      "name": "MMDuet2",
      "text": "Hands continue to handle slices of white bread, placing them on a white cutting board with one hand holding a slice and the other adjusting its position, with a plate of additional bread slices in the background.",
      "tag": "Wrong",
      "color": "E5484D"
     }
    ]
   },
   {
    "t": 10.4,
    "ours": "Roll the bread slice tightly from the long edge into a log, keeping the pressure even so it doesn't unroll.",
    "base": [
     {
      "name": "JoyAI",
      "text": "He's spreading the jam evenly, making sure it's well-coated.",
      "tag": "Repetitive",
      "color": "E5484D"
     },
     {
      "name": "MMDuet2",
      "text": "A dark-colored bottle is used to apply a thick, dark purple jam onto a slice of white bread, with the jam spreading evenly across the surface, and a close-up shows the jam's texture and consistency as it is spread; a hand then picks up the jam-covered bread slice, ready for the next step in the recipe.",
      "tag": "Wrong",
      "color": "E5484D"
     }
    ]
   }
  ],
  "update_label": "User changes the request"
 },
 {
  "key": "im_sunscreen",
  "level": "Implicit",
  "chip": "Implicit · Learning",
  "title": "Learning sunscreen technique",
  "speed": 2.5,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through this sunscreen application video, explaining the right coverage techniques and proper amounts to use across different body areas.",
    "update": false
   }
  ],
  "groups": [
   {
    "t": 1.6,
    "ours": "Now that the sunscreen is dispensed, rub it thoroughly between your palms and spread it evenly across your arms to ensure full coverage.",
    "base": [
     {
      "name": "JoyAI",
      "text": "Another child in a red shirt is shown applying sunscreen to their arms, with the camera focusing on the rubbing motion.",
      "tag": "Wrong",
      "color": "E5484D"
     },
     {
      "name": "ViSpeak",
      "text": "The video shows a person applying sunscreen to a child's arm.",
      "tag": "Wrong",
      "color": "E5484D"
     }
    ]
   },
   {
    "t": 10.8,
    "ours": "When applying sunscreen to your face, make sure to cover all exposed skin evenly, including around the nose and ears, to protect against UV exposure.",
    "base": [
     {
      "name": "JoyAI",
      "text": "The child continues applying sunscreen to their face, with the camera capturing the full range of motion.",
      "tag": "Wrong",
      "color": "E5484D"
     },
     {
      "name": "ViSpeak",
      "text": "The video shows a boy applying sunscreen to his face and arms.",
      "tag": "Wrong",
      "color": "E5484D"
     }
    ]
   }
  ],
  "update_label": "User changes the request"
 },
 {
  "key": "d3_grabit",
  "level": "Implicit",
  "chip": "Implicit · Tool use",
  "title": "Calibrating a plot in Grabit",
  "speed": 1.6,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through calibrating this plot in Grabit, and steer me right if I pick the wrong reference points or miskey the axis values.",
    "update": false
   }
  ],
  "groups": [
   {
    "t": 3.12,
    "ours": "Click the maximum value point on the x-axis to set the upper bound for the strain scale.",
    "base": [
     {
      "name": "JoyAI",
      "text": "The instruction says to click on the maximum value of the Y-axis. This will help us set the upper limit for the vertical scale.",
      "tag": "Wrong",
      "color": "E5484D"
     },
     {
      "name": "Mage-VL",
      "text": "Sure, I'd be happy to guide you through the calibration process in Grabit. Let's start by identifying the reference points on the plot. First, we need to click on the origin of the x-axis. This is the point where the x-axis and y-axis intersect, which is at the bottom left corner of the plot. Once you click on this point, a red box will appear",
      "tag": "Wrong",
      "color": "E5484D"
     }
    ]
   },
   {
    "t": 9.38,
    "ours": "Click the maximum value point on the y-axis to set the upper bound for the stress scale.",
    "base": [
     {
      "name": "JoyAI",
      "text": "The Y-axis maximum has been marked again. Now we'll set the X-axis maximum by clicking on the corresponding point.",
      "tag": "Wrong",
      "color": "E5484D"
     },
     {
      "name": "Mage-VL",
      "text": "Sure, I'd be happy to guide you through the calibration process in Grabit. Let's start by identifying the reference points on the plot. The first step is to click on the origin of the x-axis, which is the point where the x-axis and y-axis intersect. This point should be at the coordinates (0,0). Next, we need to click on the maximum value of",
      "tag": "Vague",
      "color": "E3A008"
     }
    ]
   }
  ],
  "update_label": "User changes the request"
 },
 {
  "key": "d4_appstore",
  "level": "Implicit",
  "chip": "Implicit · Mobile",
  "title": "Installing app updates on a phone",
  "speed": 1.0,
  "users": [
   {
    "t": 0.0,
    "text": "Walk me through this phone's app store to find my pending updates, and show me the best way to get them all installed.",
    "update": false
   }
  ],
  "groups": [
   {
    "t": 3.0,
    "ours": "Tap the 'My Apps' icon in the bottom navigation bar to open your app management page.",
    "base": [
     {
      "name": "JoyAI",
      "text": "Now the screen switches to the app store's main page, showing a list of apps with icons and names.",
      "tag": "Wrong",
      "color": "E5484D"
     },
     {
      "name": "MMDuet2",
      "text": "The home screen shows a search bar with '饿了么 - 新人最高领66元红包' and a banner for '下应用 领红包', followed by a list of popular applications with icons, names, and installation buttons labeled '安装'; the top navigation bar includes options like 推荐 (Recommendation), 下应用 (Download Application), 应用榜 (Application Ranking), 福利 (Favor), and 游 (Game).",
      "tag": "Wrong",
      "color": "E5484D"
     }
    ]
   },
   {
    "t": 8.0,
    "ours": "Tap the 'Update All' button at the bottom of the screen to start installing all pending updates at once.",
    "base": [
     {
      "name": "JoyAI",
      "text": "The user taps on an app in the updates list, and the screen shows the app's detail page with version information.",
      "tag": "Wrong",
      "color": "E5484D"
     },
     {
      "name": "MMDuet2",
      "text": "The '应用更新' (App Update) page lists recommended updates including苏宁易购 (129.2 MB, 9.5.210), 携程旅行 (92.7 MB, 8.796), and 荣耀商城 (79.2 MB, 2.5.301), with details about their release dates and descriptions; there is also a '手动更新' (Manual Update) section with a blue button labeled '一键更新 (1.9 GB 2.07 GB)' for downloading and installing the latest version manually.",
      "tag": "Vague",
      "color": "E3A008"
     }
    ]
   }
  ],
  "update_label": "User changes the request"
 },
 {
  "key": "d5_knot",
  "level": "Dynamic",
  "chip": "Dynamic · Revision",
  "title": "Tying a knot as the request changes",
  "speed": 1.75,
  "users": [
   {
    "t": 0.0,
    "text": "Whenever I reach a step that mirrors an earlier one, remind me how it compares to what I did before.",
    "update": false
   },
   {
    "t": 3.43,
    "text": "Stop comparing steps. Going forward, give me a quick progress summary whenever I complete a major step.",
    "update": true
   }
  ],
  "groups": [
   {
    "t": 8.0,
    "ours": "You've finished the second knot and pulled the ropes tight, completing the main knot structure.",
    "base": [
     {
      "name": "ViSpeak",
      "text": "The person is tying a knot in the rope.",
      "tag": "Repetitive",
      "color": "E5484D"
     },
     {
      "name": "MMDuet2",
      "text": "",
      "tag": "Silent",
      "color": "E5484D"
     }
    ]
   },
   {
    "t": 11.43,
    "ours": "The main knot is fully tied and tightened, and you're now inspecting the finished structure.",
    "base": [
     {
      "name": "ViSpeak",
      "text": "",
      "tag": "Degenerate",
      "color": "E5484D"
     },
     {
      "name": "MMDuet2",
      "text": "",
      "tag": "Silent",
      "color": "E5484D"
     }
    ]
   }
  ],
  "update_label": "User changes the request"
 },
 {
  "key": "dy_butterfly",
  "level": "Dynamic",
  "chip": "Dynamic · Composition",
  "title": "Folding a butterfly, request added",
  "speed": 3.0,
  "users": [
   {
    "t": 0.0,
    "text": "As I fold this paper butterfly, please give me a summary of my progress whenever I finish a key stage or complete the project.",
    "update": false
   },
   {
    "t": 0.0,
    "text": "Also, point out any cross-references to previous folds whenever I need to mirror or match a step I did earlier.",
    "update": true
   }
  ],
  "groups": [
   {
    "t": 2.33,
    "ours": "You've completed the initial diagonal fold to form the triangle base. Next, you'll need to fold the bottom corners up to the top point to create the wings.",
    "base": [
     {
      "name": "JoyAI",
      "text": "I notice you're folding the top corner down to the bottom edge, which mirrors the first corner fold you did earlier. This creates the first triangular section of the butterfly.",
      "tag": "Premature",
      "color": "E5484D"
     },
     {
      "name": "ViSpeak",
      "text": "You are folding the paper into a triangle.",
      "tag": "Repetitive",
      "color": "E5484D"
     }
    ]
   },
   {
    "t": 12.0,
    "ours": "The paper butterfly is now complete. You've successfully folded the paper into a butterfly shape, with the wings spread out and the body formed.",
    "base": [
     {
      "name": "JoyAI",
      "text": "You've completed the first wing section by folding the top corner down and then unfolding it to create a crease. This is a key milestone in forming the butterfly's wings.",
      "tag": "Wrong",
      "color": "E5484D"
     },
     {
      "name": "ViSpeak",
      "text": "The person is folding the paper into a butterfly shape.",
      "tag": "Repetitive",
      "color": "E5484D"
     }
    ]
   }
  ],
  "update_label": "User adds a request"
 },
 {
  "key": "dy_helmet",
  "level": "Dynamic",
  "chip": "Dynamic · Interruption",
  "title": "Interrupted by a question, then resuming",
  "speed": 1.5,
  "users": [
   {
    "t": 0.0,
    "text": "Let me know whenever I reach a key milestone while folding this origami samurai helmet.",
    "update": false
   },
   {
    "t": 4.0,
    "text": "What color is the origami paper I'm holding?",
    "update": true
   }
  ],
  "groups": [
   {
    "t": 4.0,
    "ours": "The origami paper is black.",
    "base": [
     {
      "name": "JoyAI",
      "text": "The origami paper you're holding is black.",
      "tag": "Correct",
      "color": "1F9D55"
     },
     {
      "name": "MMDuet2",
      "text": "The origami paper is black.",
      "tag": "Correct",
      "color": "1F9D55"
     }
    ]
   },
   {
    "t": 10.67,
    "ours": "You've completed the main folding steps and the samurai helmet is now fully assembled.",
    "base": [
     {
      "name": "JoyAI",
      "text": "",
      "tag": "Silent",
      "color": "E5484D"
     },
     {
      "name": "MMDuet2",
      "text": "",
      "tag": "Silent",
      "color": "E5484D"
     }
    ]
   }
  ],
  "update_label": "User interrupts with a question"
 }
];
