var locations = [
  { name: "Manor Entrance", image: "ManorEntrance.jpg", intro: "RobertRichmanIntro" },
  { name: "Manor Corridor", image: "ManorCorridor.jpg", intro: "" },
  { name: "Murder Room", image: "MurderRoom.jpg", intro: "DetectiveMurderRoom" },
  { name: "Guest Bedroom", image: "GuestBedroom.jpg", intro: "DetectiveGuestBedroom" },
  { name: "Manor Office", image: "ManorOffice.jpg", intro: "" },
  { name: "Apartment Reception", image: "ApartmentReception.jpg", intro: "DetectiveApartmentReception" },
  { name: "Apartment", image: "Apartment.jpg", intro: "" },
  { name: "Interrogation Room", image: "InterrogationRoom.jpg", intro: "" },
  { name: "Detectives Office", image: "DetectivesOffice.jpg", intro: "DetectiveSolve" },
];

const evidenceList = [
  {
	location: "",
    name: 'Coranors Report',
    description: 'Victim died at midnight due to asphyxiation.',
	img: "",
    collected: true,
	x: 0,
	y: 0,
	w: 0,
	h: 0,
  },
  {
	location: "",
    name: 'Background Checks',
    description: 'Elizabeth Vakers: The victim. Step daughter of Robert Richman. Hasnt had to work a day in her life thanks to her step dad. No previous run ins with the law. \n\n Jack Tassel: Been in and out of prison multiple times and various violent offenses. Recently split up with the victim. \n\n Sara Slywood: Victims best friend. No criminal record.  \n\n Robert Richman: Wealthy buisnessman. Bought the mansion a few years back but repairs have slowed considerably. Rumours are hes running out of cash.',
	img: "",
    collected: true,
	x: 0,
	y: 0,
	w: 0,
	h: 0,
  },
  {
	location: "Manor Entrance",
    name: 'Bootprint Outside',
    description: 'A footprint found near the scafolding leading to the floor of the victims bedroom. Large in size, probably a males boot.',
	img: "Bootprint.png",
    collected: false,
	x: 50,
	y: 800,
	w: 50,
	h: 50,
  },
  {
	location: "Murder Room",
    name: 'Pillow',
    description: 'A black smudge is found on the cushion used to smother the victim. The cushion matches those of other cushions in the manor.',
	img: "Pillow.png",
    collected: false,
	x: 480,
	y: 375,
	w: 80,
	h: 40,
  },
  {
	location: "Murder Room",
    name: 'Bootprint Bedroom',
    description: 'A footprint found near the scene of the crime. Large in size, probably a males boot.',
	img: "Bootprint.png",
    collected: false,
	x: 150,
	y: 750,
	w: 150,
	h: 150,
  },
  {
	location: "Murder Room",
    name: 'Hair clump',
    description: 'A clump of hair found near the victim. Doesnt match the victims hair. Its long and black.',
	img: "HairClump.png",
    collected: false,
	x: 425,
	y: 470,
	w: 50,
	h: 50,
  },
  {
	location: "Murder Room",
    name: 'Diary',
    description: 'The victims Diary. Contains several interesting entries on her ex, her best friend, and her step father. \n She notes how her ex got into an argument with her the night before her death. She doesnt seem to be scared of her ex though in any entry.  \n She notes how her best friend is becoming more distant but she cant understand why. \n Theres many sections about how annoying her step dad is, always whining about money and what shes bought. ',
	img: "Diary.png",
    collected: false,
	x: 250,
	y: 285,
	w: 50,
	h: 50,
  },
  {
	location: "Guest Bedroom",
    name: 'Saras Phone',
    description: 'Sara Slywoods phone. The call log the day of the murder is: \n 6:30am Robert Richman \n 9:12am Lizzy \n 3:34pm Lizzy \n 8:43pm Robert Richman \n 11:33pm Robert Richman \n 12:49pm Robert Richman',
	img: "CellPhone.png",
    collected: false,
	x: 30,
	y: 510,
	w: 50,
	h: 50,
  },
  {
	location: "Manor Office",
    name: 'Roberts Laptop',
    description: 'Various emails of note. One is of a recent life insurance policy taken out for his family, including his step daughter. \n Another shows how his buisness is leaking money and has been for a few years now.',
	img: "laptop.png",
    collected: false,
	x: 250,
	y: 450,
	w: 150,
	h: 150,
  },
  {
	location: "Apartment Reception",
    name: 'Apartment Security Footage',
    description: 'Jack is seen entering his apartment at 5:47pm on the day of the murder. He is next seen leaving at 6:35am the day after the murder.',
	img: "invisible.png",
    collected: false,
	x: 600,
	y: 300,
	w: 200,
	h: 200,
  },
];

