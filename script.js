// Main application data
const app = {
    // Track current state
    currentScreen: 'intro-screen',
    
    // Card data for each path
    legacyCards: [
        { id: 1, title: 'ANEW', image: 'img3587.jpg', description: 'You don\'t remember your past; in fact, you can only recall events that occurred very recently. How do you deal with that blank space? What flashes of recognition offer clues about your past? What questions drive you? Are you looking for answers or is this better?' },
        { id: 2, title: 'BEYOND', image: 'img3588.jpg', description: 'You come from and were forged in places unknown. Who was behind the scenes shaping things to their own design? How did you fit into their plans? Did you embrace or run from those plots? What strange shadows still linger at your back? What lies ahead?' },
        { id: 3, title: 'CATACLYSM', image: 'img3589.jpg', description: 'A disaster struck your homeland, nearly wiping it off the map. What manner of catastrophe occurred? What did you lose? Did your people rebuild, or did they forge a new path to find a new home? How does that still impact you and the wider region today?' },
        { id: 4, title: 'DESCENDANT', image: 'img3590.jpg', description: 'You come from a long line of storied adventurers. What is something your family is well known for? Are you staying with or breaking from their traditions? What made you choose that path? What did you lose or what did you gain in making that choice?' },
        { id: 5, title: 'ESCAPE', image: 'img3594.jpg', description: 'You ran from a life of wealth, subjugation, and bland duty. Why did the prospects of those demands drive you away? Who did you leave behind? What did you want for yourself instead? Who or what are you still hiding from? Are others searching for you?' },
        { id: 6, title: 'FISSURE', image: 'img3595.jpg', description: 'You come from another realm far distant from this one. Where did you travel from? If you know, how did you arrive here? What do you remember from your home domain? What keeps you from returning? Are you looking for a way back?' },
        { id: 7, title: 'GRIT', image: 'img3596.jpg', description: 'Unyielding scarcity forced all in your town to scrape together what they could to survive. What skills did you have to learn then that you still rely on today? Before you departed, how were your people faring? What are you in search of to bring back to them?' },
        { id: 8, title: 'HEART', image: 'img3597.jpg', description: 'You were raised by a found family. Who were they and how did they come to take you in? What new direction did your life take after joining them? What of your life before? Did you come to love these people or are there more complicated feelings between you?' },
        { id: 9, title: 'INDUSTRY', image: 'img3601.jpg', description: 'You grew up in a working merchant family. What was their trade? What impact did the exposure to so many different cultures have on you? Do you still practice your trade or have you left it? What skills or connections continue to be of use to you even now?' },
        { id: 10, title: 'JEST', image: 'img3602.jpg', description: 'Your community was always on the move traveling to entertain from town to town. What did life on the road impress upon you early in life? What perspectives did you gain as someone who lived on the edges of things? What tricks do you still keep up your sleeves?' },
        { id: 11, title: 'KNOWLEDGE', image: 'img3603.jpg', description: 'You were raised as a student at a grand school and received an education many envy. What was your chosen field? Who were your most loved or feared teachers? How did these teachings open your eyes? What subjects were you prevented from delving deeper into?' },
        { id: 12, title: 'LOSS', image: 'img3604.jpg', description: 'Your home was taken long ago and many still fight to reclaim it. Who pushed your people out and why? What stands in your way of returning? What rumors circulate of how it has changed from what you knew back then? What would you do in order to go back?' },
        { id: 13, title: 'MINDFUL', image: 'img3608.jpg', description: 'You were raised to respect and live in harmony with nature\'s power. What secrets did you learn from your upbringing that others may not know about this region? What did it take to adjust to the more metropolitan world? What do you cherish most from home?' },
        { id: 14, title: 'NEXUS', image: 'img3609.jpg', description: 'The city of your birth sits atop ruins of a people long forgotten, but their magic remains. What influence did such arcane exposure have on you or your people? Was this magic known or did it remain hidden? What rumors still exist about those dark places today?' },
        { id: 15, title: 'OUTCAST', image: 'img3610.jpg', description: 'You were exiled from a young age and had to make your own way. What things did you do to survive? Why were you made to leave? How did the need to rely entirely on yourself change you? Where was your home before and is there anyone you miss still?' },
        { id: 16, title: 'PROTEGE', image: 'img3611.jpg', description: 'You were chosen by a powerful conjurer at an early age to be trained. What kind of life did they pull you from? How is it different from the one you have now? What unique skills did they teach you? Do you resent your choice being taken or is this life more magical?' },
        { id: 17, title: 'QUERY', image: 'img3615.jpg', description: 'You were apprenticed to a skilled adept who vanished mysteriously. What is rumored to have happened? Do you believe the gossip? What feelings still linger about that day? What have you done to try and find them? Do you think they want to be found?' },
        { id: 18, title: 'RESTRAINT', image: 'img3616.jpg', description: 'You were conscripted at a young age for service to settle a debt. Whose credit did you work off and where were you sent? What finally ended your service or are you still bound? Who else served alongside you? What lessons do you carry with you still to this day?' },
        { id: 19, title: 'SANCTUARY', image: 'img3617.jpg', description: 'Your community raised you on hallowed lands as its protector. What required safeguarding? What traditions do you hold dear from that experience? How does your upbringing impact what you see in the world today? What do you carry with you still from there?' },
        { id: 20, title: 'TRANSCEND', image: 'img3618.jpg', description: 'Long ago, your region was the site of a massive extraplanar event. What realms collided and what ensued? What caused it? Are there relics or reminders of what happened around still? What stories do people tell about what happened to this day?' }
    ],
    
    bondCards: [
        { id: 1, title: 'ALLY', image: 'img3637.jpg', description: 'An accomplice whose goals and desires are aligned with your own. What event made you realize the two of you were on the same side? When did you first come to their aid or they to yours? What have you faced together thus far? What do you admire most about the other?' },
        { id: 2, title: 'BELOVED', image: 'img3638.jpg', description: 'Someone who has your heart and admiration entirely and they yours. How did they first catch your eye? What about them draws you in? How long did it take them to return your affection or for you to return theirs? When did you realize they were everything you wanted?' },
        { id: 3, title: 'CORRUPTER', image: 'img3639.jpg', description: 'One bent on pulling as many as they can to their crooked arc. What is their position and what power do they hold? How do they wield it? Who do they target with their machinations? What impact is there on the hierarchy they work to erode? What chaos have they put in motion?' },
        { id: 4, title: 'DIVINER', image: 'img3640.jpg', description: 'Someone with a view of things that have yet to be. What future do they foresee? Does anyone believe them? Have they been accepted into society or do they operate on its fringes? Do you think they speak the truth or is it better if their visions are false and never come to pass?' },
        { id: 5, title: 'ELDER', image: 'img3644.jpg', description: 'A person of great authority with the ear of many. How did you first catch their eye? What happened to show them your untapped potential and importance? How did they choose to invest in you? What good or ill have you seen them do? Has your opinion of them changed with time?' },
        { id: 6, title: 'FRIEND', image: 'img3645.jpg', description: 'Someone you can always count on to be there, no matter what. Where did you first meet? What sparked the deepening of your connection? How did you come to see companions in one another? What do you rely on each other for? What secrets have you shared with only them?' },
        { id: 7, title: 'GUIDE', image: 'img3646.jpg', description: 'Someone to give direction to those lost Like A light in the darkness. Who are they in the social structure of your world? What paths do they point to? How has their message been received? When did you hear their guidance and what did it lead you towards? Did you take it?' },
        { id: 8, title: 'HERO', image: 'img3647.jpg', description: 'A figure standing against otherwise overwhelming odds. What great deed did they accomplish? What was the likelihood of their victory and did they survive their trials? What did they stand against and what drove them to do so? How did they cross your path?' },
        { id: 9, title: 'INSTRUCTOR', image: 'img3651.jpg', description: 'A teacher with wise words and wiser lessons to bestow. How did you come to be a student of theirs? In what areas did they offer counsel? What of their teachings has most affected your life\'s direction? What lesson of theirs was the hardest to learn?' },
        { id: 10, title: 'KINDRED', image: 'img3652.jpg', description: 'Someone you can always rely on in treacherous times. How did you come to rely on them for these reassurances? What secret do you both share? Is it yours or theirs? Why do you put your faith in them over others? What is at stake if this information gets out?' },
        { id: 11, title: 'LIAR', image: 'img3653.jpg', description: 'One with a silvery tongue and a taste for poison over honey. What falsehoods do they spread? Why do you think they lie? Who, or what, do they target with their falsehoods? How have their words and actions impacted your life? Do they believe their own lies?' },
        { id: 12, title: 'MYSTIC', image: 'img3654.jpg', description: 'Someone close to hidden and unseen things. What do they claim to know? What rites do they practice? Who do they keep around them and who flocks to their side? How did you meet and what knowledge was imparted to you? Do they still keep secrets?' },
        { id: 13, title: 'NEMESIS', image: 'img3658.jpg', description: 'An inevitable opponent, given where both of your loyalties lie. When did you first learn this person would be your foe? What circumstance makes resolving conflict between the two of you impossible? What are you willing to do in order to thwart them?' },
        { id: 14, title: 'OATHBREAKER', image: 'img3659.jpg', description: 'A promise made and not held stings worse than never making it to begin with. What was sworn? Why did they take that oath? Who are they to you or your community? How was that pledge broken and what were the consequences afterwards? Has that wound healed?' },
        { id: 15, title: 'RIVAL', image: 'img3660.jpg', description: 'One who stands in the way of what you desperately want. What sets you at odds? What drives you to outdo each other? What conflicts have arisen between you? Has it stayed playful or is it growing into something darker? What future trouble do they pose?' },
        { id: 16, title: 'SOVEREIGN', image: 'img3661.jpg', description: 'A force standing resolute at the helm to guide everyone who follows. How did they come to be in this position? Are they a just Leader or do they flaunt their power? What changes have they made to your world? What do you admire or despise most about them?' },
        { id: 17, title: 'TRAITOR', image: 'img3665.jpg', description: 'Someone who has turned their back on friend, country, and principle for their own benefit. What promise was betrayed? How was this deception discovered? What reaction was there once this treachery was revealed? What was the price paid in the aftermath?' },
        { id: 18, title: 'VAGABOND', image: 'img3666.jpg', description: 'A fraud at almost everything they do. What is their most common scam? Who do they target and why? Did they always need to take advantage of others? Are they good at their con of choice, or is it all too obvious? How were you roped into their schemes?' },
        { id: 19, title: 'WATCHER', image: 'img3667.jpg', description: 'One who stands in silent guard over a place worthy of protection. Was this charge given to them by others or did they choose it? What do they defend against? How well do they shoulder this responsibility? What have you seen them accomplish already?' },
        { id: 20, title: 'ZEALOT', image: 'img3668.jpg', description: 'One so deeply ingrained in their beliefs there\'s no bringing them out. What is the main drive behind their fanaticism? What word do they spread? Who do they seek to join them? How did you come to hear them? How have they tried ensnaring you with their zeal?' }
    ],
    
    catalystCards: [
        { 
            id: 1, 
            title: 'A FACTION RISES/A CITY IS SAVED', 
            image: 'img3697.jpg', 
            destructive: 'A Faction Rises: They seek dominance, power, and have the will to match their ambitions. Who are they? What are they willing to sacrifice to take control? Who do they look to overthrow? Why are they willing to risk so much now?',
            constructive: 'A City is Saved: Rescued from dire calamity or imminent crisis by the grace of others. What events led to this moment? Who came to lend aid? Was there a cost owed for their help? What changed for those survivors left picking up the pieces?'
        },
        { 
            id: 2, 
            title: 'A STORM FALLS/A RESOURCE UNCOVERED', 
            image: 'img3699.jpg', 
            destructive: 'A Storm Falls: It catches the region off guard and wreaks havoc. What kind of forces were at work here? What was salvaged and what was destroyed? In the aftermath, how do people move forward? Who is most affected by the devastation?',
            constructive: 'A Resource Uncovered: It brings great prosperity to those who find it. What is its nature? What bounty does it bring? How is its power harnessed? How does it change those who possess it? What costs or risks come hand in hand with such rewards?'
        },
        { 
            id: 3, 
            title: 'A LEADER DIES/A LIFE IS SPARED', 
            image: 'img3701.jpg', 
            destructive: 'A Leader Dies: They pass well before their time. What upheaval springs from this loss of power and stability? What opportunities arise and for whom? Who steps in to fill the void? Is there conflict over the change or do others rally together in memory of the fallen? Are old traditions maintained, or are new precedents built?',
            constructive: 'A Life is Spared: Done so in order to stop more bloodshed. Who is saved and why does this act of mercy stave off more violence? Who wanted to spare this life? What does this person do with their second chance? Do they consider themselves indebted after being saved? What ripple effect does it have on the region?'
        },
        { 
            id: 4, 
            title: 'A REGION VANISHES/A SHRINE APPEARS', 
            image: 'img3703.jpg', 
            destructive: 'A Region Vanishes: Gone without a trace and no one left to speak of its whereabouts. What fears are whispered in its absence? What fills the vacuum its loss leaves in the region? Whether it be people, untamed nature, or strange new magics, what disturbances linger about the area?Is there anyone who still looks for it?',
            constructive: 'A Shrine Appears: As ancient and powerful as it is mysterious. Where does it appear? Who or what does this place venerate? What powers does it bring and what does it come to symbolize to those in its vicinity? What comforts does it offer to those nearest? What is said to have brought it here and do people trust its offerings?'
        },
        { 
            id: 5, 
            title: 'A CURSE AWAKENS/A BLESSING GIVEN', 
            image: 'img3708.jpg', 
            destructive: 'A Curse Awakens: Bestowed long ago with hate and malice but left slumbering for an age. What has awakened it? Was it intentional or an unfortunate accident? What are its effects and who is targeted? What is needed to undo this ancient magic? What now settles over the area holding those under this spell?',
            constructive: 'A Blessing Given: One offered with hopes of a brighter future. Who is the giver and the receiver of this gift? What powers or protections does this blessing bring with it? Is it done in secret or as a show of might and prowess? Does the one bestowed know they have been changed or do they have a journey of discovery ahead of them?'
        },
        { 
            id: 6, 
            title: 'A COWARD UNMASKED/AN ACT OF COURAGE', 
            image: 'img3710.jpg', 
            destructive: 'A Coward Unmasked: They are revealed along with their misdeeds before everyone. What choices did they attempt to hide? What consequences arose once they were named? Who discovered their duplicity? What harm did their cowardice cause? How do they react to the accusations? What will happen to them now and what damage must be undone?',
            constructive: 'An Act Of Courage: One so grand that it inspires all who witness it. Who found the will for such bravery in the face of such dire circumstances? What now remains of that person? What did they do to move so many with their actions? What has this act of courage inspired or caused in you? What was lost and what was gained afterwards? How are they remembered?'
        },
        { 
            id: 7, 
            title: 'DANGER CLOSES IN/SAFE HAVEN OFFERED', 
            image: 'img3712.jpg', 
            destructive: 'Danger Closes In: Its arrival is sudden and unexpected, catching many off guard. What forces bring these hazards? Who is threatened most by its arrival? How did these circumstances go undetected for so long? In the face of such a dire moment what is chosen to be lost and what is too precious to leave behind?',
            constructive: 'Safe Haven Offered: In a moment of uncertainty sanctuary it is graciously given. Who was most in need of help? What did they require protection from? What help did they receive and what state do they find themselves in now? For the ones that were able to provide such assistance where are they now? Does a threat still linger?'
        },
        { 
            id: 8, 
            title: 'A FRIEND IS LOST/AN ENEMY PARDONED', 
            image: 'img3714.jpg', 
            destructive: 'A Friend Is Lost: They are gone with no warning and no means of being saved. Who were they most dear to? What is rumored to be the reason they were lost? Who feels their absence most harshly? Are there those glad to be rid of them? Who is left behind wanting answers as to what happend?',
            constructive: 'An Enemy Pardoned: It is done so against the advice of many. Who was granted this grace and what were their misdeeds? What is the argument for and against such leniency? What happens when they escape justice in these lands? What cycle is attempting to be broken by this?'
        },
        { 
            id: 9, 
            title: 'A FOE REVEALED/AN ALLIANCE FORGED', 
            image: 'img3719.jpg', 
            destructive: 'A Foe Revealed: One unknown and unexpected. Who are they in these lands? What made them show their hand? What makes them an adversary? Why act now? What do they hope for most by burning their cover? What are they willing to do to succeed in their aims now that their secret has been revealed?',
            constructive: 'An Alliance Forged: In the midst of conflict, cooler heads can prevail. What dangers are so great that other quarrels can be set aside in favor of self preservation? What do both sides give up by aligning interests? What do they each risk? How more likely is success in the face of banding together? Will such comradery prevail?'
        },
        { 
            id: 10, 
            title: 'A TREASURE STOLEN/A RELIC RETURNED', 
            image: 'img3721.jpg', 
            destructive: 'A Treasure Stolen: It vanished without a trace from a location thought impenetrable. What was the object taken? What significance does it hold and how important is it to the ones who were its protectors? What does this loss signify? What efforts are underway to recover it? Where is it whispered to be being held and what will happen if it is not found and returned?',
            constructive: 'A Relic Returned: Brought back by those most unlikely. Who returned it and what does this act of generosity herald? What boon is given to those who saw to its homecoming? Who was most affected by its loss and for how long has it been missing? What power does this item hold in the hands of its rightful owner? Now that it is back, what change is felt by its presence once more?'
        },
        { 
            id: 11, 
            title: 'A LIE BELIEVED/A TRUTH UNEARTHED', 
            image: 'img3723.jpg', 
            destructive: 'A Lie Believed: Deceit and slander are poisons with few remedies. What falsehoods were made to sound like truths here? What was the fallout of such misinformation being believed to be genuine? Who was most affected and were they an intended or accidental casualty? Were there those who wanted to believe?',
            constructive: 'A Truth Unearthed: Long rumored but finally proven beyond all shadow of a doubt. Who finally verified such important information and how did they uncover the truth? What does this revelation bring to light? What narratives does it now threaten to rewrite? What things must change in the face of such a discovery? Who still doubts?'
        },
        { 
            id: 12, 
            title: 'DARKNESS LOOMS/LIGHT BECKONS', 
            image: 'img3725.jpg', 
            destructive: 'Darkness Looms: It threatens to devour much within its reach if left unchecked. Is it the peril of mortals, beasts or magic that brings such threats in its wake? Who is in danger of being engulfed by this expanse? Is this force wielded with intention, is it untamed, or is its source unknown? What do people fear most as it moves closer? Who is turned on first in the ensuing panic?',
            constructive: 'Light Beckons: It is a welcome refuge in uncertain and dangerous times. Who offers this sanctuary in these bleak and uncertain days and who is in need of it? By what power are they able to offer protection? What benefits are given to those within its aura? What monstrosities does it keep at bay? For how long will this respite last and what happens if and when time runs out?'
        },
        { 
            id: 13, 
            title: 'KNOWLEDGE LOST/TECHNOLOGY GIFTED', 
            image: 'img3730.jpg', 
            destructive: 'Knowledge Lost: Once gone, it is a loss felt for generations. How was such wisdom forgotten or made to be misplaced? What machinations caused such an unimaginable thing to happen? What fallout was there in the cloud cast by such absence? Is there any hope for its recovery or is such lore lost forever? Are there any left who still remember pieces of what was once known?',
            constructive: 'Technology Gifted: An offer freely given with no expectation of anything in return. Who was able to so generously give such advancements and to whom were they given? What were the nature of such sciences and what effects did their presence have on the ones who received them? What change do they herald? How do those consequences ripple ever outward?'
        },
        { 
            id: 14, 
            title: 'A HARD CHOICE/AN AVOIDED MISTAKE', 
            image: 'img3732.jpg', 
            destructive: 'A Hard Choice: Dire circumstances often present the worst of options, but decisions must be made. Who was forced to choose and what were they made to choose between? What did they sacrifice and what did they save? How were they put in such a position? What was left after their decision was made and have they lived to regret it? Do others fault them for choosing at all?',
            constructive: 'An Avoided Mistake: Some more difficult to side step than others. What circumstances led to this moment of chance and near disaster? Who came so close to this blunder and what helped them to steer clear of it? Was this an accident or was it intentionally placed along their path? What fate would have awaited them had their luck been less? Are they still so lucky?'
        },
        { 
            id: 15, 
            title: 'A DYNASTY DIMINISHED/A HERO EMERGES', 
            image: 'img3734.jpg', 
            destructive: 'A Dynasty Diminished: All things, even empires, eventually come to an end. Who\'s story came to a close and what moved them to finally fall? What does this absence of order bring about in the surrounding regions? Who felt this power vacuum the hardest? What new structures of power were built up after this collapse? Who benefited most from such turmoil?',
            constructive: 'A Hero Emerges: Asked for or not; they have arrived. What challenge do they set themselves against? Why did they choose to act when others did not? Is there something that makes them particularly well suited to this challenge? What order or chaos did their actions bring about? What is public opinion of them? Were they victorious or is their fate not yet decided?'
        },
        { 
            id: 16, 
            title: 'A PLACE HIDDEN/A REALM REVITALIZED', 
            image: 'img3736.jpg', 
            destructive: 'A Place Hidden: The decision was made to protect a secret from getting out and endangering others. Who is protected by keeping such information quiet? By what manner of magic or might is a location obscured from sight and memory? Who was chosen to carry this weight? What cost is there in concealing this place from the rest of the world and what does it take to sustain such workings?',
            constructive: 'A Realm Revitalized: With enough time almost any wound can be healed. By what force was this land first damaged and what has been done to aid in its mending? How much time did such work take? Who championed this endeavor? Was the injury healed entirely or do scars still remain as a reminder to the hurt once caused? What new thing now grows here? What lesson was learned in those lands and at what cost?'
        },
        { 
            id: 17, 
            title: 'A TRAP SPRUNG/A CAGE BROKEN', 
            image: 'img3741.jpg', 
            destructive: 'A Trap Sprung: Well laid and crafted with patience. Who were the ones devising such a trap and why were they on the hunt? Who was their mark? Why were they targeted? What was the bait used to ensnare them? Did they knowingly walk in or were they unaware of the danger lurking? Now that they\'ve been caught, what fallout follows? What fate awaits them now?',
            constructive: 'A Cage Broken: No prison can last forever. Who or what was held within this pen and why were they put there? For how long were they confined? Who was their jailer? How did they break from their bonds and did they have help? Once free, what do they seek to do now that their freedom has been won? What wrongs may they seek to right with newly unshackled hands?'
        },
        { 
            id: 18, 
            title: 'A CONSPIRACY FOILED/AN EXPERIMENT SUCCEEDS', 
            image: 'img3743.jpg', 
            destructive: 'A Conspiracy Foiled: The best-laid plans never account for every factor. Who was behind these schemes and what was their aim? Who was the focus of their plot and what did they hope to achieve? How were their machinations interrupted and who is to blame for doing so? What consequences follow in the wake of such utter failure? Will they try again?',
            constructive: 'An Experiment Succeeds: Sometimes even the highest of risks is worth the reward. Who was behind this enterprise? What great workings did they achieve and what peril did they dance close to in doing so? Why were they driven to attempt such a volatile undertaking? Once they succeeded, what did they unleash? Are they still in control of the thing they created?'
        },
        { 
            id: 19, 
            title: 'AN OPPORTUNITY MISSED/A CHANCE TAKEN', 
            image: 'img3745.jpg', 
            destructive: 'An Opportunity Missed: Inaction is still a choice, even if it doesn\'t feel like one. Who missed this moment and was unable to move when opportunity presented itself? What stood to be gained and what did they lose out on? What made them freeze when others might have chosen to act? What was the cost of such inaction to them or those around them? What regret is left in their empty hands? What price was paid?',
            constructive: 'A Chance Taken: Even when you know the odds some things are worth leaving for fate to decide. What situation led to so much being put on the line with no certainty of success? What was wagered in the balance of such dire odds? Who took it upon themselves to risk so much and what reward did they hope for? Was this gamble ultimately worth it? What could have happened had things gone terribly wrong?'
        },
        { 
            id: 20, 
            title: 'A PROPHECY IGNORED/A WISH GRANTED', 
            image: 'img3747.jpg', 
            destructive: 'A Prophecy Ignored: Those who choose to disregard it can never be made to listen once it comes to pass. Who turned their backs on these predictions? What was foretold to happen and how much warning was given? Who made such divinations and why did they go unheeded? What was the cost once such augury came to be and what remains since there were none who stood to prevent it?',
            constructive: 'A Wish Granted: With the power to rewrite reality there is no more creative or destructive force than that of a wish. Who was the giver and who received such an unfathomable gift? What was it they wished for? What had to change in order to make such a thing real? Was the reality of their desire everything they wanted or did they live to regret ever asking for it? What happens when you get what you ask for?'
        }
    ],
    
    // Selected cards
    selectedLegacyCards: [],
    selectedBondCards: [],
    selectedCatalystCards: [],
    
    // Final selections
    finalLegacyCard: null,
    finalBondCard: null,
    finalCatalystCard: null,
    
    // Catalyst choice
    catalystChoice: null,
};

