import { QRCodeSVG } from "qrcode.react";

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            VIVIENNE SABO
          </a>
          <div className="flex items-center space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Коллекции
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О бренде
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              VIVI
              <br />
              ENNE
            </h1>
            <p className="text-xl max-w-xl">
              Парижский шик. Безупречное качество. Косметика Vivienne Sabo — для тех, кто знает себе цену. Французская элегантность в каждом продукте.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/fb0c88a8-3f63-4566-9337-1090ae396adc/files/102941b3-8d21-4120-bd3c-7b38140676d5.jpg"
                alt="Vivienne Sabo Mascara"
                className="w-full h-full object-cover mix-blend-multiply"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">КОЛЛЕКЦИИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/fb0c88a8-3f63-4566-9337-1090ae396adc/files/102941b3-8d21-4120-bd3c-7b38140676d5.jpg"
                  alt="Тушь для ресниц"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Тушь для ресниц</h3>
              <p className="text-neutral-400">Cabaret Premiere — объём и изгиб с эффектом накладных ресниц</p>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/fb0c88a8-3f63-4566-9337-1090ae396adc/files/b7c41976-47ae-420d-ac62-48e7d0e1041b.jpg"
                  alt="Помады"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Губная помада</h3>
              <p className="text-neutral-400">Rouge à Lèvres — насыщенный цвет, стойкость и комфорт весь день</p>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/fb0c88a8-3f63-4566-9337-1090ae396adc/files/debcb5e0-682d-4596-a084-1436b8b6a9c4.jpg"
                  alt="Тени для век"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Тени для век</h3>
              <p className="text-neutral-400">Palette Artistique — палитры для дневного и вечернего макияжа</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О БРЕНДЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/fb0c88a8-3f63-4566-9337-1090ae396adc/files/b7c41976-47ae-420d-ac62-48e7d0e1041b.jpg"
                  alt="Vivienne Sabo brand"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-white"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Vivienne Sabo — французский косметический бренд, вдохновлённый богемной атмосферой Парижа. Мы создаём косметику, которая подчёркивает естественную красоту каждой женщины.
              </p>
              <p className="mb-6">
                Наши продукты разработаны с использованием передовых технологий и тщательно отобранных ингредиентов. Французские формулы обеспечивают стойкость, яркость и комфорт, который ощущается с первого нанесения.
              </p>
              <p className="mb-6">
                Бренд основан на убеждении, что макияж — это искусство самовыражения. Мы создаём инструменты для творчества, доступные каждой женщине — без компромиссов в качестве.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Принципы</h3>
                  <ul className="space-y-2">
                    <li>Французское качество</li>
                    <li>Доступная роскошь</li>
                    <li>Инновационные формулы</li>
                    <li>Стойкий результат</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Категории</h3>
                  <ul className="space-y-2">
                    <li>Макияж глаз</li>
                    <li>Макияж губ</li>
                    <li>Тон и основа</li>
                    <li>Уход за кожей</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Хотите узнать больше о продуктах или стать партнёром? Напишите нам.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:info@viviennesabo.ru" className="hover:underline">
                    info@viviennesabo.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Адрес</span>
                  <span>Москва, Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 resize-none"
                    placeholder="Ваш вопрос или предложение"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section className="py-16 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold tracking-tighter uppercase">Поделитесь сайтом</h2>
          <div className="bg-white p-6 border-2 border-black">
            <QRCodeSVG
              value="https://data-analytics-enhancer--preview.poehali.dev/"
              size={180}
              fgColor="#000000"
              bgColor="#ffffff"
            />
          </div>
          <p className="text-sm uppercase tracking-widest text-neutral-500">viviennesabo.ru</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-bold tracking-tighter">VIVIENNE SABO</span>
          <span className="text-sm text-neutral-500">© 2024. Французская косметика</span>
        </div>
      </footer>
    </main>
  );
}