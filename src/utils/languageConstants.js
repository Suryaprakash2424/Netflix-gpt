const lang = {
    en: {
        search: "Search",
        gptSearchPlaceholder: "What would you like to watch today?",
      },
      hindi: {
        search: "खोज",
        gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
      },
      spanish: {
        search: "buscar",
        gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
      },
}
export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "HIndi" },
    { identifier: "spanish", name: "Spanish" },
];
export default lang;