const infoList = [
  {
	  location: "Manor Entrance",
	  text: "The Manor still carries a sense of power and importance despite its need for renevations.",
	  x: 400,
	  y: 300,
	  w: 200,
	  h: 500,
  },
  {
	  location: "Manor Entrance",
	  text: "Workers must be in and out here all the time. I wonder if they work weekends.",
	  x: 700,
	  y: 600,
	  w: 150,
	  h: 200,
  },
  {
	  location: "Manor Entrance",
	  text: "This scafolding leads up to an empty room next to the bedroom where the murder took place.",
	  x: 20,
	  y: 500,
	  w: 250,
	  h: 250,
  },
  {
	  location: "Manor Corridor",
	  text: "The door to the victims bedroom. Nothing seems a miss.",
	  x: 100,
	  y: 250,
	  w: 150,
	  h: 450,
  },
  {
	  location: "Manor Corridor",
	  text: "Down this corridor leads to a room with scafolding and an open window.",
	  x: 350,
	  y: 300,
	  w: 200,
	  h: 250,
  },
  {
	  location: "Manor Corridor",
	  text: "The door to Sara Slywoods room.",
	  x: 700,
	  y: 250,
	  w: 150,
	  h: 450,
  },
  {
	  location: "Murder Room",
	  text: "The victim appears to have been sufacated by that pillow.",
	  x: 500,
	  y: 450,
	  w: 110,
	  h: 250,
  },
  {
	  location: "Guest Bedroom",
	  text: "Nice looking room, nothing looks too amiss.",
	  x: 500,
	  y: 350,
	  w: 310,
	  h: 350,
  },
  {
	  location: "Manor Office",
	  text: "Strangley placed seat. Reminds me of a few job interviews gone wrong. [shivers]",
	  x: 540,
	  y: 430,
	  w: 200,
	  h: 200,
  },
  {
	  location: "Apartment",
	  text: "Nice view, Jacks room is on the 25th floor. The only way in or out of the building is through the reception.",
	  x: 20,
	  y: 200,
	  w: 250,
	  h: 550,
  },
]

const charactersList = [
	{
		name: 'Detective',
		description: 'The lead detective',
		img: "Detective.png",
		dialogs: [],
	},
	{
		name: 'Jack Tassel',
		description: 'The victims boyfriend with a history of violent behavior',
		img: "JackTussel.png",
		dialogs: ["JackTasselDayOfCrime", "JackTasselKnewVictim","JackTasselBootprintBedroom", "JackTasselDiary",],
	},
	{
		name: 'Sara Slywood',
		description: 'The victim’s best friend who had a falling out with the victim',
		img: "SaraSlywood.png",
		dialogs: ["SaraSlywoodDayOfCrime", "SaraSlywoodKnewVictim", "SaraSlywoodPhoneLog"],
	},
	{
		name: 'Robert Richman',
		description: 'The new owner of the mansion',
		img: "RobertRichman.png",
		dialogs: ["RobertRichmanDayOfCrime", "RobertRichmanKnewVictim", "RobertRichmanMoneyIssues", "RobertRichmanPhoneLog",],
	},
	{
		name: 'Witness A',
		description: 'A neighbor who heard a loud argument coming from the victim’s home the night of the murder',
		img: "WitnessA.png",
		dialogs: ["WitnessASeeDayOfMurder", "WitnessASeeDayBeforeMurder"],
	},
];

const conversations = {
	
DetectiveApartmentReception : {
  question: "",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "This is where Jack Tassel lives. Looks a nice place, I should ask that receptionist if she has any security footage.",
  },
  ]
},

