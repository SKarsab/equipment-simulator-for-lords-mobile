import { Question } from "src/app/question/question.model";
import { ORANGE, GOLD, PURPLE, BLUE, GREEN, GREY  } from "./constants"; 

export const questionList: Question[] = [
    new Question("Are you affiliated with IGG and Lords Mobile?", "No. This is a fan passion project that is not affiliated with IGG or Lords Mobile at all. All stock photos are under CC license, and Google Material Icons are under apache 2.0 license.", ORANGE),
    new Question("Why aren't there common, uncommon, and rare tiers for equipment, and jewels?", "The guides and builds are focused around the upper end of gameplay. Players usually progress through the first three tiers of rarities quickly and aren't competitive.", GOLD),
    new Question("Why are all of these builds so expensive?", "We focus our content on the level of gameplay that our guild is currently involved in. We share our experience in game for War of Wonders, Kingdom Vs Kingdom, Dragon Arena, Castle Rallies and early Paladin. We are not at the level for Baron and do not have experience with such an event, so there are no builds or guides for those kinds of events.", PURPLE),
    new Question("Can I join your guild?", "Message the guild [DIM] in game for an opportunity to join our guild. Our recruitment requirements will be listed on our public board. They will change overtime depending on our level of activity and area ofinterest in the game, so if you don't qualify now, you may later.", BLUE),
    new Question("I want to contribute to the project. How can I?", "Message the guild [DIM] in game to get in contact with us. We're always looking for more help to add to our collection of guides, builds and resources available here.", GREEN)
  ];