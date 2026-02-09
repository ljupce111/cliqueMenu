export const CATEGORIES = [
  "all",
  "burgers",
  "drinks",
  "meals",
  "noodles_poke",
  "pasta",
  "pizza",
  "salads",
  "sweets",
  "tortillas",
  "sandwiches",
  "extras"
];
export const CATEGORY_LABELS = {
  all: { en: "All", mk: "Сите", gr: "Όλα"},
  burgers: { en: "Burgers", mk: "Бургери", gr: "Μπέργκερ"},
  drinks: { en: "Drinks", mk: "Пијалоци", gr: "Ποτά"},
  meals: { en: "Meals", mk: "Оброци", gr: "Γεύματα"},
  noodles_poke: { en: "Noodles & Poke", mk: "Нудли и Поке", gr: "Νούντλς & Πόκε"},
  pasta: { en: "Pasta", mk: "Паста", gr: "Ζυμαρικά"},
  pizza: { en: "Pizza", mk: "Пица", gr: "Πίτσα"},
  salads: { en: "Salads", mk: "Салати", gr: "Σαλάτες"},
  sweets: { en: "Sweets", mk: "Десерти", gr: "Γλυκά"},
  tortillas: { en: "Tortillas", mk: "Тортиљи", gr: "Τορτίγιες"},
  sandwiches: { en: "Sandwiches", mk: "Сендвичи", gr: "Σάντουιτς"},
  extras: { en: "Extras", mk: "Додатоци", gr: "Επιπλέον"}
};

export const FOOD_FILTERS = [
  { key: "vegan", label: "Vegan" },
  { key: "beef", label: "Beef" },
  { key: "chicken", label: "Chicken" },
  { key: "pork", label: "Pork" },
  { key: "seafood", label: "Seafood" }
];
export const noItemsText = {
  en: "No items available in this category.",
  mk: "Нема достапни ставки во оваа категорија.",
  gr: "Δεν υπάρχουν διαθέσιμα στοιχεία σε αυτήν την κατηγορία."
};