DetectiveSolve : {
  question: "",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "I need to work out who did it. Once I hit solve theres no going back.",
  },
  ]
},
	
DetectiveGuestBedroom : {
  question: "",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "This is the guest bedroom where the victims best friend was staying on the night of the murder.",
  },
  {
	  speaker: "Detective",
	  text: "I should carefully check the area.",
  },
  ]
},

DetectiveMurderRoom : {
  question: "",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "The room where elizabeth was murdered. There has to be some evidence the killer unwittingly left.",
  },
  ]
},
	
JackTasselDayOfCrime : {
  question: "Whereabouts on the day of the crime?",
  evidence: "",
  dialog: [
  {
	  speaker: "Jack Tassel",
	  text: "What do you want pig?",
  },
  {
	  speaker: "Detective",
	  text: "I want you to tell me your whereabouts on the day of the crime",
  },
  {
	  speaker: "Jack Tassel",
	  text: "I was home all afternoon.",
  },
  {
	  speaker: "Detective",
	  text: "All afternoon? Got an alabi?",
  },
  {
	  speaker: "Jack Tassel",
	  text: "Yeah, me!",
  },
  {
	  speaker: "Detective",
	  text: "You sure you didn't nip to the shop or anything?",
  },
  {
	  speaker: "Jack Tassel",
	  text: "Like I said, I stayed in all day",
  },
  ]
},

JackTasselKnewVictim : {
  question: "Relation to victim?",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "What was your relation to the victim?",
  },
  {
	  speaker: "Jack Tassel",
	  text: "My ex? So?! Don't mean I did nothin'!",
  },
  {
	  speaker: "Detective",
	  text: "You break up on good terms?",
  },
  {
	  speaker: "Jack Tassel",
	  text: "Sure, why not.",
  },
  ]
},

JackTasselDiary : {
  question: "Victims Diary?",
  evidence: "Diary",
  dialog: [
  {
	  speaker: "Detective",
	  text: "It seems you had quite the argument with the victim the night before the murder. Odd timing dont you think?",
  },
  {
	  speaker: "Jack Tassel",
	  text: "Yeah I had a small disagreement with her. But that was that, and I never saw her again afterwards!",
  },
  {
	  speaker: "Detective",
	  text: "I think you did see her again. I think she told you something then that made you so angry you would kill.",
  },
  {
	  speaker: "Jack Tassel",
	  text: "Shut up! You don't know shit! I aint talkin!",
  },
  ]
},

JackTasselBootprintBedroom : {
  question: "Bootprint in bedroom?",
  evidence: "Bootprint Bedroom",
  dialog: [
  {
	  speaker: "Detective",
	  text: "What were you doing in Elizabeths bedroom on the night on the murder?",
  },
  {
	  speaker: "Jack Tassel",
	  text: "What!? I wasnt doing anything cause I wasnt there!",
  },
  {
	  speaker: "Detective",
	  text: "Then why was a muddy boot print that is an exact match for your boots, found in the victims bedroom?",
  },
  {
	  speaker: "Jack Tassel",
	  text: "WHA---?! That's impossible! You're lying!!",
  },
  {
	  speaker: "Jack Tassel",
	  text: "No! You're tryna set me up aint ya!!",
  },
  {
	  speaker: "Detective",
	  text: "No, I am not. We have the proof sitting in the lab.",
  },
  {
	  speaker: "Jack Tassel",
	  text: "You don't have shit! I ain't talking about this no more.",
  },
  ]
},