// Helper functions
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the specified screen
    document.getElementById(screenId).classList.add('active');
    app.currentScreen = screenId;
}

// Map catalyst card titles to correct image filenames
const catalystImageMap = {
    'A FACTION RISES/A CITY IS SAVED': 'faction_city',
    'A STORM FALLS/A RESOURCE UNCOVERED': 'storm_resource',
    'A LEADER DIES/A LIFE IS SPARED': 'leader_life',
    'A REGION VANISHES/A SHRINE APPEARS': 'region_shrine',
    'A CURSE AWAKENS/A BLESSING GIVEN': 'curse_blessing',
    'A COWARD UNMASKED/AN ACT OF COURAGE': 'coward_courage',
    'DANGER CLOSES IN/SAFE HAVEN OFFERED': 'danger_haven',
    'A FRIEND IS LOST/AN ENEMY PARDONED': 'friend_enemy',
    'A FOE REVEALED/AN ALLIANCE FORGED': 'foe_alliance',
    'A TREASURE STOLEN/A RELIC RETURNED': 'treasure_relic',
    'A LIE BELIEVED/A TRUTH UNEARTHED': 'lie_truth',
    'DARKNESS LOOMS/LIGHT BECKONS': 'darkness_light',
    'KNOWLEDGE LOST/TECHNOLOGY GIFTED': 'knowledge_technology',
    'A HARD CHOICE/AN AVOIDED MISTAKE': 'choice_mistake',
    'A DYNASTY DIMINISHED/A HERO EMERGES': 'dynasty_hero',
    'A PLACE HIDDEN/A REALM REVITALIZED': 'place_realm',
    'A TRAP SPRUNG/A CAGE BROKEN': 'trap_cage',
    'A CONSPIRACY FOILED/AN EXPERIMENT SUCCEEDS': 'conspiracy_experiment',
    'AN OPPORTUNITY MISSED/A CHANCE TAKEN': 'opportunity_chance',
    'A PROPHECY IGNORED/A WISH GRANTED': 'prophecy_wish'
};

