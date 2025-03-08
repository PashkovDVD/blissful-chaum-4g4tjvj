import React, { useState } from 'react';

const App = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const routes = [
    {
      id: 1,
      name: 'Маршрут 40',
      stops: [
        'ЖК Западная Резиденция',
        'СНТ Изумруд',
        'Автоцентр ВАЗ',
        'Донагропромснаб',
        'РостовТехОптторг',
        'ТЦ METRO',
        'Авторынок Фортуна',
        'Улица Малиновского 70',
        'КПС',
        'Магазин Олимп',
        'Проспект Стачки',
        'Фруктовый сад',
        'КПС',
        'Областная больница',
        'Детская областная больница',
        'Автостоянка',
        'Площадь 339-й Стрелковой Дивизии',
        'Кустанайская улица',
        'Университет',
        'Проспект Стачки / Улица Зорге',
        'Школа № 92',
        'Площадь Тружеников',
        '6-я Кольцевая улица',
        '2-я Кольцевая улица',
        'Международная улица',
        'Улица Кулагина',
        'Площадь Дружинников',
        'Улица Бабушкина',
        'Переходной мост',
        'Площадь Стачки 1902 года',
        'Пригородный железнодорожный вокзал',
        'Главный автовокзал Ростова-на-Дону',
        'Гвардейская площадь',
        'Будённовский проспект',
        'Переулок Семашко',
        'Ворошиловский проспект',
        'Проспект Чехова',
        'Кировский проспект',
        'Крепостной переулок',
        'Завод Рубин',
        'Площадь Энергетиков',
        'Горгаз',
        '2-я линия',
        '14-я линия',
        '20-я линия',
        'Пригородный автовокзал',
        'Проспект Сельмаш',
        'Улица 1-й Конной Армии',
        'Улица Сержантова',
        'Улица Веры Пановой',
        'Детский комбинат',
        'Улица Щербакова',
        'Молодёжная улица',
        'Проспект 20-летия Октября',
        'Камская улица',
        'Школа № 44',
        'Туапсинский переулок',
        'Лесозащитная улица',
        'Улица Панфиловцев',
        'Колосистая улица',
        'Завод Алмаз',
        'Улица Алексея Русова',
        'С/т Берёзка',
        'Филиал часового завода Витязь'
      ]
    }
  ];

  const handleRouteClick = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Расписание остановок Ростова-на-Дону</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <div key={route.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{route.name}</h2>
              <button
                onClick={() => handleRouteClick(route)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Показать остановки
              </button>
            </div>
          ))}
        </div>
        {selectedRoute && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{selectedRoute.name}</h2>
            <ul className="space-y-2">
              {selectedRoute.stops.map((stop, index) => (
                <li key={index} className="text-gray-700">{stop}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;