const franc = require("franc");
const langs = require("langs");
const colors = require('colors')
const input = process.argv[2];
const langCode = franc(input);
// const langCode = franc('Alle menslike wesens word vry');

if (langCode === "und") {
  console.log("SORRY THIS SAMPLE COULD NOT BE JUDGED TRY WITH ANOTHER!!!!".red);
} else {
  const language = langs.where("3", langCode);
  console.log(`${language.name}`.green);
}