function createCard(card, type, isSelectable = true, isSelected = false) {
    const cardElement = document.createElement('div');
    cardElement.className = `card${isSelected ? ' selected flipped' : ''}`;
    cardElement.dataset.id = card.id;
    cardElement.dataset.type = type;
    
    // Use updated image path with new naming convention
    let imagePath;
    switch(type) {
        case 'legacy':
            imagePath = `Images/legacy_${card.title.toLowerCase()}.jpg`;
            break;
        case 'bond':
            imagePath = `Images/bond_${card.title.toLowerCase()}.jpg`;
            break;
        case 'catalyst':
            // Use the mapping instead of generating from title
            const mappedName = catalystImageMap[card.title];
            imagePath = `Images/catalyst_${mappedName}.jpg`;
            break;
    }
    
    // Create the card structure for flip animation
    cardElement.innerHTML = `
        <div class="card-inner">
            <div class="card-back"></div>
            <div class="card-front">
                <img src="${imagePath}" alt="${card.title}">
            </div>
        </div>
    `;
    
    if (isSelectable) {
        cardElement.addEventListener('click', cardClickHandler);
    }
    
    return cardElement;
}

function createFinalCard(card, type, isSelectable = true, isSelected = false) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'final-card-container';
    cardContainer.dataset.id = card.id;
    
    const cardElement = document.createElement('div');
    cardElement.className = `final-card${isSelected ? ' selected' : ''}`;
    cardElement.dataset.id = card.id;
    cardElement.dataset.type = type;
    
    // Use updated image path with new naming convention
    let imagePath;
    switch(type) {
        case 'legacy':
            imagePath = `Images/legacy_${card.title.toLowerCase()}.jpg`;
            break;
        case 'bond':
            imagePath = `Images/bond_${card.title.toLowerCase()}.jpg`;
            break;
        case 'catalyst':
            // Use the mapping instead of generating from title
            const mappedName = catalystImageMap[card.title];
            imagePath = `Images/catalyst_${mappedName}.jpg`;
            break;
    }
    
    cardElement.innerHTML = `
        <div class="final-card-front">
            <img src="${imagePath}" alt="${card.title}">
        </div>
        <div class="final-card-back"></div>
    `;
    
    cardContainer.appendChild(cardElement);
    
    if (isSelectable) {
        cardElement.addEventListener('click', finalCardClickHandler);
        
        // Add hover effect to show description
        cardElement.addEventListener('mouseenter', function() {
            showCardDescription(type, card);
        });
    }
    
    return cardContainer;
}