SaraSlywoodDayOfCrime : {
  question: "Whereabouts on the day of the crime?",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "I'm sorry miss but may I ask you a few questions",
  },
  {
	  speaker: "Sara Slywood",
	  text: "You may detective, I'll answer as best as I can.",
  },
  {
	  speaker: "Detective",
	  text: "Where were you on the day of the crime?",
  },
  {
	  speaker: "Sara Slywood",
	  text: "Well I started the day off running a couple of errands before going shopping with elizabeth at noon. We went to Glitz Mall to look for some new clothes.",
  },
  {
	  speaker: "Detective",
	  text: "Glitz Mall? I'd love to shop there, just can't on my salary. You must be well off, if you don't mind me saying",
  },
  {
	  speaker: "Sara Slywood",
	  text: "Well I ... I only really go there when I'm with Lizzy. Err... anyway, we got food at the Glitz Restaurant around 4pm.",
  },
  {
	  speaker: "Sara Slywood",
	  text: "We got home around 6:30 - 7 oclock. Actually now that I think about... no it's probably nothing.",
  },
  {
	  speaker: "Detective",
	  text: "No please, I'd like to hear every detail.",
  },
  {
	  speaker: "Sara Slywood",
	  text: "Well I ... I thought I saw Jack Tassels car one street down from the mansion, however I didn't get a great view so didn't really mention it to Lizzy.",
  },
  {
	  speaker: "Sara Slywood",
	  text: "Besides I didn't want to upset her. You know he's her ex and has been quite violent in the past. He's struck Lizy multiple times and threated to kill her, she never reported it though out of fear I guess. He's been in and out prison several times.",
  },
  {
	  speaker: "Sara Slywood",
	  text: "I didn't mention it at the time because I didn't want to upset Liz.",
  },
  {
	  speaker: "Sara Slywood",
	  text: "Anyway we both went to our seperate rooms and spent the rest of the night there. I was asleep by 10pm. I slept soundly through the night and when I got up the next day I went to Lizys room and-- and-- oh god!",
  },
  {
	  speaker: "Detective",
	  text: "You slept right through and didn't hear anything at all?",
  },
  {
	  speaker: "Sara Slywood",
	  text: "I'm a deep sleeper detective. Anyway I called the police right away, must have been around 6:30am",
  },
  ]
},

SaraSlywoodKnewVictim : {
  question: "Relation to victim?",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "What was your relation to the victim?",
  },
  {
	  speaker: "Sara Slywood",
	  text: "We were... [wipes eyes] ... the bestest of best friends. Ever since we were little we did everything together! I just ... [wipes tissue on face] ... can't believe she's gone!",
  },
  {
	  speaker: "Detective",
	  text: "Ever had any fallings out?",
  },
  {
	  speaker: "Sara Slywood",
	  text: "Oh heavens no! We were peas in a pod.",
  },
  ]
},

SaraSlywoodPhoneLog : {
  question: "Phone log?",
  evidence: "Saras Phone",
  dialog: [
  {
	  speaker: "Detective",
	  text: "What was your relation to Robert Richman?",
  },
  {
	  speaker: "Sara Slywood",
	  text: "Robert Richman? Lizzys dad? I dont know him all that well but hes always been nice when I have talked to him.",
  },
  {
	  speaker: "Detective",
	  text: "You talked to him quite a lot on the night of the murder didn't you?",
  },
  {
	  speaker: "Sara Slywood",
	  text: "Wh--what do you mean?!",
  },
  {
	  speaker: "Detective",
	  text: "You're phone log, shows a lot of calls between you and him throughout the day.",
  },
  {
	  speaker: "Sara Slywood",
	  text: "You have me phone! I was wandering were I left it. Well he was just phoning me to check up on his daughter, you know hes very protective of her.",
  },
  {
	  speaker: "Detective",
	  text: "Why would he phone you in the middle of the night? Besides werent you sleeping?",
  },
  {
	  speaker: "Sara Slywood",
	  text: "Like I say, hes very protective. I must have just answered the phone and then went right back to sleep.",
  },
  {
	  speaker: "Sara Slywood",
	  text: "I need a break detective. [Wipes tissue on face] Well have to continue this conversation some other time.",
  },
  ]
},

RobertRichmanIntro  : {
  question: "",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "A young woman was found sufficated to death by her best friend in the early hours of the morning.",
  },
  {
	  speaker: "Detective",
	  text: "She was found dead in her bedroom of the mansion she lived in.",
  },
  {
	  speaker: "Detective",
	  text: "Its up to me to solve this case.",
  },
  {
	  speaker: "Detective",
	  text: "...",
  },
  {
	  speaker: "Robert Richman",
	  text: "You're the Detective I assume?",
  },
  {
	  speaker: "Detective",
	  text: "Yes I am the lead investigator on this case.",
  },
  {
	  speaker: "Robert Richman",
	  text: "I trust they have sent there best, or will I have to hire my own detective?",
  },
  {
	  speaker: "Detective",
	  text: "You're free to do whatever you want, but rest assured, I am commited to solving this case, and whoever is responsible will be brought to justice.",
  },
  {
	  speaker: "Robert Richman",
	  text: "They better be detective, or I may have to raise questions about your fitness to do your job to my friends at the police department.",
  },
  {
	  speaker: "Robert Richman",
	  text: "Feel free to peruse the mansion freely. I have suspended the renovations until after the investigation is complete. Good day.",
  },
  ]
},

