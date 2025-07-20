export const moodKeywords = {
  happy: [
    "happy",
    "great",
    "joy",
    "excited",
    "awesome",
    "grateful",
    "smile",
    "fun",
    "blessed",
    "enjoyed",
  ],
  sad: ["sad", "depressed", "unhappy", "cry", "gloomy", "down", "miserable"],
  angry: ["angry", "mad", "furious", "annoyed", "irritated", "rage"],
  anxious: ["anxious", "nervous", "stressed", "worried", "panic", "tense"],
  tired: ["tired", "exhausted", "sleepy", "drained", "burnt out", "fatigued"],
};

export function predictMood(text) {
  const input = text.toLowerCase();

  for (const [mood, keywords] of Object.entries(moodKeywords)) {
    if (keywords.some((keyword) => input.includes(keyword))) {
      return mood;
    }
  }

  return "unknown";
}

// src/utils/moodData.js
const moodData = {
  happy: {
    emoji: "😊",
    recommendation: "Keep smiling! Spread the joy 😊",
    quote:
      "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    background: "#ffeaa7",
  },
  sad: {
    emoji: "💙",
    recommendation: "Take a deep breath. It's okay to feel this way 🌧️",
    quote:
      "Every day may not be good... but there's something good in every day.",
    background: "#74b9ff",
  },
  angry: {
    emoji: "😡",
    recommendation: "Try some deep breathing or go for a walk 😡",
    quote:
      "For every minute you remain angry, you give up sixty seconds of peace of mind. – Ralph Waldo Emerson",
    background: "#ff7675",
  },
  excited: {
    emoji: "🌈",
    recommendation: "Channel that energy into something amazing! ⚡",
    quote:
      "The excitement of learning separates youth from old age. – Ezra Taft Benson",
    background: "#fab1a0",
  },
  unknown: {
    emoji: "🤔",
    recommendation: "Express more to discover your mood!",
    quote: "Feel free to describe more about your thoughts 🌈",
    background: "#dfe6e9",
  },
  anxious: {
    emoji: "😰",
    recommendation:
      "Try grounding techniques like deep breathing or journaling. You're stronger than your worries.",
    quote:
      "You don’t have to control your thoughts. You just have to stop letting them control you. — Dan Millman",
    background: "#a29bfe",
  },
  tired: {
    emoji: "😴",
    recommendation:
      "Give yourself permission to rest. You’ve done enough for now — recharge.",
    quote:
      "Sometimes the most productive thing you can do is rest. — Mark Black",
    background: "#b2bec3",
  },
};

export default moodData;