function showCardDescription(type, card) {
    const titleElement = document.getElementById(`${type}-description-title`);
    const textElement = document.getElementById(`${type}-description-text`);
    const descriptionElement = document.getElementById(`${type}-card-description`);
    
    // Set the title and description
    titleElement.textContent = card.title;
    
    // For catalyst cards, show both options
    if (type === 'catalyst') {
        textElement.innerHTML = `
            <strong>Destructive:</strong> ${card.destructive}<br><br>
            <strong>Constructive:</strong> ${card.constructive}
        `;
    } else {
        textElement.textContent = card.description;
    }
    
    // Show the description
    descriptionElement.classList.add('active');
}

function cardClickHandler(event) {
    const cardElement = event.currentTarget;
    const cardId = parseInt(cardElement.dataset.id);
    const cardType = cardElement.dataset.type;
    
    let selectedCards, maxSelectionCount;
    
    // Determine which card collection to work with
    switch (cardType) {
        case 'legacy':
            selectedCards = app.selectedLegacyCards;
            maxSelectionCount = 3;
            break;
        case 'bond':
            selectedCards = app.selectedBondCards;
            maxSelectionCount = 3;
            break;
        case 'catalyst':
            selectedCards = app.selectedCatalystCards;
            maxSelectionCount = 3;
            break;
    }
    
    // Check if card is already selected
    const cardIndex = selectedCards.findIndex(card => card.id === cardId);
    
    if (cardIndex === -1) {
        // Card is not selected, try to add it
        if (selectedCards.length < maxSelectionCount) {
            // Add card to selected collection
            const card = app[`${cardType}Cards`].find(card => card.id === cardId);
            selectedCards.push(card);
            
            // Toggle the flip class on click
            cardElement.classList.toggle('flipped');
            
            // After flip animation finishes, add selected class
            setTimeout(() => {
                cardElement.classList.add('selected');
            }, 400);
        }
    } else {
        // Card is already selected, remove it
        selectedCards.splice(cardIndex, 1);
        
        // Remove selected class first
        cardElement.classList.remove('selected');
        
        // Toggle the flip class
        setTimeout(() => {
            cardElement.classList.toggle('flipped');
        }, 50);
    }
    
    // Update confirm button state and text
    updateConfirmButton(cardType, selectedCards.length, maxSelectionCount);
}

