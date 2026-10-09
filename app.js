/* ==========================================================================
   AMAZON BOOKS - JAVASCRIPT APPLICATION CORE & INTERACTIVE ENGINE
   ========================================================================== */

// 1. Comprehensive Book Catalog with Rich Details & Excerpts
const BOOKS_DATA = [
  {
    id: "amz-001",
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits",
    author: "James Clear",
    category: "self-help",
    categoryLabel: "Self-Help & Mindset",
    badge: "badge-bestseller",
    badgeText: "#1 Best Seller",
    rating: 4.9,
    reviewsCount: 114920,
    coverBg: "linear-gradient(135deg, #1b2838 0%, #2a475e 50%, #c7d5e0 100%)",
    accentColor: "#f39c12",
    spineTitle: "ATOMIC HABITS",
    formats: {
      paperback: { price: 14.99, origPrice: 27.00, discount: "44% off" },
      hardcover: { price: 19.95, origPrice: 29.99, discount: "33% off" },
      kindle: { price: 9.99, origPrice: 15.00, discount: "33% off" },
      audiobook: { price: 0.00, origPrice: 22.00, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Avery; 1st edition (October 16, 2018)",
    pages: 320,
    isbn: "978-0735211292",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    excerpt: `Chapter 1: The Surprising Power of Atomic Habits

It is so easy to overestimate the importance of one defining moment and underestimate the value of making small improvements on a daily basis. Too often, we convince ourselves that massive success requires massive action. Whether it is losing weight, building a business, writing a book, winning a championship, or achieving any other goal, we put pressure on ourselves to make some earth-shattering improvement that everyone will talk about.

Meanwhile, improving by 1 percent isn't particularly notable—sometimes it isn't even noticeable—but it can be far more meaningful, especially in the long run. The difference a tiny improvement can make over time is astounding. Here's how the math works out: if you can get 1 percent better each day for one year, you'll end up thirty-seven times better by the time you're done. Conversely, if you get 1 percent worse each day for one year, you'll decline nearly down to zero. What starts as a small win or a minor setback accumulates into something much more.`
  },
  {
    id: "amz-002",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    category: "tech",
    categoryLabel: "Programming & Tech",
    badge: "badge-choice",
    badgeText: "Amazon's Choice",
    rating: 4.8,
    reviewsCount: 28410,
    coverBg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    accentColor: "#11998e",
    spineTitle: "CLEAN CODE",
    formats: {
      paperback: { price: 34.50, origPrice: 54.99, discount: "37% off" },
      hardcover: { price: 46.00, origPrice: 65.00, discount: "29% off" },
      kindle: { price: 24.99, origPrice: 35.00, discount: "28% off" },
      audiobook: { price: 14.95, origPrice: 28.00, discount: "46% off" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "Only 4 left in stock - order soon",
    stockClass: "stock-low",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Prentice Hall; 1st edition (August 1, 2008)",
    pages: 464,
    isbn: "978-0132350884",
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way. Software expert Robert C. Martin presents a revolutionary paradigm with Clean Code.",
    excerpt: `Chapter 1: Clean Code

There will be code. One might argue that a book about code is dreadfully out of date—that code is no longer the issue; that we ought to be concerned about models and requirements instead. Indeed, some have suggested that we are close to the end of code.

Never will we be free of code. Code is the detail that specifies our requirements. Models can be specified, but they too must eventually be represented in some concrete format. Writing clean code is what separates a true software artisan from a coder who simply churns out characters.`
  },
  {
    id: "amz-003",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "tech",
    categoryLabel: "Programming & Tech",
    badge: "badge-bestseller",
    badgeText: "#1 in Databases",
    rating: 4.9,
    reviewsCount: 16750,
    coverBg: "linear-gradient(135deg, #2c3e50 0%, #bdc3c7 100%)",
    accentColor: "#e74c3c",
    spineTitle: "DESIGNING DATA SYSTEMS",
    formats: {
      paperback: { price: 38.99, origPrice: 59.99, discount: "35% off" },
      hardcover: { price: 54.00, origPrice: 75.00, discount: "28% off" },
      kindle: { price: 29.99, origPrice: 42.00, discount: "28% off" },
      audiobook: { price: 16.50, origPrice: 30.00, discount: "45% off" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "O'Reilly Media; 1st edition (May 2, 2017)",
    pages: 616,
    isbn: "978-1449373320",
    description: "Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. Martin Kleppmann helps you navigate this diverse and fast-changing landscape of technologies for processing and storing data.",
    excerpt: `Chapter 1: Reliable, Scalable, and Maintainable Applications

Today, many applications are data-intensive, as opposed to compute-intensive. Raw CPU power is rarely a bottleneck for these applications—bigger problems are usually the amount of data, the complexity of data, and the speed at which it is changing.

A data-intensive application is typically built from standard building blocks that provide commonly needed functionality: databases to store data so it can be found again, caches to remember expensive operations, search indexes to allow keyword searches, and stream processing to handle asynchronous messaging.`
  },
  {
    id: "amz-004",
    title: "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
    author: "Morgan Housel",
    category: "business",
    categoryLabel: "Business & Finance",
    badge: "badge-bestseller",
    badgeText: "#1 in Finance",
    rating: 4.8,
    reviewsCount: 78500,
    coverBg: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
    accentColor: "#27ae60",
    spineTitle: "PSYCHOLOGY OF MONEY",
    formats: {
      paperback: { price: 13.99, origPrice: 22.00, discount: "36% off" },
      hardcover: { price: 18.50, origPrice: 28.00, discount: "34% off" },
      kindle: { price: 8.99, origPrice: 14.99, discount: "40% off" },
      audiobook: { price: 0.00, origPrice: 19.95, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Harriman House (September 8, 2020)",
    pages: 252,
    isbn: "978-0857197689",
    description: "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do. But in the real world people don't make financial decisions on a spreadsheet.",
    excerpt: `Introduction: The Greatest Show on Earth

My premise is that doing well with money has a little to do with how smart you are and a lot to do with how you behave. And behavior is hard to teach, even to really smart people.

A genius who loses control of their emotions can be a financial disaster. The opposite is also true. Ordinary folks with no financial education can be wealthy if they have a handful of behavioral skills that have nothing to do with formal measures of intelligence.`
  },
  {
    id: "amz-005",
    title: "Project Hail Mary: A Novel",
    author: "Andy Weir",
    category: "scifi",
    categoryLabel: "Sci-Fi & Fantasy",
    badge: "badge-choice",
    badgeText: "Amazon's Choice",
    rating: 4.9,
    reviewsCount: 92300,
    coverBg: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    accentColor: "#e67e22",
    spineTitle: "PROJECT HAIL MARY",
    formats: {
      paperback: { price: 15.20, origPrice: 28.00, discount: "45% off" },
      hardcover: { price: 21.00, origPrice: 32.00, discount: "34% off" },
      kindle: { price: 11.99, origPrice: 16.99, discount: "29% off" },
      audiobook: { price: 0.00, origPrice: 24.95, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Ballantine Books (May 4, 2021)",
    pages: 496,
    isbn: "978-0593135204",
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself are doomed. Except right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he's been asleep for a very, very long time.",
    excerpt: `Chapter 1

"What's two plus two?"
That's the first question I'm asked. Well, not asked. Broadcast into my mind, or spoken by a synthesized computer voice.
I don't know the answer. Not because I don't know mathematics, but because I can't even remember what language this is.
"Four," I finally manage to croak. My vocal cords feel like dried cardboard.
"Correct," the voice responds smoothly. "State your name."
"I... I don't know."`
  },
  {
    id: "amz-006",
    title: "Dune (Dune Chronicles, Book 1)",
    author: "Frank Herbert",
    category: "scifi",
    categoryLabel: "Sci-Fi & Fantasy",
    badge: "badge-bestseller",
    badgeText: "#1 in Epic Sci-Fi",
    rating: 4.8,
    reviewsCount: 84300,
    coverBg: "linear-gradient(135deg, #d35400 0%, #e67e22 50%, #f39c12 100%)",
    accentColor: "#d35400",
    spineTitle: "DUNE",
    formats: {
      paperback: { price: 10.99, origPrice: 18.00, discount: "39% off" },
      hardcover: { price: 24.99, origPrice: 40.00, discount: "37% off" },
      kindle: { price: 9.99, origPrice: 14.99, discount: "33% off" },
      audiobook: { price: 0.00, origPrice: 25.00, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Ace; Deluxe edition (October 1, 2019)",
    pages: 688,
    isbn: "978-0441013593",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange, a drug capable of extending life and enhancing consciousness. A stunning blend of adventure and mysticism, environmentalism and politics.",
    excerpt: `A beginning is the time for taking the most delicate care that the balances are correct. This every sister of the Bene Gesserit knows. To begin your study of the life of Muad'Dib, then, take care that you first place him in his time: born in the 57th year of the Padishah Emperor, Shaddam IV. And take the most special care that you locate him in his place: the planet Arrakis. Do not be deceived by the fact that he was born on Caladan and lived his first fifteen years there. Arrakis, the planet known as Dune, is forever his place.`
  },
  {
    id: "amz-007",
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "David Thomas & Andrew Hunt",
    category: "tech",
    categoryLabel: "Programming & Tech",
    badge: "badge-editor",
    badgeText: "Editor's Pick",
    rating: 4.9,
    reviewsCount: 14200,
    coverBg: "linear-gradient(135deg, #3a6073 0%, #3a7bd5 100%)",
    accentColor: "#3a7bd5",
    spineTitle: "PRAGMATIC PROGRAMMER",
    formats: {
      paperback: { price: 39.99, origPrice: 59.99, discount: "33% off" },
      hardcover: { price: 52.00, origPrice: 70.00, discount: "26% off" },
      kindle: { price: 28.50, origPrice: 45.00, discount: "36% off" },
      audiobook: { price: 18.00, origPrice: 32.00, discount: "43% off" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "Only 2 left in stock - order soon",
    stockClass: "stock-low",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Addison-Wesley Professional; 20th Anniversary Edition",
    pages: 352,
    isbn: "978-0135957059",
    description: "The Pragmatic Programmer is one of the most significant books in computer science. Written by veteran developers Dave Thomas and Andy Hunt, this 20th Anniversary Edition illustrates best practices and timeless advice on software architecture, tooling, refactoring, and career development.",
    excerpt: `Preface to the 20th Anniversary Edition

What makes a pragmatic programmer? A pragmatic programmer takes charge of their own career and isn't afraid to admit ignorance or error. They build great software not by brute force, but through continuous reflection, refinement, and curiosity.

Software craftsmanship is a continuous craft. In this book, we will explore practical tips from dry code to orthogonal architectures, helping you stay effective and joyous throughout your career.`
  },
  {
    id: "amz-008",
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    category: "self-help",
    categoryLabel: "Self-Help & Mindset",
    badge: "badge-choice",
    badgeText: "Amazon's Choice",
    rating: 4.7,
    reviewsCount: 39500,
    coverBg: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
    accentColor: "#e74c3c",
    spineTitle: "DEEP WORK",
    formats: {
      paperback: { price: 14.50, origPrice: 24.00, discount: "40% off" },
      hardcover: { price: 19.99, origPrice: 30.00, discount: "33% off" },
      kindle: { price: 9.99, origPrice: 15.99, discount: "37% off" },
      audiobook: { price: 0.00, origPrice: 21.00, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Grand Central Publishing (January 5, 2016)",
    pages: 304,
    isbn: "978-1455586691",
    description: "Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time. Cal Newport explains how this superpower creates immense value in the modern economy.",
    excerpt: `Introduction

In the Swiss canton of St. Gallen, near the northern banks of Lake Zurich, sits a two-story stone tower. It is here that Carl Jung, one of the founders of modern psychiatry, escaped the noise of the world to perform his most critical work.

Jung did not enter the woods to retreat from society; he went there to build an environment where deep, undisturbed thinking was possible. Today, in our hyper-connected world, deep work is rare—and precisely because it is rare, it is extraordinarily valuable.`
  },
  {
    id: "amz-009",
    title: "System Design Interview – An Insider's Guide (Volume 1)",
    author: "Alex Xu",
    category: "tech",
    categoryLabel: "Programming & Tech",
    badge: "badge-bestseller",
    badgeText: "#1 in Systems Analysis",
    rating: 4.8,
    reviewsCount: 19300,
    coverBg: "linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)",
    accentColor: "#1f4037",
    spineTitle: "SYSTEM DESIGN",
    formats: {
      paperback: { price: 29.99, origPrice: 39.99, discount: "25% off" },
      hardcover: { price: 42.00, origPrice: 55.00, discount: "24% off" },
      kindle: { price: 19.99, origPrice: 28.00, discount: "29% off" },
      audiobook: { price: 12.00, origPrice: 20.00, discount: "40% off" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Independently published (June 12, 2020)",
    pages: 322,
    isbn: "979-8664653403",
    description: "The system design interview is considered to be the most difficult and ambiguous technical interview by many software engineers. This book provides a step-by-step framework to approach system design questions alongside 16 real-world design problems including YouTube, Chat System, URL Shortener, and Rate Limiter.",
    excerpt: `Chapter 1: Scale From Zero To Millions Of Users

Designing a system that supports millions of users is a challenging journey. You don't build a complex distributed system on day one. You start with a single server setup, discover bottlenecks, and iterate.

Step 1: Single Server Setup. Everything runs on one box: web app, database, and cache. As traffic grows, separate the web tier from the database tier. This allows them to scale independently.`
  },
  {
    id: "amz-010",
    title: "The Midnight Library: A Novel",
    author: "Matt Haig",
    category: "fiction",
    categoryLabel: "Fiction & Novels",
    badge: "badge-bestseller",
    badgeText: "#1 Best Seller",
    rating: 4.6,
    reviewsCount: 145000,
    coverBg: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    accentColor: "#3498db",
    spineTitle: "THE MIDNIGHT LIBRARY",
    formats: {
      paperback: { price: 12.49, origPrice: 26.00, discount: "52% off" },
      hardcover: { price: 18.00, origPrice: 28.00, discount: "35% off" },
      kindle: { price: 8.99, origPrice: 13.99, discount: "36% off" },
      audiobook: { price: 0.00, origPrice: 23.00, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Viking (September 29, 2020)",
    pages: 304,
    isbn: "978-0525559474",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    excerpt: `Nineteen Years Before She Decided to Die

Nineteen years before she decided to die, Nora Seed sat in the warmth of the small library at Hazeldene School in the town of Bedford.
She sat at a low table staring at a chessboard.
"Mrs. Elm," she said. "Is it always your move?"
The librarian smiled, pushing a pawn forward. "In life, Nora, it is always your move. You just have to know which square to step on."`
  },
  {
    id: "amz-011",
    title: "Zero to One: Notes on Startups, or How to Build the Future",
    author: "Peter Thiel & Blake Masters",
    category: "business",
    categoryLabel: "Business & Finance",
    badge: "badge-deal",
    badgeText: "Deal of the Day",
    rating: 4.7,
    reviewsCount: 31200,
    coverBg: "linear-gradient(135deg, #000428 0%, #004e92 100%)",
    accentColor: "#004e92",
    spineTitle: "ZERO TO ONE",
    formats: {
      paperback: { price: 13.50, origPrice: 27.00, discount: "50% off" },
      hardcover: { price: 17.99, origPrice: 28.00, discount: "36% off" },
      kindle: { price: 9.99, origPrice: 14.99, discount: "33% off" },
      audiobook: { price: 0.00, origPrice: 20.00, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Crown Currency (September 16, 2014)",
    pages: 224,
    isbn: "978-0804139298",
    description: "If you want to build a better future, you must believe in secrets. The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things.",
    excerpt: `Chapter 1: The Challenge of the Future

Whenever I interview someone for a job, I like to ask this question: "What important truth do very few people agree with you on?"
This question sounds simple because it's straightforward. Actually, it's very hard to answer. It is intellectually difficult because the knowledge that everyone is taught in school is by definition agreed upon. And it is psychologically difficult because anyone who tries to answer must say something she knows is unpopular.`
  },
  {
    id: "amz-012",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "self-help",
    categoryLabel: "Self-Help & Mindset",
    badge: "badge-choice",
    badgeText: "Amazon's Choice",
    rating: 4.6,
    reviewsCount: 52100,
    coverBg: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    accentColor: "#f1c40f",
    spineTitle: "THINKING, FAST & SLOW",
    formats: {
      paperback: { price: 14.80, origPrice: 22.00, discount: "33% off" },
      hardcover: { price: 22.50, origPrice: 35.00, discount: "35% off" },
      kindle: { price: 9.99, origPrice: 15.00, discount: "33% off" },
      audiobook: { price: 0.00, origPrice: 24.00, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Farrar, Straus and Giroux (April 2, 2013)",
    pages: 512,
    isbn: "978-0374533557",
    description: "In the international bestseller, Thinking, Fast and Slow, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think: System 1 (fast, intuitive) and System 2 (slow, deliberative).",
    excerpt: `Introduction

Every author, I suppose, has in mind a setting in which readers of his or her work could benefit from having read it. Mine is the office watercooler, where opinions are shared and gossip is exchanged.

System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control. System 2 allocates attention to the effortful mental operations that demand it, including complex computations.`
  },
  {
    id: "amz-013",
    title: "Python Crash Course, 3rd Edition: A Hands-On, Project-Based Introduction",
    author: "Eric Matthes",
    category: "tech",
    categoryLabel: "Programming & Tech",
    badge: "badge-bestseller",
    badgeText: "#1 in Python",
    rating: 4.8,
    reviewsCount: 18900,
    coverBg: "linear-gradient(135deg, #283048 0%, #859398 100%)",
    accentColor: "#3498db",
    spineTitle: "PYTHON CRASH COURSE",
    formats: {
      paperback: { price: 27.99, origPrice: 44.99, discount: "38% off" },
      hardcover: { price: 39.00, origPrice: 55.00, discount: "29% off" },
      kindle: { price: 19.99, origPrice: 29.99, discount: "33% off" },
      audiobook: { price: 14.00, origPrice: 24.00, discount: "42% off" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "No Starch Press; 3rd edition (January 10, 2023)",
    pages: 552,
    isbn: "978-1718502703",
    description: "Python Crash Course is the world's best-selling guide to the Python programming language. This fast-paced, thorough introduction will have you writing programs, solving problems, and making things that work in no time.",
    excerpt: `Chapter 1: Getting Started

In this chapter, you'll run your first Python program, hello_world.py. First, you'll need to install a recent version of Python on your computer.

Python is a wonderful language for both beginners and experienced programmers. It is clean, readable, and powerful enough to power NASA calculations, Instagram backend systems, and artificial intelligence pipelines.`
  },
  {
    id: "amz-014",
    title: "Tomorrow, and Tomorrow, and Tomorrow: A Novel",
    author: "Gabrielle Zevin",
    category: "fiction",
    categoryLabel: "Fiction & Novels",
    badge: "badge-editor",
    badgeText: "Editor's Choice",
    rating: 4.5,
    reviewsCount: 68400,
    coverBg: "linear-gradient(135deg, #e53935 0%, #e35d5b 100%)",
    accentColor: "#e53935",
    spineTitle: "TOMORROW & TOMORROW",
    formats: {
      paperback: { price: 14.20, origPrice: 28.00, discount: "49% off" },
      hardcover: { price: 20.00, origPrice: 30.00, discount: "33% off" },
      kindle: { price: 9.99, origPrice: 14.99, discount: "33% off" },
      audiobook: { price: 0.00, origPrice: 22.50, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Knopf (July 5, 2022)",
    pages: 416,
    isbn: "978-0593321201",
    description: "In this exhilarating novel, two friends—often in love, but never lovers—come together as creative partners in the world of video game design, where success brings them fame, joy, tragedy, duplicity, and, ultimately, a kind of immortality.",
    excerpt: `Chapter 1: Sick Kids

Before Mazer invented Mapleworld, he was just Sam Masur, a kid with a shattered foot and a hospital roommate named Sadie Green.
They played Super Mario Bros. in the children's wing of Children's Hospital Los Angeles. Gaming wasn't just play; for Sam, it was the only world where pain had zero gravity.`
  },
  {
    id: "amz-015",
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    author: "David Goggins",
    category: "self-help",
    categoryLabel: "Self-Help & Mindset",
    badge: "badge-bestseller",
    badgeText: "#1 in Motivation",
    rating: 4.9,
    reviewsCount: 97800,
    coverBg: "linear-gradient(135deg, #1e130c 0%, #9a8478 100%)",
    accentColor: "#e67e22",
    spineTitle: "CAN'T HURT ME",
    formats: {
      paperback: { price: 15.99, origPrice: 26.00, discount: "38% off" },
      hardcover: { price: 21.00, origPrice: 32.00, discount: "34% off" },
      kindle: { price: 9.99, origPrice: 16.00, discount: "38% off" },
      audiobook: { price: 0.00, origPrice: 24.00, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Lioncrest Publishing (December 4, 2018)",
    pages: 364,
    isbn: "978-1544512280",
    description: "For David Goggins, childhood was a nightmare—poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes.",
    excerpt: `Introduction

You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential.
Most people quit when they are only at 40 percent of their maximum capacity. When you think you're done, you're only just beginning.`
  },
  {
    id: "amz-016",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "business",
    categoryLabel: "History & Society",
    badge: "badge-choice",
    badgeText: "Amazon's Choice",
    rating: 4.7,
    reviewsCount: 88900,
    coverBg: "linear-gradient(135deg, #373b44 0%, #4286f4 100%)",
    accentColor: "#4286f4",
    spineTitle: "SAPIENS",
    formats: {
      paperback: { price: 16.50, origPrice: 28.00, discount: "41% off" },
      hardcover: { price: 23.00, origPrice: 35.00, discount: "34% off" },
      kindle: { price: 10.99, origPrice: 16.99, discount: "35% off" },
      audiobook: { price: 0.00, origPrice: 25.00, discount: "Free with trial" }
    },
    defaultFormat: "paperback",
    prime: true,
    stock: "In Stock",
    stockClass: "stock-in",
    deliveryDate: "Tomorrow, Oct 6",
    publisher: "Harper; Reprint edition (May 15, 2018)",
    pages: 464,
    isbn: "978-0062316097",
    description: "100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? And how did we come to believe in gods, nations and human rights?",
    excerpt: `Part One: The Cognitive Revolution

About 13.5 billion years ago, matter, energy, time and space came into being in what is known as the Big Bang. The story of these fundamental features of our universe is called physics.

About 300,000 years later, matter and energy started to coalesce into complex structures called atoms, which then combined into molecules. The story of atoms, molecules and their interactions is called chemistry.

About 3.8 billion years ago, on planet Earth, certain molecules combined to form particularly large and intricate structures called organisms. The story of organisms is called biology.`
  }
];

// Initial mock orders to make "Returns & Orders" feel authentic right away!
const INITIAL_ORDERS = [
  {
    orderId: "114-8923481-9218201",
    date: "October 3, 2026",
    total: 28.98,
    status: "Delivered",
    statusMilestone: 4, // 1: Ordered, 2: Dispatched, 3: Out for delivery, 4: Delivered
    deliveryEstimate: "Delivered yesterday at front porch",
    recipient: "Alex Johnson",
    items: [
      {
        id: "amz-001",
        title: "Atomic Habits: An Easy & Proven Way to Build Good Habits",
        author: "James Clear",
        format: "Paperback",
        price: 14.99,
        quantity: 1,
        coverBg: "linear-gradient(135deg, #1b2838 0%, #2a475e 50%, #c7d5e0 100%)"
      },
      {
        id: "amz-004",
        title: "The Psychology of Money",
        author: "Morgan Housel",
        format: "Paperback",
        price: 13.99,
        quantity: 1,
        coverBg: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)"
      }
    ]
  },
  {
    orderId: "114-4720911-3819204",
    date: "October 4, 2026",
    total: 38.99,
    status: "Out for Delivery",
    statusMilestone: 3,
    deliveryEstimate: "Arriving today by 8 PM",
    recipient: "Alex Johnson",
    items: [
      {
        id: "amz-003",
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        format: "Paperback",
        price: 38.99,
        quantity: 1,
        coverBg: "linear-gradient(135deg, #2c3e50 0%, #bdc3c7 100%)"
      }
    ]
  }
];

// 2. Application State Management
class AmazonBooksStore {
  constructor() {
    this.books = BOOKS_DATA;
    this.cart = this.loadCart();
    this.orders = this.loadOrders();
    this.wishlist = this.loadWishlist();
    this.activeCategory = "all";
    this.searchQuery = "";
    this.sortBy = "featured";
    this.selectedBook = null;
    this.currentReaderTheme = "sepia";
    this.currentFontSize = 15;
    this.promoApplied = false;
    this.deliveryZip = "Seattle 98101";
    this.recipientName = "Alex Johnson";

    this.init();
  }

  init() {
    this.renderCategoryChips();
    this.renderBooks();
    this.updateCartBadge();
    this.setupEventListeners();
  }

  // LocalStorage Helpers
  loadCart() {
    try {
      const stored = localStorage.getItem("amz_books_cart");
      return stored ? JSON.parse(stored) : [
        {
          bookId: "amz-002",
          title: "Clean Code: A Handbook of Agile Software Craftsmanship",
          author: "Robert C. Martin",
          format: "paperback",
          formatLabel: "Paperback",
          price: 34.50,
          quantity: 1,
          coverBg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
        }
      ];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    localStorage.setItem("amz_books_cart", JSON.stringify(this.cart));
    this.updateCartBadge();
  }

  loadOrders() {
    try {
      const stored = localStorage.getItem("amz_books_orders");
      return stored ? JSON.parse(stored) : INITIAL_ORDERS;
    } catch (e) {
      return INITIAL_ORDERS;
    }
  }

  saveOrders() {
    localStorage.setItem("amz_books_orders", JSON.stringify(this.orders));
  }

  loadWishlist() {
    try {
      const stored = localStorage.getItem("amz_books_wishlist");
      return stored ? JSON.parse(stored) : ["amz-001"];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    localStorage.setItem("amz_books_wishlist", JSON.stringify(this.wishlist));
  }

  // Setup Event Listeners
  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById("navSearchInput");
    const searchCategory = document.getElementById("searchCategorySelect");
    const searchBtn = document.getElementById("searchSubmitBtn");
    const clearBtn = document.getElementById("searchClearBtn");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (clearBtn) {
          clearBtn.style.display = this.searchQuery ? "block" : "none";
        }
        this.renderBooks();
      });

      searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.renderBooks();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        this.searchQuery = "";
        clearBtn.style.display = "none";
        this.renderBooks();
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        this.renderBooks();
      });
    }

    if (searchCategory) {
      searchCategory.addEventListener("change", (e) => {
        const val = e.target.value;
        this.setCategory(val);
      });
    }

    // Sort select
    const sortSelect = document.getElementById("sortBooksSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.sortBy = e.target.value;
        this.renderBooks();
      });
    }
  }

  // Render Category Chips
  renderCategoryChips() {
    const container = document.getElementById("categoryChipsContainer");
    if (!container) return;

    const categories = [
      { id: "all", label: "All Books" },
      { id: "tech", label: "Programming & Tech" },
      { id: "self-help", label: "Self-Help & Mindset" },
      { id: "business", label: "Business & Finance" },
      { id: "scifi", label: "Sci-Fi & Fantasy" },
      { id: "fiction", label: "Fiction & Novels" }
    ];

    container.innerHTML = categories.map(cat => {
      const count = cat.id === "all" ? this.books.length : this.books.filter(b => b.category === cat.id).length;
      const isActive = this.activeCategory === cat.id ? "active" : "";
      return `
        <button class="chip-btn ${isActive}" onclick="storeApp.setCategory('${cat.id}')">
          <span>${cat.label}</span>
          <span class="chip-count">(${count})</span>
        </button>
      `;
    }).join("");
  }

  setCategory(catId) {
    this.activeCategory = catId;
    
    // Update active state in chips
    const chipBtns = document.querySelectorAll(".chip-btn");
    chipBtns.forEach(btn => {
      const isTarget = btn.getAttribute("onclick").includes(`'${catId}'`);
      btn.classList.toggle("active", isTarget);
    });

    // Sync search category dropdown if applicable
    const catSelect = document.getElementById("searchCategorySelect");
    if (catSelect) {
      catSelect.value = catId;
    }

    this.renderBooks();
  }

  // Filter & Sort Logic
  getFilteredBooks() {
    return this.books.filter(book => {
      // Category filter
      const matchesCategory = this.activeCategory === "all" || book.category === this.activeCategory;
      
      // Search query
      const q = this.searchQuery;
      const matchesQuery = !q || 
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.categoryLabel.toLowerCase().includes(q) ||
        book.description.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    }).sort((a, b) => {
      if (this.sortBy === "price-low") {
        return a.formats.paperback.price - b.formats.paperback.price;
      } else if (this.sortBy === "price-high") {
        return b.formats.paperback.price - a.formats.paperback.price;
      } else if (this.sortBy === "rating") {
        return b.rating - a.rating;
      } else if (this.sortBy === "reviews") {
        return b.reviewsCount - a.reviewsCount;
      }
      return 0; // Default featured
    });
  }

  // Render Store Grid
  renderBooks() {
    const grid = document.getElementById("booksGrid");
    const countText = document.getElementById("resultsCountDisplay");
    if (!grid) return;

    const filtered = this.getFilteredBooks();

    if (countText) {
      countText.innerHTML = `Showing <strong>1-${filtered.length}</strong> of <strong>${this.books.length}</strong> results`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: 8px;">
          <h3 style="font-size: 20px; margin-bottom: 8px;">No books found matching "${this.searchQuery}"</h3>
          <p style="color: var(--amz-text-muted); margin-bottom: 16px;">Try checking your spelling or use more general terms.</p>
          <button class="amz-btn btn-add-cart" style="max-width: 200px; margin: 0 auto;" onclick="storeApp.resetFilters()">
            Clear Filters
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(book => {
      const isWishlisted = this.wishlist.includes(book.id);
      const pbPrice = book.formats.paperback.price.toFixed(2);
      const pbWhole = pbPrice.split(".")[0];
      const pbFraction = pbPrice.split(".")[1];
      const pbOrig = book.formats.paperback.origPrice.toFixed(2);
      const discount = book.formats.paperback.discount;

      return `
        <article class="book-card" data-id="${book.id}">
          <!-- Header Meta -->
          <div class="card-header-meta">
            <span class="amz-badge ${book.badge}">${book.badgeText}</span>
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    title="Add to Wish List"
                    onclick="storeApp.toggleWishlist('${book.id}', this)">
              ${isWishlisted ? '♥' : '♡'}
            </button>
          </div>

          <!-- 3D Book Cover with Look Inside trigger -->
          <div class="book-cover-container" onclick="storeApp.openBookDetail('${book.id}')">
            <div class="book-3d">
              <div class="book-jacket" style="background: ${book.coverBg};">
                <span class="book-jacket-header">AMAZON BESTSELLER</span>
                <h3 class="book-jacket-title">${book.title}</h3>
                <span class="book-jacket-author">${book.author}</span>
              </div>
            </div>
            <span class="look-inside-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              Look Inside
            </span>
          </div>

          <!-- Info Block -->
          <div class="book-card-info">
            <a href="javascript:void(0)" class="book-title-link" onclick="storeApp.openBookDetail('${book.id}')">
              ${book.title}
            </a>
            <div class="book-author-text">
              by <a href="javascript:void(0)">${book.author}</a>
            </div>

            <!-- Rating -->
            <div class="amz-rating-row">
              <div class="stars-outer">
                ${this.renderStars(book.rating)}
              </div>
              <span class="rating-score">${book.rating}</span>
              <a href="javascript:void(0)" class="ratings-count-link" onclick="storeApp.openBookDetail('${book.id}')">
                (${book.reviewsCount.toLocaleString()})
              </a>
            </div>

            <!-- Formats Toggle Pills -->
            <div class="format-pills-row">
              <button class="format-btn active" onclick="storeApp.selectCardFormat(this, '${book.id}', 'paperback')">
                <strong>Paperback</strong>
                <span>$${book.formats.paperback.price.toFixed(2)}</span>
              </button>
              <button class="format-btn" onclick="storeApp.selectCardFormat(this, '${book.id}', 'hardcover')">
                <strong>Hardcover</strong>
                <span>$${book.formats.hardcover.price.toFixed(2)}</span>
              </button>
              <button class="format-btn" onclick="storeApp.selectCardFormat(this, '${book.id}', 'kindle')">
                <strong>Kindle</strong>
                <span>$${book.formats.kindle.price.toFixed(2)}</span>
              </button>
            </div>

            <!-- Price Block -->
            <div class="price-block" id="priceBlock-${book.id}">
              <div class="price-main">
                <span class="price-currency">$</span>
                <span class="price-whole">${pbWhole}</span>
                <span class="price-fraction">${pbFraction}</span>
              </div>
              <div class="original-price-row">
                List Price: <span class="original-price">$${pbOrig}</span>
                <span class="discount-tag">(${discount})</span>
              </div>
            </div>

            <!-- Prime & Delivery -->
            <div class="prime-delivery-row">
              <svg class="prime-logo-svg" viewBox="0 0 54 18">
                <path d="M12.5 13.8c-2.4 0-4.3-.8-5.7-2.3v2H2.3V1.2h4.5v4.5c1.4-1.5 3.3-2.3 5.7-2.3 4.2 0 7.4 3.4 7.4 8.2s-3.2 8.2-7.4 8.2zm-.9-3.7c2.1 0 3.7-1.8 3.7-4.5s-1.6-4.5-3.7-4.5c-2.1 0-3.7 1.8-3.7 4.5s1.6 4.5 3.7 4.5zM22.8 13.5V3.8h4.2v1.5c1-1.2 2.3-1.8 3.8-1.8.4 0 .8.1 1.2.2v4.1c-.5-.2-1.1-.3-1.8-.3-1.8 0-3.1 1.2-3.1 3.5v2.5h-4.3zM34.8 13.5V3.8h4.3v9.7h-4.3zm2.1-11.4c-1.5 0-2.6-1.1-2.6-2.6S35.4-.1 36.9-.1c1.5 0 2.6 1.1 2.6 2.6s-1.1 2.6-2.6 2.6zM42.2 13.5V3.8h4.2v1.4c1.1-1.1 2.6-1.7 4.3-1.7 2.1 0 3.8.9 4.7 2.6 1.3-1.7 3.1-2.6 5.3-2.6 3.6 0 5.8 2.4 5.8 6.7v3.3h-4.3V7.2c0-1.8-.9-2.7-2.4-2.7-1.5 0-2.5 1-2.5 2.8v6.2H53V7.2c0-1.8-.9-2.7-2.4-2.7-1.5 0-2.6 1-2.6 2.8v6.2h-5.8z"/>
              </svg>
              <span class="delivery-text">FREE <strong>${book.deliveryDate}</strong></span>
            </div>

            <div class="stock-status-row ${book.stockClass}">
              ${book.stock}
            </div>

            <!-- Card Actions -->
            <div class="card-actions">
              <button class="amz-btn btn-add-cart" onclick="storeApp.addToCart('${book.id}', 'paperback')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.86 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"/>
                </svg>
                Add to Cart
              </button>
              <button class="amz-btn btn-buy-now" onclick="storeApp.buyNowDirect('${book.id}', 'paperback')">
                Buy Now
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // Format switcher directly on the book card
  selectCardFormat(btn, bookId, format) {
    const parentCard = btn.closest(".book-card");
    if (!parentCard) return;

    // Toggle active state
    parentCard.querySelectorAll(".format-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const book = this.books.find(b => b.id === bookId);
    if (!book || !book.formats[format]) return;

    const data = book.formats[format];
    const priceStr = data.price.toFixed(2);
    const whole = priceStr.split(".")[0];
    const fraction = priceStr.split(".")[1];

    const priceBlock = parentCard.querySelector(`#priceBlock-${bookId}`);
    if (priceBlock) {
      priceBlock.innerHTML = `
        <div class="price-main">
          <span class="price-currency">$</span>
          <span class="price-whole">${whole}</span>
          <span class="price-fraction">${fraction}</span>
        </div>
        <div class="original-price-row">
          List Price: <span class="original-price">$${data.origPrice.toFixed(2)}</span>
          <span class="discount-tag">(${data.discount})</span>
        </div>
      `;
    }

    // Update Add to Cart and Buy Now button handlers
    const addCartBtn = parentCard.querySelector(".btn-add-cart");
    const buyNowBtn = parentCard.querySelector(".btn-buy-now");
    if (addCartBtn) addCartBtn.setAttribute("onclick", `storeApp.addToCart('${book.id}', '${format}')`);
    if (buyNowBtn) buyNowBtn.setAttribute("onclick", `storeApp.buyNowDirect('${book.id}', '${format}')`);
  }

  renderStars(rating) {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.4;
    let starsHtml = "";
    for (let i = 0; i < 5; i++) {
      if (i < full) {
        starsHtml += "★";
      } else if (i === full && hasHalf) {
        starsHtml += "★";
      } else {
        starsHtml += "☆";
      }
    }
    return starsHtml;
  }

  resetFilters() {
    this.searchQuery = "";
    this.activeCategory = "all";
    const searchInput = document.getElementById("navSearchInput");
    if (searchInput) searchInput.value = "";
    this.renderCategoryChips();
    this.renderBooks();
  }

  // Wishlist Toggle
  toggleWishlist(bookId, btn) {
    const index = this.wishlist.indexOf(bookId);
    const book = this.books.find(b => b.id === bookId);

    if (index > -1) {
      this.wishlist.splice(index, 1);
      if (btn) {
        btn.classList.remove("active");
        btn.textContent = "♡";
      }
      this.showToast(`Removed from your Wish List`);
    } else {
      this.wishlist.push(bookId);
      if (btn) {
        btn.classList.add("active");
        btn.textContent = "♥";
      }
      this.showToast(`Added "${book ? book.title.substring(0, 24) + '...' : 'Book'}" to your Wish List`);
    }
    this.saveWishlist();
  }

  // 3. Look Inside & Book Details Modal
  openBookDetail(bookId) {
    const book = this.books.find(b => b.id === bookId);
    if (!book) return;
    this.selectedBook = book;

    const modal = document.getElementById("bookDetailModal");
    const body = document.getElementById("bookDetailModalBody");
    if (!modal || !body) return;

    body.innerHTML = `
      <div class="modal-product-layout">
        <!-- Left: 3D Cover & Previews -->
        <div class="modal-cover-column">
          <div class="book-3d modal-book-3d">
            <div class="book-jacket" style="background: ${book.coverBg};">
              <span class="book-jacket-header">AMAZON BESTSELLER</span>
              <h3 class="book-jacket-title" style="font-size: 19px;">${book.title}</h3>
              <span class="book-jacket-author">${book.author}</span>
            </div>
          </div>
          <div style="margin-top: 18px; text-align: center;">
            <span class="amz-badge ${book.badge}">${book.badgeText}</span>
          </div>
        </div>

        <!-- Middle: Title, Author, Specs, Synopsis -->
        <div class="modal-info-column">
          <h2>${book.title}</h2>
          <div class="modal-author">by <strong style="color: #0f1111;">${book.author}</strong> (Author)</div>
          
          <div class="amz-rating-row" style="margin-bottom: 14px;">
            <div class="stars-outer" style="font-size: 16px;">
              ${this.renderStars(book.rating)}
            </div>
            <strong style="font-size: 14px;">${book.rating} out of 5</strong>
            <span style="color: var(--amz-text-muted);">(${book.reviewsCount.toLocaleString()} ratings)</span>
          </div>

          <div class="modal-description-box">
            ${book.description}
          </div>

          <!-- Specifications Table -->
          <table class="spec-table">
            <tr>
              <td>Publisher</td>
              <td>${book.publisher}</td>
            </tr>
            <tr>
              <td>Print Length</td>
              <td>${book.pages} pages</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>English</td>
            </tr>
            <tr>
              <td>ISBN-10</td>
              <td>${book.isbn}</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>6.14 x 0.9 x 9.21 inches</td>
            </tr>
          </table>
        </div>

        <!-- Right: Buy Box -->
        <div class="modal-buy-box">
          <div class="price-main">
            <span class="price-currency">$</span>
            <span class="price-whole" style="font-size: 26px;">${book.formats.paperback.price.toFixed(2).split('.')[0]}</span>
            <span class="price-fraction">${book.formats.paperback.price.toFixed(2).split('.')[1]}</span>
          </div>
          <div class="original-price-row">
            List Price: <span class="original-price">$${book.formats.paperback.origPrice.toFixed(2)}</span>
            <span class="discount-tag">(${book.formats.paperback.discount})</span>
          </div>

          <div class="prime-delivery-row">
            <span class="delivery-text">FREE delivery <strong>${book.deliveryDate}</strong></span>
          </div>

          <div class="stock-status-row ${book.stockClass}">
            ${book.stock}
          </div>

          <div class="quantity-row">
            <label for="modalQtySelect"><strong>Quantity:</strong></label>
            <select id="modalQtySelect" class="qty-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button class="amz-btn btn-add-cart" onclick="storeApp.addModalToCart('${book.id}')">
            Add to Cart
          </button>
          <button class="amz-btn btn-buy-now" onclick="storeApp.buyModalNow('${book.id}')">
            Buy Now
          </button>

          <div style="font-size: 11px; color: var(--amz-text-muted); border-top: 1px solid #eee; padding-top: 10px; margin-top: 6px;">
            <div>Ships from: <strong>Amazon.com</strong></div>
            <div>Sold by: <strong>Amazon.com</strong></div>
            <div>Returns: <strong>Eligible for 30-day Return</strong></div>
          </div>
        </div>
      </div>

      <!-- Bottom: Look Inside Interactive Excerpt Reader -->
      <div class="sample-reader-section">
        <div class="sample-reader-header">
          <h4 style="font-size: 16px; font-weight: 800; display: flex; align-items: center; gap: 8px;">
            📖 Look Inside / Sample Excerpt
          </h4>
          <div class="sample-controls">
            <button class="font-size-btn" onclick="storeApp.changeFontSize(-1)">Aa-</button>
            <button class="font-size-btn" onclick="storeApp.changeFontSize(1)">Aa+</button>
            <button class="font-size-btn" onclick="storeApp.toggleReaderTheme()">Light / Dark</button>
          </div>
        </div>

        <div class="sample-content-box" id="sampleReaderBox" style="font-size: ${this.currentFontSize}px;">
          <h4>${book.title}</h4>
          <p style="text-align: center; color: var(--amz-text-muted); margin-bottom: 16px; font-size: 13px;">by ${book.author}</p>
          <div style="white-space: pre-line;">${book.excerpt}</div>
        </div>
      </div>
    `;

    modal.classList.add("active");
  }

  closeBookDetail() {
    const modal = document.getElementById("bookDetailModal");
    if (modal) modal.classList.remove("active");
  }

  changeFontSize(delta) {
    this.currentFontSize = Math.min(22, Math.max(12, this.currentFontSize + delta));
    const reader = document.getElementById("sampleReaderBox");
    if (reader) reader.style.fontSize = `${this.currentFontSize}px`;
  }

  toggleReaderTheme() {
    const reader = document.getElementById("sampleReaderBox");
    if (reader) {
      reader.classList.toggle("dark-reader");
    }
  }

  addModalToCart(bookId) {
    const qtySelect = document.getElementById("modalQtySelect");
    const qty = qtySelect ? parseInt(qtySelect.value, 10) : 1;
    this.addToCart(bookId, "paperback", qty);
    this.closeBookDetail();
  }

  buyModalNow(bookId) {
    const qtySelect = document.getElementById("modalQtySelect");
    const qty = qtySelect ? parseInt(qtySelect.value, 10) : 1;
    this.addToCart(bookId, "paperback", qty);
    this.closeBookDetail();
    this.openCheckout();
  }

  // 4. Cart Management
  addToCart(bookId, format = "paperback", quantity = 1) {
    const book = this.books.find(b => b.id === bookId);
    if (!book) return;

    const formatData = book.formats[format] || book.formats.paperback;
    const formatName = format.charAt(0).toUpperCase() + format.slice(1);

    const existingIndex = this.cart.findIndex(item => item.bookId === bookId && item.format === format);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        bookId: book.id,
        title: book.title,
        author: book.author,
        format: format,
        formatLabel: formatName,
        price: formatData.price,
        quantity: quantity,
        coverBg: book.coverBg
      });
    }

    this.saveCart();
    this.showToast(`Added "${book.title.substring(0, 26)}..." to cart!`, true);
  }

  buyNowDirect(bookId, format = "paperback") {
    this.addToCart(bookId, format, 1);
    this.openCheckout();
  }

  updateCartBadge() {
    const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById("navCartCount");
    if (badge) {
      badge.textContent = count;
      badge.style.display = "block";
    }
  }

  openCart() {
    this.renderCartDrawer();
    const overlay = document.getElementById("cartDrawerOverlay");
    if (overlay) overlay.classList.add("active");
  }

  closeCart() {
    const overlay = document.getElementById("cartDrawerOverlay");
    if (overlay) overlay.classList.remove("active");
  }

  renderCartDrawer() {
    const itemsContainer = document.getElementById("cartItemsContainer");
    const subtotalText = document.getElementById("cartSubtotalAmount");
    const progressFill = document.getElementById("freeShippingProgressFill");
    const progressText = document.getElementById("freeShippingTextMsg");
    if (!itemsContainer) return;

    if (this.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-message">
          <svg viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.86 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>
          </svg>
          <h4 style="font-size: 16px; margin-bottom: 6px;">Your Amazon Cart is empty</h4>
          <p style="font-size: 13px;">Shop today's bestselling books or browse your saved items.</p>
        </div>
      `;
      if (subtotalText) subtotalText.textContent = "$0.00";
      if (progressFill) progressFill.style.width = "0%";
      if (progressText) progressText.innerHTML = `Add $25.00 more for <strong>FREE Delivery</strong>`;
      return;
    }

    let subtotal = 0;

    itemsContainer.innerHTML = this.cart.map((item, index) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;

      return `
        <div class="cart-item-card">
          <div class="cart-item-cover" style="background: ${item.coverBg};">
            ${item.title.substring(0, 18)}...
          </div>
          <div class="cart-item-info">
            <div>
              <h4 class="cart-item-title">${item.title}</h4>
              <div class="cart-item-format">${item.formatLabel} • by ${item.author}</div>
            </div>
            <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
            <div class="cart-item-actions">
              <div class="qty-counter">
                <button onclick="storeApp.changeCartQty(${index}, -1)">−</button>
                <span>${item.quantity}</span>
                <button onclick="storeApp.changeCartQty(${index}, 1)">+</button>
              </div>
              <button class="cart-item-delete" onclick="storeApp.removeCartItem(${index})">Delete</button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    if (this.promoApplied) {
      subtotal = subtotal * 0.8; // 20% off
    }

    if (subtotalText) subtotalText.textContent = `$${subtotal.toFixed(2)}`;

    // Free shipping threshold ($25)
    const threshold = 25.0;
    if (subtotal >= threshold) {
      if (progressFill) progressFill.style.width = "100%";
      if (progressText) progressText.innerHTML = `🎉 Qualified for <strong>FREE Prime Delivery</strong>`;
    } else {
      const diff = (threshold - subtotal).toFixed(2);
      const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (progressText) progressText.innerHTML = `Add <strong>$${diff}</strong> more for <strong>FREE Delivery</strong>`;
    }
  }

  changeCartQty(index, delta) {
    if (!this.cart[index]) return;
    this.cart[index].quantity += delta;
    if (this.cart[index].quantity <= 0) {
      this.cart.splice(index, 1);
    }
    this.saveCart();
    this.renderCartDrawer();
  }

  removeCartItem(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    this.renderCartDrawer();
    this.showToast("Item removed from your cart");
  }

  applyPromoCode() {
    const input = document.getElementById("promoCodeInput");
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (code === "BOOK20") {
      this.promoApplied = true;
      this.showToast("Coupon BOOK20 applied! 20% discount granted.");
      this.renderCartDrawer();
    } else {
      alert("Invalid code! Try using coupon: BOOK20");
    }
  }

  // 5. Amazon 1-Click Checkout Flow
  openCheckout() {
    if (this.cart.length === 0) {
      alert("Your cart is empty! Add books to proceed.");
      return;
    }

    this.closeCart();
    const modal = document.getElementById("checkoutModal");
    const container = document.getElementById("checkoutStepsContainer");
    if (!modal || !container) return;

    let subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = this.promoApplied ? (subtotal * 0.2) : 0;
    let shipping = subtotal >= 25 ? 0 : 4.99;
    let tax = (subtotal - discount) * 0.08;
    let orderTotal = (subtotal - discount) + shipping + tax;

    container.innerHTML = `
      <div class="checkout-steps-container">
        <!-- Step 1: Shipping Address -->
        <div class="checkout-step-card">
          <div class="checkout-step-header">
            <span class="step-num-badge">1</span>
            <h4>Delivery Address</h4>
          </div>
          <div class="address-form-grid">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" id="chkFullName" value="${this.recipientName}">
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input type="text" id="chkPhone" value="+1 (555) 234-8901">
            </div>
            <div class="form-group" style="grid-column: span 2;">
              <label>Street Address</label>
              <input type="text" id="chkStreet" value="410 Terry Ave N">
            </div>
            <div class="form-group">
              <label>City & ZIP</label>
              <input type="text" id="chkCityZip" value="Seattle, WA 98109">
            </div>
            <div class="form-group">
              <label>Delivery Instructions</label>
              <input type="text" placeholder="Leave at front door / porch">
            </div>
          </div>
        </div>

        <!-- Step 2: Payment Method -->
        <div class="checkout-step-card">
          <div class="checkout-step-header">
            <span class="step-num-badge">2</span>
            <h4>Payment Method</h4>
          </div>
          <div class="payment-options-list">
            <label class="payment-option-row active" onclick="storeApp.selectPayment(this)">
              <input type="radio" name="amzPayMethod" checked>
              <div>
                <strong>Amazon Pay Balance</strong>
                <span style="font-size: 12px; color: var(--amz-green); margin-left: 6px;">(Available: $250.00)</span>
              </div>
            </label>
            <label class="payment-option-row" onclick="storeApp.selectPayment(this)">
              <input type="radio" name="amzPayMethod">
              <div>
                <strong>Prime Visa ending in •••• 4242</strong>
                <span style="font-size: 12px; color: var(--amz-text-muted); margin-left: 6px;">(Earn 5% back on Amazon.com)</span>
              </div>
            </label>
            <label class="payment-option-row" onclick="storeApp.selectPayment(this)">
              <input type="radio" name="amzPayMethod">
              <div>
                <strong>Cash on Delivery (COD) / Pay on Delivery</strong>
              </div>
            </label>
          </div>
        </div>

        <!-- Step 3: Review Items & Place Order -->
        <div class="checkout-step-card">
          <div class="checkout-step-header">
            <span class="step-num-badge">3</span>
            <h4>Review Items and Delivery</h4>
          </div>

          <div style="font-size: 13px; margin-bottom: 12px; color: var(--amz-green); font-weight: 700;">
            🚚 Guaranteed FREE One-Day Prime Delivery Tomorrow, Oct 6
          </div>

          <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 16px;">
            ${this.cart.map(item => `
              <div style="width: 70px; height: 95px; background: ${item.coverBg}; border-radius: 4px; padding: 4px; color: #fff; font-size: 9px; font-weight: 700; flex-shrink: 0; display: flex; align-items: center; justify-content: center; text-align: center;">
                ${item.title.substring(0, 16)}...
              </div>
            `).join("")}
          </div>

          <!-- Summary Breakdown -->
          <div class="checkout-summary-box">
            <div class="summary-row">
              <span>Items Subtotal (${this.cart.reduce((s, i) => s + i.quantity, 0)} items):</span>
              <span>$${subtotal.toFixed(2)}</span>
            </div>
            ${this.promoApplied ? `
              <div class="summary-row" style="color: var(--amz-green);">
                <span>Promotion Discount (BOOK20):</span>
                <span>-$${discount.toFixed(2)}</span>
              </div>
            ` : ''}
            <div class="summary-row">
              <span>Shipping & Handling:</span>
              <span>${shipping === 0 ? '<strong style="color: var(--amz-green);">FREE</strong>' : '$' + shipping.toFixed(2)}</span>
            </div>
            <div class="summary-row">
              <span>Estimated Tax to be collected:</span>
              <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="summary-row total">
              <span>Order Total:</span>
              <span>$${orderTotal.toFixed(2)}</span>
            </div>
          </div>

          <button class="amz-btn btn-buy-now" style="padding: 12px; font-size: 15px; margin-top: 16px;" onclick="storeApp.completeOrder()">
            Place Your Order and Pay
          </button>
          <div style="text-align: center; font-size: 11px; color: var(--amz-text-muted); margin-top: 8px;">
            By placing your order, you agree to Amazon's Conditions of Use and Sale.
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");
  }

  selectPayment(row) {
    document.querySelectorAll(".payment-option-row").forEach(r => r.classList.remove("active"));
    row.classList.add("active");
  }

  closeCheckout() {
    const modal = document.getElementById("checkoutModal");
    if (modal) modal.classList.remove("active");
  }

  completeOrder() {
    const randomOrderId = `408-${Math.floor(1000000 + Math.random() * 9000000)}-${Math.floor(1000000 + Math.random() * 9000000)}`;
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

    let subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (this.promoApplied) subtotal *= 0.8;
    const finalTotal = subtotal * 1.08;

    const newOrder = {
      orderId: randomOrderId,
      date: dateStr,
      total: parseFloat(finalTotal.toFixed(2)),
      status: "Order Placed",
      statusMilestone: 1, // 1: Order Placed
      deliveryEstimate: "Arriving Tomorrow by 8 PM",
      recipient: this.recipientName,
      items: [...this.cart]
    };

    // Prepend new order to list
    this.orders.unshift(newOrder);
    this.saveOrders();

    // Clear cart
    this.cart = [];
    this.promoApplied = false;
    this.saveCart();

    // Render Order Confirmation
    const container = document.getElementById("checkoutStepsContainer");
    if (container) {
      container.innerHTML = `
        <div class="order-success-screen">
          <div class="success-check-icon">✓</div>
          <h2>Order Placed, thank you!</h2>
          <p style="font-size: 14px; color: var(--amz-text-muted); margin-bottom: 12px;">
            Confirmation will be sent to your registered email address.
          </p>
          <div class="order-id-badge">Order #${randomOrderId}</div>

          <div style="background-color: #f7fafa; border: 1px solid var(--amz-border); border-radius: 8px; padding: 18px; max-width: 500px; margin: 0 auto 20px auto; text-align: left;">
            <div style="font-weight: 700; color: var(--amz-green); margin-bottom: 6px;">
              🚚 Guaranteed Delivery: Tomorrow by 8 PM
            </div>
            <div style="font-size: 13px; color: var(--amz-text-muted);">
              Shipping to: <strong>${this.recipientName}</strong>, Seattle, WA
            </div>
          </div>

          <div style="display: flex; gap: 12px; justify-content: center; max-width: 400px; margin: 0 auto;">
            <button class="amz-btn btn-add-cart" onclick="storeApp.closeCheckout(); storeApp.openOrdersModal();">
              View & Track Your Order
            </button>
            <button class="amz-btn" style="background: #e3e6e6;" onclick="storeApp.closeCheckout();">
              Continue Shopping
            </button>
          </div>
        </div>
      `;
    }

    this.showToast("🎉 Order placed successfully!");
  }

  // 6. Returns & Orders View / Modal
  openOrdersModal() {
    const modal = document.getElementById("ordersModal");
    const container = document.getElementById("ordersListContainer");
    if (!modal || !container) return;

    if (this.orders.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--amz-text-muted);">
          <h3>You have no past orders yet.</h3>
          <p>Once you order books, you can track packages and request returns here.</p>
        </div>
      `;
    } else {
      container.innerHTML = this.orders.map(order => {
        return `
          <div class="order-history-card">
            <!-- Header -->
            <div class="order-card-header">
              <div class="order-header-meta">
                <div class="order-meta-col">
                  <span>Order Placed</span>
                  <strong>${order.date}</strong>
                </div>
                <div class="order-meta-col">
                  <span>Total</span>
                  <strong>$${order.total.toFixed(2)}</strong>
                </div>
                <div class="order-meta-col">
                  <span>Ship To</span>
                  <strong style="color: var(--amz-blue-link);">${order.recipient} ▾</strong>
                </div>
              </div>
              <div class="order-meta-col" style="text-align: right;">
                <span>Order # ${order.orderId}</span>
                <a href="javascript:void(0)" onclick="storeApp.showToast('Invoice downloaded (PDF)')">View Invoice</a>
              </div>
            </div>

            <!-- Body -->
            <div class="order-card-body">
              <h3 style="font-size: 17px; font-weight: 800; color: ${order.statusMilestone === 4 ? 'var(--amz-green)' : 'var(--amz-text-dark)'};">
                ${order.status}: ${order.deliveryEstimate}
              </h3>

              <!-- Interactive Milestone Tracker -->
              <div class="order-tracker-bar">
                <div class="tracker-step ${order.statusMilestone >= 1 ? (order.statusMilestone > 1 ? 'completed' : 'active') : ''}">
                  <div class="tracker-dot">${order.statusMilestone > 1 ? '✓' : '1'}</div>
                  <span>Ordered</span>
                </div>
                <div class="tracker-step ${order.statusMilestone >= 2 ? (order.statusMilestone > 2 ? 'completed' : 'active') : ''}">
                  <div class="tracker-dot">${order.statusMilestone > 2 ? '✓' : '2'}</div>
                  <span>Dispatched</span>
                </div>
                <div class="tracker-step ${order.statusMilestone >= 3 ? (order.statusMilestone > 3 ? 'completed' : 'active') : ''}">
                  <div class="tracker-dot">${order.statusMilestone > 3 ? '✓' : '3'}</div>
                  <span>Out for Delivery</span>
                </div>
                <div class="tracker-step ${order.statusMilestone >= 4 ? 'completed' : ''}">
                  <div class="tracker-dot">${order.statusMilestone >= 4 ? '✓' : '4'}</div>
                  <span>Delivered</span>
                </div>
              </div>

              <!-- Items in this order -->
              ${order.items.map(item => `
                <div class="order-product-row">
                  <div class="order-product-left">
                    <div class="order-product-cover" style="background: ${item.coverBg};">
                      ${item.title.substring(0, 16)}...
                    </div>
                    <div>
                      <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 2px;">${item.title}</h4>
                      <div style="font-size: 12px; color: var(--amz-text-muted);">Format: ${item.format || 'Paperback'} | Qty: ${item.quantity}</div>
                      <div style="font-size: 13px; font-weight: 700; color: var(--amz-red); margin-top: 4px;">$${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>

                  <div class="order-actions-buttons">
                    <button class="amz-btn btn-add-cart" onclick="storeApp.buyAgain('${item.id || item.bookId}', '${item.format || 'paperback'}')">
                      Buy it again
                    </button>
                    <button class="amz-btn" style="background: #f0f2f2;" onclick="storeApp.requestReturn('${order.orderId}', '${item.title.replace(/'/g, "\\'")}')">
                      Return or Replace Items
                    </button>
                    <button class="amz-btn" style="background: #f0f2f2;" onclick="storeApp.writeReview('${item.title.replace(/'/g, "\\'")}')">
                      Write a Product Review
                    </button>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `;
      }).join("");
    }

    modal.classList.add("active");
  }

  closeOrdersModal() {
    const modal = document.getElementById("ordersModal");
    if (modal) modal.classList.remove("active");
  }

  buyAgain(bookId, format) {
    this.addToCart(bookId, format, 1);
    this.showToast("Item re-added to your cart!");
    this.closeOrdersModal();
    this.openCart();
  }

  requestReturn(orderId, bookTitle) {
    const reason = prompt(`Request Return for "${bookTitle}"\n\nPlease enter return reason:\n1. Defective or damaged\n2. Wrong item sent\n3. No longer needed\n4. Performance not adequate`, "No longer needed");
    if (reason) {
      alert(`✅ Return Authorized for Order #${orderId}!\n\nReturn Pickup has been scheduled for tomorrow.\nA prepaid shipping label has been sent to your email. Refund will be credited to Amazon Pay Balance.`);
      this.showToast("Return label generated successfully.");
    }
  }

  writeReview(bookTitle) {
    const rating = prompt(`Write a Review for:\n${bookTitle}\n\nEnter rating (1 to 5 stars):`, "5");
    if (rating) {
      const text = prompt("Write your headline and comments:", "Outstanding read, highly recommended!");
      if (text) {
        alert("Thank you! Your verified customer review has been submitted to Amazon Books.");
        this.showToast("Review submitted successfully! Thank you.");
      }
    }
  }

  // 7. Hamburger Side Menu ("All" Menu)
  openSideMenu() {
    const overlay = document.getElementById("sideMenuOverlay");
    if (overlay) overlay.classList.add("active");
  }

  closeSideMenu() {
    const overlay = document.getElementById("sideMenuOverlay");
    if (overlay) overlay.classList.remove("active");
  }

  // 8. Delivery Location Modal
  openLocationModal() {
    const newZip = prompt("Enter US Zip Code or City to update delivery location:", this.deliveryZip);
    if (newZip && newZip.trim()) {
      this.deliveryZip = newZip.trim();
      const deliverText = document.getElementById("navDeliverLocationText");
      if (deliverText) deliverText.textContent = this.deliveryZip;
      this.showToast(`Delivery location updated to: ${this.deliveryZip}`);
    }
  }

  // 9. Toast Notifications
  showToast(message, withCartBtn = false) {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <span>${message}</span>
      ${withCartBtn ? `<button class="toast-btn" onclick="storeApp.openCart()">View Cart</button>` : ''}
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "opacity 0.3s, transform 0.3s";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// Global initialization
let storeApp;
document.addEventListener("DOMContentLoaded", () => {
  storeApp = new AmazonBooksStore();
});