RobertRichmanDayOfCrime  : {
  question: "Day of the crime?",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "Where were you on the night of the murder?",
  },
  {
	  speaker: "Robert Richman",
	  text: "I was out of the country doing buisness meetings.",
  },
  {
	  speaker: "Detective",
	  text: "You have alibis for that?",
  },
  {
	  speaker: "Robert Richman",
	  text: "Of course.",
  },
  ]
},

RobertRichmanKnewVictim  : {
  question: "Relation to victim?",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "What was your relation to the victim?",
  },
  {
	  speaker: "Robert Richman",
	  text: "She was my late wifes daughter.",
  },
  {
	  speaker: "Detective",
	  text: "Late wife?",
  },
  {
	  speaker: "Robert Richman",
	  text: "Yes detective, she died in a trageic skiing acident and no I dont want to talk about it. Had enough police grill me over that for a lifetime.",
  },
  {
	  speaker: "Detective",
	  text: "It doesn't sound to me like there is much affection between you and your step daughter.",
  },
  {
	  speaker: "Robert Richman",
	  text: "Affection! I've given that girl everything shes ever had! And youre going to talk to me about affection!",
  },
  {
	  speaker: "Detective",
	  text: "Affection is different to money.",
  },
  {
	  speaker: "Robert Richman",
	  text: "I've had enough of this line of question detective. Do I need to get my lawyer?",
  },
  {
	  speaker: "Detective",
	  text: "No that's fine. We will talk about something else.",
  },
  ]
},

RobertRichmanMoneyIssues : {
  question: "Money Issues?",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "My background checks indicate you have been strugling with your finances lately. Is that true?",
  },
  {
	  speaker: "Robert Richman",
	  text: "Who told you that! My finances are private!",
  },
  {
	  speaker: "Detective",
	  text: "One of your buisnesses went under and since then you have been living in this old mansion with repairs taking years. You would think a wealthy man would be able to renovate this place in months.",
  },
  {
	  speaker: "Robert Richman",
	  text: "My finances are doing just fine! This is nothing to do with the murder case!",
  },
  ]
},

RobertRichmanPhoneLog : {
  question: "Phone calls?",
  evidence: "Saras Phone",
  dialog: [
  {
	  speaker: "Detective",
	  text: "What is your relationship with Sara Slywood?",
  },
  {
	  speaker: "Robert Richman",
	  text: "Sara Slywood? Elizabeths friend I think. I dont know her too well.",
  },
  {
	  speaker: "Detective",
	  text: "If you didn't know her so well then why have you called her 5 times the day of the murder?",
  },
  {
	  speaker: "Robert Richman",
	  text: "I-- err -- Ahh yes, I remember. I just -- err, needed some errands around the house taking care of, thats all.",
  },
  {
	  speaker: "Detective",
	  text: "Errands around the house? And what errand requires a call at gone midnight?",
  },
  {
	  speaker: "Robert Richman",
	  text: "I-- err -- needed something emailing to me. I was in a buisness meeting in another time zone you see. I grow tired of these questions detective. Direct your energy towards that voilent thug of an ex boyfriend. Its obvious hes the one who did it.",
  },
  ]
},