function finalCardClickHandler(event) {
    const cardElement = event.currentTarget;
    const cardId = parseInt(cardElement.dataset.id);
    const cardType = cardElement.dataset.type;
    
    // Remove selection from all cards
    document.querySelectorAll(`.final-card[data-type="${cardType}"]`).forEach(card => {
        card.classList.remove('selected');
    });
    
    // Select the clicked card
    cardElement.classList.add('selected');
    
    // Set the final card selection
    const card = app[`selected${cardType.charAt(0).toUpperCase() + cardType.slice(1)}Cards`].find(card => card.id === cardId);
    app[`final${cardType.charAt(0).toUpperCase() + cardType.slice(1)}Card`] = card;
    
    // Show the card description
    showCardDescription(cardType, card);
    
    // Enable the next button
    document.getElementById(`${cardType}-next`).disabled = false;
}

function updateConfirmButton(cardType, selectedCount, maxCount) {
    const button = document.getElementById(`${cardType}-confirm`);
    button.textContent = `Confirm Selection (${selectedCount}/${maxCount})`;
    button.disabled = selectedCount !== maxCount;
}

function populateCardGrid(cardType) {
    const gridElement = document.getElementById(`${cardType}-grid`);
    gridElement.innerHTML = '';
    
    // Get the cards and shuffle them
    const cards = [...app[`${cardType}Cards`]];
    shuffleArray(cards);
    
    // Create and add cards to the grid
    cards.forEach(card => {
        const isSelected = app[`selected${cardType.charAt(0).toUpperCase() + cardType.slice(1)}Cards`].some(selectedCard => selectedCard.id === card.id);
        const cardElement = createCard(card, cardType, true, isSelected);
        gridElement.appendChild(cardElement);
    });
}