export const menuItems = [
  {
    id: 1,
    category: "burgers",
    name: {
      en: "Cheese and Bacon",
      mk: "Сирење и Бекон",
      gr: "Τυρί και Μπέικον"
    },
    description: {
      en: "Juicy beef patty with crispy bacon, cheddar cheese, lettuce, and tomato.",
      mk: "Сочно говедско месо со крцкав бекон, чедар сирење, зелена салата и домат.",
      gr: "Ζουμερό μπιφτέκι με τραγανό μπέικον, τσένταρ, μαρούλι και ντομάτα."
    },
    ingredients: {
      en: ["Beef", "Bacon", "Cheddar", "Lettuce", "Tomato", "Bun"],
      mk: ["Говедско", "Бекон", "Чедар", "Зелена салата", "Домат", "Лебче"],
      gr: ["Μοσχάρι", "Μπέικον", "Τσένταρ", "Μαρούλι", "Ντομάτα", "Ψωμί"]
    },
    price: 350,
    image: "/assets/exampleIMG.jpg",
    available: true,
    mealOptions: { vegan: false, meat: ["beef","chicken"] }
  },
  {
    id: 2,
    category: "burgers",
    name: {
      en: "Chicken Bacon Ranch",
      mk: "Пилешко Бекон Ранч",
      gr: "Κοτόπουλο Μπέικον Ραντς"
    },
    description: {
      en: "Grilled chicken, crispy bacon, ranch sauce, lettuce, and tomato.",
      mk: "Печено пилешко, крцкав бекон, ранч сос, зелена салата и домат.",
      gr: "Ψητό κοτόπουλο, τραγανό μπέικον, σάλτσα ράντς, μαρούλι και ντομάτα."
    },
    ingredients: {
      en: ["Chicken", "Bacon", "Ranch Sauce", "Lettuce", "Tomato", "Bun"],
      mk: ["Пилешко", "Бекон", "Ранч сос", "Зелена салата", "Домат", "Лебче"],
      gr: ["Κοτόπουλο", "Μπέικον", "Σάλτσα Ραντς", "Μαρούλι", "Ντομάτα", "Ψωμί"]
    },
    price: 360,
    image: "/assets/exampleIMG.jpg",
    available: true,
    mealOptions: { vegan: false, meat: ["chicken"] }
  },
  {
    id: 3,
    category: "burgers",
    name: {
      en: "Chix Fillet",
      mk: "Пилешки Филе",
      gr: "Φιλέτο Κοτόπουλο"
    },
    description: {
      en: "Crispy chicken fillet, lettuce, tomato, and mayo in a soft bun.",
      mk: "Крцкаво пилешко филе, зелена салата, домат и мајонез во меко лебче.",
      gr: "Τραγανό φιλέτο κοτόπουλο, μαρούλι, ντομάτα και μαγιονέζα σε μαλακό ψωμί."
    },
    ingredients: {
      en: ["Chicken Fillet", "Lettuce", "Tomato", "Mayo", "Bun"],
      mk: ["Пилешко Филе", "Зелена салата", "Домат", "Мајонез", "Лебче"],
      gr: ["Φιλέτο Κοτόπουλο", "Μαρούλι", "Ντομάτα", "Μαγιονέζα", "Ψωμί"]
    },
    price: 340,
    image: "/assets/exampleIMG.jpg",
    available: true,
    mealOptions: { vegan: false, meat: ["chicken"] }
  },
  {
    id: 4,
    category: "burgers",
    name: {
      en: "Classic LTO",
      mk: "Класик LTO",
      gr: "Κλασικό LTO"
    },
    description: {
      en: "Beef patty with lettuce, tomato, onion, and pickles.",
      mk: "Говедско месо со зелена салата, домат, кромид и кисели краставички.",
      gr: "Μπιφτέκι μοσχαρίσιο με μαρούλι, ντομάτα, κρεμμύδι και τουρσί."
    },
    ingredients: {
      en: ["Beef", "Lettuce", "Tomato", "Onion", "Pickles", "Bun"],
      mk: ["Говедско", "Зелена салата", "Домат", "Кромид", "Кисели краставички", "Лебче"],
      gr: ["Μοσχάρι", "Μαρούλι", "Ντομάτα", "Κρεμμύδι", "Τουρσί", "Ψωμί"]
    },
    price: 330,
    image: "/assets/exampleIMG.jpg",
    available: true,
    mealOptions: { vegan: false, meat: ["beef"] }
  },
  {
    id: 5,
    category: "burgers",
    name: {
      en: "Crispy Chix",
      mk: "Крцкаво Пилешко",
      gr: "Τραγανό Κοτόπουλο"
    },
    description: {
      en: "Crunchy fried chicken with lettuce, tomato, and ranch sauce.",
      mk: "Крцкаво пржено пилешко со зелена салата, домат и ранч сос.",
      gr: "Τραγανό τηγανητό κοτόπουλο με μαρούλι, ντομάτα και σάλτσα ράντς."
    },
    ingredients: {
      en: ["Chicken", "Lettuce", "Tomato", "Ranch Sauce", "Bun"],
      mk: ["Пилешко", "Зелена салата", "Домат", "Ранч сос", "Лебче"],
      gr: ["Κοτόπουλο", "Μαρούλι", "Ντομάτα", "Σάλτσα Ραντς", "Ψωμί"]
    },
    price: 345,
    image: "/assets/exampleIMG.jpg",
    available: true,
    mealOptions: { vegan: false, meat: ["chicken"] }
  },
  {
    id: 1,
    category: "burgers",
    name: {
      en: "Cheese and Bacon",
      mk: "Сирење и Бекон",
      gr: "Τυρί και Μπέικον"
    },
    description: {
      en: "Juicy beef patty with crispy bacon, cheddar cheese, lettuce, and tomato.",
      mk: "Сочно говедско месо со крцкав бекон, чедар сирење, зелена салата и домат.",
      gr: "Ζουμερό μπιφτέκι με τραγανό μπέικον, τσένταρ, μαρούλι και ντομάτα."
    },
    ingredients: {
      en: ["Beef", "Bacon", "Cheddar", "Lettuce", "Tomato", "Bun"],
      mk: ["Говедско", "Бекон", "Чедар", "Зелена салата", "Домат", "Лебче"],
      gr: ["Μοσχάρι", "Μπέικον", "Τσένταρ", "Μαρούλι", "Ντομάτα", "Ψωμί"]
    },
    price: 350,
    image: "/assets/exampleIMG.jpg",
    available: true,
    mealOptions: { vegan: false, meat: ["beef"] }
  },
  {
    id: 2,
    category: "burgers",
    name: {
      en: "Chicken Bacon Ranch",
      mk: "Пилешко Бекон Ранч",
      gr: "Κοτόπουλο Μπέικον Ραντς"
    },
    description: {
      en: "Grilled chicken, crispy bacon, ranch sauce, lettuce, and tomato.",
      mk: "Печено пилешко, крцкав бекон, ранч сос, зелена салата и домат.",
      gr: "Ψητό κοτόπουλο, τραγανό μπέικον, σάλτσα ράντς, μαρούλι και ντομάτα."
    },
    ingredients: {
      en: ["Chicken", "Bacon", "Ranch Sauce", "Lettuce", "Tomato", "Bun"],
      mk: ["Пилешко", "Бекон", "Ранч сос", "Зелена салата", "Домат", "Лебче"],
      gr: ["Κοτόπουλο", "Μπέικον", "Σάλτσα Ραντς", "Μαρούλι", "Ντομάτα", "Ψωμί"]
    },
    price: 360,
    image: "/assets/exampleIMG.jpg",
    available: true,
    mealOptions: { vegan: false, meat: ["chicken"] }
  },
  {
    id: 3,
    category: "burgers",
    name: {
      en: "Chix Fillet",
      mk: "Пилешки Филе",
      gr: "Φιλέτο Κοτόπουλο"
    },
    description: {
      en: "Crispy chicken fillet, lettuce, tomato, and mayo in a soft bun.",
      mk: "Крцкаво пилешко филе, зелена салата, домат и мајонез во меко лебче.",
      gr: "Τραγανό φιλέτο κοτόπουλο, μαρούλι, ντομάτα και μαγιονέζα σε μαλακό ψωμί."
    },
    ingredients: {
      en: ["Chicken Fillet", "Lettuce", "Tomato", "Mayo", "Bun"],
      mk: ["Пилешко Филе", "Зелена салата", "Домат", "Мајонез", "Лебче"],
      gr: ["Φιλέτο Κοτόπουλο", "Μαρούλι", "Ντομάτα", "Μαγιονέζα", "Ψωμί"]
    },
    price: 340,
    image: "/assets/exampleIMG.jpg",
    available: true,
    mealOptions: { vegan: false, meat: ["chicken"] }
  },
  {
    id: 4,
    category: "burgers",
    name: {
      en: "Classic LTO",
      mk: "Класик LTO",
      gr: "Κλασικό LTO"
    },
    description: {
      en: "Beef patty with lettuce, tomato, onion, and pickles.",
      mk: "Говедско месо со зелена салата, домат, кромид и кисели краставички.",
      gr: "Μπιφτέκι μοσχαρίσιο με μαρούλι, ντομάτα, κρεμμύδι και τουρσί."
    },
    ingredients: {
      en: ["Beef", "Lettuce", "Tomato", "Onion", "Pickles", "Bun"],
      mk: ["Говедско", "Зелена салата", "Домат", "Кромид", "Кисели краставички", "Лебче"],
      gr: ["Μοσχάρι", "Μαρούλι", "Ντομάτα", "Κρεμμύδι", "Τουρσί", "Ψωμί"]
    },
    price: 330,
    image: "/assets/exampleIMG.jpg",
    available: true,
    mealOptions: { vegan: false, meat: ["beef"] }
  },
  {
    id: 5,
    category: "burgers",
    name: {
      en: "Crispy Chix",
      mk: "Крцкаво Пилешко",
      gr: "Τραγανό Κοτόπουλο"
    },
    description: {
      en: "Crunchy fried chicken with lettuce, tomato, and ranch sauce.",
      mk: "Крцкаво пржено пилешко со зелена салата, домат и ранч сос.",
      gr: "Τραγανό τηγανητό κοτόπουλο με μαρούλι, ντομάτα και σάλτσα ράντς."
    },
    ingredients: {
      en: ["Chicken", "Lettuce", "Tomato", "Ranch Sauce", "Bun"],
      mk: ["Пилешко", "Зелена салата", "Домат", "Ранч сос", "Лебче"],
      gr: ["Κοτόπουλο", "Μαρούλι", "Ντομάτα", "Σάλτσα Ραντς", "Ψωμί"]
    },
    price: 345,
    image: "/assets/exampleIMG.jpg",
    available: true,
    mealOptions: { vegan: false, meat: ["chicken"] }
  }
];


  
