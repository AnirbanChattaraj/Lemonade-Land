
  function order() {
    alert("Your tasty lemonade is on its way! 🍹✨");
  }

  const facts = [
    "Lemons float in water because they have air pockets! 🍋",
    "Lemon trees can produce up to 600 pounds of lemons a year! 🌳",
    "One lemon has more sugar than strawberries — but you can't taste it because it's so sour! 😄",
    "Lemonade was invented in 1630 in Paris! 🇫🇷",
    "Lemons are actually berries — surprise! 🍋🫐",
    "Ancient Egyptians believed lemons protected them from poison! 🏺"
  ];

  function showFact() {
    const random = Math.floor(Math.random() * facts.length);
    document.getElementById('funFactBox').innerText = facts[random];
  }