function populateFinalSelection(cardType) {
    const selectionElement = document.getElementById(`${cardType}-final-selection`);
    selectionElement.innerHTML = '';
    
    const selectedCards = app[`selected${cardType.charAt(0).toUpperCase() + cardType.slice(1)}Cards`];
    
    // Reset card description
    const descriptionElem = document.getElementById(`${cardType}-card-description`);
    descriptionElem.classList.remove('active');
    
    // Create and add final selection cards
    selectedCards.forEach(card => {
        const isSelected = app[`final${cardType.charAt(0).toUpperCase() + cardType.slice(1)}Card`] && 
                           app[`final${cardType.charAt(0).toUpperCase() + cardType.slice(1)}Card`].id === card.id;
        const cardElement = createFinalCard(card, cardType, true, isSelected);
        selectionElement.appendChild(cardElement);
        
        // If card is already selected, show its description
        if (isSelected) {
            showCardDescription(cardType, card);
        }
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setupCatalystOptions() {
    const card = app.finalCatalystCard;
    if (!card) return;
    
    // Use the mapping instead of generating from title
    const mappedName = catalystImageMap[card.title];
    const imagePath = `Images/catalyst_${mappedName}.jpg`;
    
    // For debugging
    console.log(`Title: ${card.title}, Image Path: ${imagePath}`);
    
    // Display the card image
    const cardDisplay = document.querySelector('#catalyst-card-display .final-card');
    cardDisplay.querySelector('.final-card-front').innerHTML = `<img src="${imagePath}" alt="${card.title}" style="width:100%; height:100%; object-fit:cover; object-position:center; display:block;">`;
    
    // Set the option texts
    document.getElementById('destructive-text').textContent = card.destructive;
    document.getElementById('constructive-text').textContent = card.constructive;
    
    // Reset selections
    document.querySelectorAll('.option-card').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Reset the continue button
    document.getElementById('catalyst-options-next').disabled = true;
    
    // Setup event listeners for options
    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove selection from all options
            document.querySelectorAll('.option-card').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Select the chosen option
            this.closest('.option-card').classList.add('selected');
            
            // Store the choice
            app.catalystChoice = this.dataset.type;
            
            // Enable the continue button
            document.getElementById('catalyst-options-next').disabled = false;
        });
    });
    
    // Don't auto-flip the card - will be done on click
    // Add click event to flip card
    cardDisplay.addEventListener('click', function() {
        if (!this.classList.contains('flipped')) {
            this.classList.add('flipped');
        } else {
            this.classList.remove('flipped');
        }
    });
}

