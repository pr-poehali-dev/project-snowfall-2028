import { createContext, useContext, useState, type ReactNode } from "react"

export type Lang = "ru" | "en"

export const translations = {
  ru: {
    nav: ["Главная", "Квесты", "Возможности", "О платформе", "Тарифы", "Попробовать"],
    navCta: "Начать бесплатно",
    hero: {
      badge: "🎮 Поколение Z — добро пожаловать в финансы",
      title: "Инвестиции как игра — для тех, кто родился в цифре",
      subtitle: "Квесты «Финансовый герой», мемы, рейтинги и призы вместо скучных лекций. Учишься инвестировать — на виртуальной валюте, в реальных ситуациях.",
      cta: "Начать игру",
      ctaSecondary: "Как это работает",
      scroll: "Листайте вправо",
    },
    work: {
      title: "Квесты",
      subtitle: "/ Учись через игру",
      items: [
        { number: "01", title: "Финансовый герой", category: "Диверсификация · выбирай стратегию · получай награды за успехи", year: "free", direction: "left" },
        { number: "02", title: "Почему деньги любят время?", category: "Сложный процент · 100 руб. сегодня = 5 000 руб. через 5 лет", year: "free", direction: "right" },
        { number: "03", title: "Волшебное дерево", category: "Регулярные вклады · бонусы за каждый взнос · симулятор роста", year: "free", direction: "left" },
        { number: "04", title: "Криптовалютный хакатон", category: "Продвинутый симулятор · 16+ лет · только Premium", year: "pro", direction: "right" },
      ],
    },
    services: {
      title: "Возможности",
      subtitle: "/ Почему это работает",
      items: [
        { title: "Анимированный помощник", description: "Персонаж в стиле Among Us объясняет сложные термины простым языком — с примерами из поп‑культуры: акции = подписка на сериал, крипта = редкий скин в Fortnite", direction: "top" },
        { title: "Виртуальный портфель", description: "Торгуй без риска для реальных денег: портфель «цветёт» при успехе и даёт подсказки, если что‑то идёт не так", direction: "right" },
        { title: "Stories‑уроки", description: "Ежедневные 5‑минутные видео с жизненными примерами — закрепляй знания без перегрузки", direction: "left" },
        { title: "Родительский контроль", description: "Родители отслеживают прогресс через отдельный аккаунт. Все сделки — только с их согласия. Валюта — виртуальная", direction: "bottom" },
      ],
    },
    about: {
      titleLine1: "Не просто",
      titleLine2: "обучение —",
      titleLine3: "экосистема",
      p1: "89% подростков бросают обучение из‑за скучных форматов — но 73% хотят инвестировать. InvestFuture закрывает этот разрыв.",
      p2: "Мы не читаем лекции — мы вовлекаем, мотивируем и формируем новое поколение финансово грамотных людей. Подростки учатся на ошибках без риска для реальных денег.",
      stats: [
        { value: "10 000", label: "Активных пользователей", sublabel: "Цель на первый год работы", direction: "right" },
        { value: "70%", label: "Освоят базовые концепции", sublabel: "Финансовой грамотности и инвестирования", direction: "left" },
        { value: "18 мес", label: "Окупаемость", sublabel: "Выручка 5 млн руб. в год от подписок и рекламы", direction: "right" },
      ],
      ctaPrimary: "Зарегистрироваться",
      ctaSecondary: "Смотреть модули",
    },
    pricing: {
      title: "Тарифы",
      subtitle: "/ Начни бесплатно, расти с Premium",
      freeLabel: "Бесплатно",
      freePeriod: "/ навсегда",
      proLabel: "Premium",
      proPeriod: "/ месяц",
      popular: "Популярный",
      proNote: "Окупаемость платформы — 18 месяцев при 10 000 пользователей",
      freeFeatures: [
        "Квест «Финансовый герой»",
        "Квест «Почему деньги любят время?»",
        "Виртуальный портфель",
        "Анимированный помощник",
        "Ежедневные Stories‑уроки",
        "Родительский контроль",
      ],
      proFeatures: [
        "Всё из бесплатного плана",
        "Симулятор «Криптовалютный хакатон»",
        "Квест «Волшебное дерево» — продвинутый",
        "Участие в рейтинге топ‑10",
        "Призы: Spotify, Discord Nitro, AirPods",
        "Партнёрские предложения от брокеров",
      ],
      ctaFree: "Начать бесплатно",
      ctaPro: "Попробовать Premium",
    },
    contact: {
      titleLine1: "Стань",
      titleLine2: "частью",
      subtitle: "/ Нового поколения финансово грамотных людей",
      emailLabel: "Email",
      platformLabel: "Платформа",
      platformValue: "Веб + мобильное приложение",
      socials: ["Telegram", "VK", "TikTok", "Instagram"],
      nameLabel: "Имя",
      namePlaceholder: "Твоё имя или ник",
      emailFieldLabel: "Email",
      messageLabel: "Вопрос или комментарий",
      messagePlaceholder: "Расскажи о себе или задай вопрос...",
      submit: "Зарегистрироваться сейчас",
      submitting: "Отправка...",
      success: "Заявка отправлена! Скоро свяжемся 🚀",
    },
  },
  en: {
    nav: ["Home", "Quests", "Features", "About", "Pricing", "Get Started"],
    navCta: "Start for Free",
    hero: {
      badge: "🎮 Generation Z — welcome to finance",
      title: "Investing as a game — for those born in the digital age",
      subtitle: "Quests, memes, leaderboards and prizes instead of boring lectures. Learn to invest — with virtual currency, in real-life scenarios.",
      cta: "Start Playing",
      ctaSecondary: "How it works",
      scroll: "Scroll right",
    },
    work: {
      title: "Quests",
      subtitle: "/ Learn through play",
      items: [
        { number: "01", title: "Financial Hero", category: "Diversification · choose your strategy · earn rewards for success", year: "free", direction: "left" },
        { number: "02", title: "Why does money love time?", category: "Compound interest · 100 today = 5 000 in 5 years", year: "free", direction: "right" },
        { number: "03", title: "Magic Tree", category: "Regular contributions · bonuses for every deposit · growth simulator", year: "free", direction: "left" },
        { number: "04", title: "Crypto Hackathon", category: "Advanced simulator · 16+ years · Premium only", year: "pro", direction: "right" },
      ],
    },
    services: {
      title: "Features",
      subtitle: "/ Why it works",
      items: [
        { title: "Animated Assistant", description: "An Among Us‑style character explains complex terms in plain language — with pop‑culture examples: stocks = Netflix subscription, crypto = rare Fortnite skin", direction: "top" },
        { title: "Virtual Portfolio", description: "Trade without risking real money: your portfolio 'blooms' on success and gives hints when things go wrong", direction: "right" },
        { title: "Stories Lessons", description: "Daily 5‑minute videos with real‑life examples — reinforce knowledge without overload", direction: "left" },
        { title: "Parental Controls", description: "Parents track progress via a separate account. All transactions require their consent. Currency is virtual", direction: "bottom" },
      ],
    },
    about: {
      titleLine1: "Not just",
      titleLine2: "learning —",
      titleLine3: "an ecosystem",
      p1: "89% of teenagers quit learning due to boring formats — but 73% want to invest. InvestFuture bridges that gap.",
      p2: "We don't lecture — we engage, motivate and shape a new generation of financially literate people. Teens learn from mistakes without risking real money.",
      stats: [
        { value: "10 000", label: "Active users", sublabel: "Goal for the first year", direction: "right" },
        { value: "70%", label: "Master the basics", sublabel: "Financial literacy and investing concepts", direction: "left" },
        { value: "18 mo", label: "Break‑even", sublabel: "Revenue of 5M RUB/year from subscriptions & ads", direction: "right" },
      ],
      ctaPrimary: "Sign Up",
      ctaSecondary: "View Quests",
    },
    pricing: {
      title: "Pricing",
      subtitle: "/ Start free, grow with Premium",
      freeLabel: "Free",
      freePeriod: "/ forever",
      proLabel: "Premium",
      proPeriod: "/ month",
      popular: "Popular",
      proNote: "Platform break‑even — 18 months at 10 000 users",
      freeFeatures: [
        "Quest «Financial Hero»",
        "Quest «Why does money love time?»",
        "Virtual portfolio",
        "Animated assistant",
        "Daily Stories lessons",
        "Parental controls",
      ],
      proFeatures: [
        "Everything in Free",
        "«Crypto Hackathon» simulator",
        "Advanced «Magic Tree» quest",
        "Top‑10 leaderboard access",
        "Prizes: Spotify, Discord Nitro, AirPods",
        "Broker partner offers",
      ],
      ctaFree: "Start for Free",
      ctaPro: "Try Premium",
    },
    contact: {
      titleLine1: "Join",
      titleLine2: "the future",
      subtitle: "/ A new generation of financially literate people",
      emailLabel: "Email",
      platformLabel: "Platform",
      platformValue: "Web + mobile app",
      socials: ["Telegram", "VK", "TikTok", "Instagram"],
      nameLabel: "Name",
      namePlaceholder: "Your name or nickname",
      emailFieldLabel: "Email",
      messageLabel: "Question or comment",
      messagePlaceholder: "Tell us about yourself or ask a question...",
      submit: "Register Now",
      submitting: "Sending...",
      success: "Request sent! We'll be in touch soon 🚀",
    },
  },
} as const

type Translations = typeof translations
export type T = Translations["ru"]

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: T }>({
  lang: "ru",
  setLang: () => {},
  t: translations.ru,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru")
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