WitnessASeeDayOfMurder : {
  question: "Day of the murder?",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "What did you see or hear on the day of the murder?",
  },
  {
	  speaker: "Witness A",
	  text: "Well let me think for a minute...",
  },
  {
	  speaker: "Detective",
	  text: "[1 minute later] ... err ... miss?",
  },
  {
	  speaker: "Witness A",
	  text: "What? Oh yes... the day of the murder.",
  },
  {
	  speaker: "Witness A",
	  text: "I started the day off watching my favorite show, the gumblies, it was on all the time when I was a child you know. It start the famous actress ...",
  },
  {
	  speaker: "Witness A",
	  text: "[10 minutes later]",
  },
  {
	  speaker: "Witness A",
	  text: "... and then I put the phone down on her. These young uns need to learn some manors aye detective?",
  },
  {
	  speaker: "Detective",
	  text: "[ZZZZZ] ... What? ... Oh yeah, so could you tell me if you saw anything in or around the mansion after say 6pm yesterday?",
  },
  {
	  speaker: "Witness A",
	  text: "I saw that young madem returning with her miserable looking goul of a friend. Why you would want to paint your face white like that is beyond me.",
  },
  {
	  speaker: "Witness A",
	  text: "She almost scared me to death when I saw her ghost like face staring out of the window at me in the middle of the night.",
  },
  {
	  speaker: "Detective",
	  text: "Sorry what? When did you see her looking out of the window?",
  },
  {
	  speaker: "Witness A",
	  text: "Must have been just before midnight. I'd just finished watching Late night live with my favorite host, John Baringor. Oh hes so wonderful, that white suit that matches his immaculate hair, those blue green eyes---",
  },
  {
	  speaker: "Detective",
	  text: "Okay miss that's quite enough. Thank you. ",
  },
  ]
},

WitnessASeeDayBeforeMurder : {
  question: "Day before murder?",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "What did you see or hear on the days leading up to the murder?",
  },
  {
	  speaker: "Witness A",
	  text: "I've seen many things with these old eyes detective. And one thing I wish I didn't see was that thugish brute wandering around my neibourhood.",
  },
  {
	  speaker: "Detective",
	  text: "Thugish brute?",
  },
  {
	  speaker: "Witness A",
	  text: "Yeah, hes always wandering round here shouting at that poor miss Elizabeth, god rest her soul. Why just the other night he was ranting and raving at her.",
  },
  {
	  speaker: "Witness A",
	  text: "You know Ive heard hes been to prison many times over. People like him are a disgrace. Back in my day we had proper justice. The police wouldn't be afraid to get the hands dirty.",
  },
  {
	  speaker: "Witness A",
	  text: "It's like I used to say to Tabbatha, criminals are ...",
  },
  {
	  speaker: "Witness A",
	  text: "[10 minutes later] ...and I put the phone down on her and we never spoke again! Good riddance I say. That reminds me --",
  },
  {
	  speaker: "Detective",
	  text: "---Thank you miss. You've been a big help.",
  },
  ]
},

CaseSolved : {
  question: "",
  evidence: "",
  dialog: [
  {
	  speaker: "Detective",
	  text: "Robert Richman, you are being arrested for your involvement in the murder of Elizabeth Vakers.",
  },
  {
	  speaker: "Detective",
	  text: "Anything you say may be held against you in court.",
  },
  {
	  speaker: "Robert Richman",
	  text: "WHAT IN GODS NAME?! I'LL HAVE YOUR BADGE! UNDER WHAT CHARGE!?",
  },
  {
	  speaker: "Detective",
	  text: "Paying for the murder of your step daughter.",
  },
  {
	  speaker: "Robert Richman",
	  text: "I'll have the best lawyers on this! You'll see!",
  },
  {
	  speaker: "Detective",
	  text: "Sara Slywood, you are under arrest for the murder of Elizabeth Vakers. Do you have anything to say?",
  },
  {
	  speaker: "Sara Slywood",
	  text: "I--I didn't do it! Please detective you have to believe me!!!!",
  },
  {
	  speaker: "Sara Slywood",
	  text: "IT WAS THAT JACK TASSEL! HE DID IT! HE WAS JEALOUS OF HER RICHES AND KILLED HER!!! YOU HAVE TO BELIEVE ME!!!",
  },
  {
	  speaker: "Detective",
	  text: "No I don't miss Slywood. See you in court.",
  },
  {
	  speaker: "Detective",
	  text: "...",
  },
  {
	  speaker: "Detective",
	  text: "Another tragic case. At least I can sleep easy knowing the perpetrators are behind bars!",
  },
  ]
},

}