function populateSummary() {
    if (!app.finalLegacyCard || !app.finalBondCard || !app.finalCatalystCard || !app.catalystChoice) {
        return;
    }
    
    // Set Legacy summary with updated image paths
    const legacyImagePath = `Images/legacy_${app.finalLegacyCard.title.toLowerCase()}.jpg`;
    document.getElementById('summary-legacy-card').innerHTML = `<img src="${legacyImagePath}" alt="${app.finalLegacyCard.title}" style="width:100%; height:100%; object-fit:cover; object-position:center; display:block;">`;
    document.getElementById('summary-legacy-title').textContent = app.finalLegacyCard.title;
    document.getElementById('summary-legacy-text').textContent = app.finalLegacyCard.description;
    
    // Set Bond summary with updated image paths
    const bondImagePath = `Images/bond_${app.finalBondCard.title.toLowerCase()}.jpg`;
    document.getElementById('summary-bond-card').innerHTML = `<img src="${bondImagePath}" alt="${app.finalBondCard.title}" style="width:100%; height:100%; object-fit:cover; object-position:center; display:block;">`;
    document.getElementById('summary-bond-title').textContent = app.finalBondCard.title;
    document.getElementById('summary-bond-text').textContent = app.finalBondCard.description;
    
    // Set Catalyst summary with updated image paths
    const mappedName = catalystImageMap[app.finalCatalystCard.title];
    const catalystImagePath = `Images/catalyst_${mappedName}.jpg`;
    console.log("Summary catalyst image path:", catalystImagePath);
    document.getElementById('summary-catalyst-card').innerHTML = `<img src="${catalystImagePath}" alt="${app.finalCatalystCard.title}" style="width:100%; height:100%; object-fit:cover; object-position:center; display:block;">`;
    document.getElementById('summary-catalyst-title').textContent = app.finalCatalystCard.title.split('/')[app.catalystChoice === 'destructive' ? 0 : 1].trim();
    document.getElementById('summary-catalyst-text').textContent = app.finalCatalystCard[app.catalystChoice];
    
    // Add staggered entrance animation to summary cards
    const summaryCards = document.querySelectorAll('.summary-card');
    summaryCards.forEach((card, index) => {
        // First set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'none';
        
        // Then add the animation after a staggered delay
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease, transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateY(0deg)';
        }, 300 + (index * 200));
    });
}

