import { useState } from "react";

const PRESENTATION_URL = "https://data-analytics-enhancer--preview.poehali.dev/presentation";

const slides = [
  {
    id: 1,
    label: "01 / СТАРТ",
    title: "Идея",
    subtitle: "С чего всё началось",
    content: "Пользователь пришёл с идеей — создать красивый сайт для косметического бренда Vivienne Sabo. Никакого кода, никаких технических знаний. Просто желание и название бренда.",
    highlight: "Vivienne Sabo",
    bg: "bg-white",
    accent: "bg-red-600",
    textColor: "text-black",
  },
  {
    id: 2,
    label: "02 / ШАБЛОН",
    title: "Выбор\nшаблона",
    subtitle: "Основа для дизайна",
    content: "Был выбран минималистичный шаблон в стиле швейцарского графического дизайна — GRIDFORM. Чёрный, белый, красный. Строгие сетки и крупная типографика — идеально для люксового бренда.",
    highlight: "Swiss Grid Style",
    bg: "bg-black",
    accent: "bg-red-600",
    textColor: "text-white",
  },
  {
    id: 3,
    label: "03 / КОНТЕНТ",
    title: "Адаптация\nтекстов",
    subtitle: "Бренд обретает голос",
    content: "Все тексты переписаны под Vivienne Sabo: заголовки, описания продуктов, блок «О бренде», контакты. Французский шик и парижская элегантность — в каждом слове.",
    highlight: "Парижский шик",
    bg: "bg-white",
    accent: "bg-black",
    textColor: "text-black",
  },
  {
    id: 4,
    label: "04 / ФОТО",
    title: "Генерация\nизображений",
    subtitle: "Визуальная составляющая",
    content: "С помощью ИИ были созданы 3 продуктовых изображения: тушь, помада, тени. Все в едином стиле — минимализм, белый фон, профессиональная beauty-съёмка.",
    highlight: "3 продукта",
    bg: "bg-red-600",
    accent: "bg-white",
    textColor: "text-white",
  },
  {
    id: 5,
    label: "05 / QR-КОД",
    title: "QR-код\nи шеринг",
    subtitle: "Удобный доступ к сайту",
    content: "По запросу пользователя добавлен QR-код прямо на сайт, а также создана отдельная страница /qr — для распечатки и демонстрации на встречах.",
    highlight: "/qr страница",
    bg: "bg-black",
    accent: "bg-red-600",
    textColor: "text-white",
  },
  {
    id: 6,
    label: "06 / ИТОГ",
    title: "Готовый\nсайт",
    subtitle: "Результат за один сеанс",
    content: "Полноценный сайт бренда с навигацией, коллекциями, историей бренда, формой контактов и QR-кодом. Без единой строчки кода со стороны пользователя.",
    highlight: "0 строк кода",
    bg: "bg-white",
    accent: "bg-red-600",
    textColor: "text-black",
  },
  {
    id: 7,
    label: "07 / ПЛАН",
    title: "Что дальше?",
    subtitle: "Дорожная карта",
    content: null,
    steps: [
      { num: "1", text: "Подключить форму — заявки на почту" },
      { num: "2", text: "Добавить реальные фото продуктов" },
      { num: "3", text: "Привязать свой домен viviennesabo.ru" },
      { num: "4", text: "Запустить каталог с фильтрами" },
      { num: "5", text: "Настроить SEO и продвижение" },
    ],
    highlight: null,
    bg: "bg-black",
    accent: "bg-red-600",
    textColor: "text-white",
  },
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);

  const slide = slides[current];
  const isLast = current === slides.length - 1;
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: "Vivienne Sabo — Как создавался сайт", url: PRESENTATION_URL });
    } else {
      await navigator.clipboard.writeText(PRESENTATION_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`min-h-screen ${slide.bg} ${slide.textColor} transition-colors duration-500 flex flex-col`}>
      {/* Top bar */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-current opacity-60">
        <span className="text-xs uppercase tracking-widest font-bold">Vivienne Sabo</span>
        <button
          onClick={handleShare}
          className="text-xs uppercase tracking-widest font-bold border border-current px-4 py-2 hover:opacity-60 transition-opacity"
        >
          {copied ? "Скопировано ✓" : "Поделиться →"}
        </button>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 py-12 max-w-5xl mx-auto w-full">
        <p className="text-xs uppercase tracking-widest mb-6 opacity-50">{slide.label}</p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 whitespace-pre-line">
          {slide.title}
        </h1>

        <p className={`text-sm uppercase tracking-widest mb-6 font-bold`}>
          — {slide.subtitle}
        </p>

        {slide.content && (
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10 opacity-80">
            {slide.content}
          </p>
        )}

        {slide.steps && (
          <ul className="space-y-4 mb-10">
            {slide.steps.map((step) => (
              <li key={step.num} className="flex items-center gap-6">
                <span className={`w-10 h-10 flex items-center justify-center text-sm font-bold ${slide.accent} ${slide.accent === "bg-red-600" ? "text-white" : "text-black"} shrink-0`}>
                  {step.num}
                </span>
                <span className="text-lg">{step.text}</span>
              </li>
            ))}
          </ul>
        )}

        {slide.highlight && (
          <div className={`inline-block px-6 py-3 ${slide.accent} ${slide.accent === "bg-red-600" || slide.accent === "bg-black" ? "text-white" : "text-black"} font-bold text-sm uppercase tracking-widest`}>
            {slide.highlight}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center px-8 py-6 border-t border-current opacity-60">
        <button
          onClick={() => setCurrent((p) => Math.max(0, p - 1))}
          disabled={current === 0}
          className="text-xs uppercase tracking-widest disabled:opacity-20 hover:opacity-60 transition-opacity font-bold"
        >
          ← Назад
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 transition-all ${i === current ? "w-8 bg-current" : "bg-current opacity-30"}`}
            />
          ))}
        </div>

        <button
          onClick={() => !isLast && setCurrent((p) => p + 1)}
          disabled={isLast}
          className="text-xs uppercase tracking-widest disabled:opacity-20 hover:opacity-60 transition-opacity font-bold"
        >
          Далее →
        </button>
      </div>
    </div>
  );
}