function saveCharacter() {
    const characterNotes = document.getElementById('character-notes-input').value;
    
    // Create a character object with all selections
    const character = {
        legacy: {
            title: app.finalLegacyCard.title,
            description: app.finalLegacyCard.description,
            image: app.finalLegacyCard.image
        },
        bond: {
            title: app.finalBondCard.title,
            description: app.finalBondCard.description,
            image: app.finalBondCard.image
        },
        catalyst: {
            title: app.finalCatalystCard.title.split('/')[app.catalystChoice === 'destructive' ? 0 : 1].trim(),
            description: app.finalCatalystCard[app.catalystChoice],
            image: app.finalCatalystCard.image,
            type: app.catalystChoice
        },
        notes: characterNotes
    };
    
    // Then create a PDF with a nicer layout
    generatePDF(character);
}

function generatePDF(character) {
    const { jsPDF } = window.jspdf;
    
    // Create a new PDF document
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
    });
    
    // Set font
    doc.setFont('helvetica', 'normal');
    
    // Add title
    doc.setFontSize(24);
    doc.setTextColor(94, 53, 177); // Use primary color
    doc.text('Storypath Character', 105, 20, { align: 'center' });
    
    // Add divider
    doc.setDrawColor(94, 53, 177);
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);
    
    // Add subtitle
    doc.setFontSize(16);
    doc.setTextColor(66, 66, 66);
    
    // Legacy section
    const yStart = 40;
    doc.setFontSize(18);
    doc.setTextColor(94, 53, 177); 
    doc.text('Legacy: ' + character.legacy.title, 20, yStart);
    
    doc.setFontSize(12);
    doc.setTextColor(33, 33, 33);
    const legacyLines = doc.splitTextToSize(character.legacy.description, 170);
    doc.text(legacyLines, 20, yStart + 10);
    
    // Bond section
    const yBond = yStart + 10 + (legacyLines.length * 7);
    doc.setFontSize(18);
    doc.setTextColor(94, 53, 177);
    doc.text('Bond: ' + character.bond.title, 20, yBond);
    
    doc.setFontSize(12);
    doc.setTextColor(33, 33, 33);
    const bondLines = doc.splitTextToSize(character.bond.description, 170);
    doc.text(bondLines, 20, yBond + 10);
    
    // Catalyst section
    const yCatalyst = yBond + 10 + (bondLines.length * 7);
    doc.setFontSize(18);
    doc.setTextColor(94, 53, 177);
    doc.text('Catalyst: ' + character.catalyst.title, 20, yCatalyst);
    
    doc.setFontSize(12);
    doc.setTextColor(33, 33, 33);
    const catalystLines = doc.splitTextToSize(character.catalyst.description, 170);
    doc.text(catalystLines, 20, yCatalyst + 10);
    
    // Notes section
    const yNotes = yCatalyst + 10 + (catalystLines.length * 7);
    if (character.notes && character.notes.trim() !== '') {
        doc.setFontSize(18);
        doc.setTextColor(94, 53, 177);
        doc.text('Character Notes:', 20, yNotes);
        
        doc.setFontSize(12);
        doc.setTextColor(33, 33, 33);
        const notesLines = doc.splitTextToSize(character.notes, 170);
        doc.text(notesLines, 20, yNotes + 10);
    }
    
    // Add footer
    const pageCount = doc.internal.getNumberOfPages();
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.text('Created with Storypath Character System', 105, 290, { align: 'center' });
        doc.text('Page ' + i + ' of ' + pageCount, 190, 290, { align: 'right' });
    }
    
    // Save the PDF
    doc.save('storypath-character.pdf');
}

function resetApp() {
    // Reset all selections
    app.selectedLegacyCards = [];
    app.selectedBondCards = [];
    app.selectedCatalystCards = [];
    app.finalLegacyCard = null;
    app.finalBondCard = null;
    app.finalCatalystCard = null;
    app.catalystChoice = null;
    
    // Clear the notes field
    document.getElementById('character-notes-input').value = '';
    
    // Go back to the intro screen
    showScreen('intro-screen');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Setup button event listeners
    document.getElementById('start-btn').addEventListener('click', function() {
        populateCardGrid('legacy');
        showScreen('legacy-selection');
    });
    
    document.getElementById('legacy-confirm').addEventListener('click', function() {
        populateFinalSelection('legacy');
        showScreen('legacy-final');
    });
    
    document.getElementById('legacy-back').addEventListener('click', function() {
        showScreen('legacy-selection');
    });
    
    document.getElementById('legacy-next').addEventListener('click', function() {
        populateCardGrid('bond');
        showScreen('bond-selection');
    });
    
    document.getElementById('bond-confirm').addEventListener('click', function() {
        populateFinalSelection('bond');
        showScreen('bond-final');
    });
    
    document.getElementById('bond-back').addEventListener('click', function() {
        showScreen('bond-selection');
    });
    
    document.getElementById('bond-next').addEventListener('click', function() {
        populateCardGrid('catalyst');
        showScreen('catalyst-selection');
    });
    
    document.getElementById('catalyst-confirm').addEventListener('click', function() {
        populateFinalSelection('catalyst');
        showScreen('catalyst-final');
    });
    
    document.getElementById('catalyst-back').addEventListener('click', function() {
        showScreen('catalyst-selection');
    });
    
    document.getElementById('catalyst-next').addEventListener('click', function() {
        setupCatalystOptions();
        showScreen('catalyst-options');
    });
    
    document.getElementById('catalyst-options-back').addEventListener('click', function() {
        showScreen('catalyst-final');
    });
    
    document.getElementById('catalyst-options-next').addEventListener('click', function() {
        populateSummary();
        showScreen('character-summary');
    });
    
    document.getElementById('save-btn').addEventListener('click', saveCharacter);
    document.getElementById('restart-btn').addEventListener('click', resetApp);
});
