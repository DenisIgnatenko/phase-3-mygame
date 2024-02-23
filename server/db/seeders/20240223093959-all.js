module.exports = {
  async up(queryInterface, Sequelize) {
    // Добавление тем
    const themes = [
      { theme: 'Космические Исследования', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Мировая История', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Литература', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Наука и Технологии', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'География', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Искусство и Культура', createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert('Themes', themes, {});

    // Добавление вопросов
    const questions = [
      // Космические Исследования
      {
        question: 'Какой планете Солнечной системы принадлежит кольцо?', answer: 'Сатурн', price: 200, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Кто был первым человеком в космосе?', answer: 'Юрий Гагарин', price: 400, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Назовите самый большой спутник в Солнечной системе.', answer: 'Ганимед', price: 600, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется галактика, в которой мы живем?', answer: 'Млечный Путь', price: 800, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Кто автор теории относительности, которая стала основой для современной астрофизики?', answer: 'Альберт Эйнштейн', price: 1000, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },

      // Мировая История
      {
        question: 'Какой император основал Константинополь?', answer: 'Константин Великий', price: 200, theme_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'В каком году началась Вторая мировая война?', answer: '1939', price: 400, theme_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какой документ привел к окончанию Первой мировой войны?', answer: 'Версальский договор', price: 600, theme_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется корабль, который "открыл" Америку в 1492 году?', answer: 'Санта-Мария', price: 800, theme_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Кто стал первым президентом Соединенных Штатов?', answer: 'Джордж Вашингтон', price: 1000, theme_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },

      // Литература
      {
        question: 'Кто написал "Ромео и Джульетту"?', answer: 'Уильям Шекспир', price: 200, theme_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'В каком произведении впервые появился персонаж Шерлок Холмс?', answer: 'Этюд в багровых тонах', price: 400, theme_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется эпическая трилогия, написанная Дж.Р.Р. Толкином?', answer: 'Властелин колец', price: 600, theme_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Назовите автора романа "Война и мир".', answer: 'Лев Толстой', price: 800, theme_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Кто является автором "Одиссеи"?', answer: 'Гомер', price: 1000, theme_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },

      // Наука и Технологии
      {
        question: 'Что измеряет скорость ветра?', answer: 'Анемометр', price: 200, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Кто изобрел лампочку?', answer: 'Томас Эдисон', price: 400, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется самый быстрый наземный вид транспорта в мире?', answer: 'Маглев', price: 600, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какой элемент таблицы Менделеева имеет атомный номер 1?', answer: 'Водород', price: 800, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какой математический термин обозначает число, умноженное само на себя?', answer: 'Квадрат числа', price: 1000, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },

      // География
      {
        question: 'Какая река самая длинная в мире?', answer: 'Амазонка', price: 200, theme_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'На каком континенте находится Сахара?', answer: 'Африка', price: 400, theme_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая страна занимает весь южный конец Южной Америки?', answer: 'Чили', price: 600, theme_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется самая большая пустыня в Азии?', answer: 'Гоби', price: 800, theme_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'В какой стране находится гора Эверест?', answer: 'Непал', price: 1000, theme_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },

      // Искусство и Культура
      {
        question: 'Кто написал "Триумфальную арку"?', answer: 'Эрих Мария Ремарк', price: 200, theme_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'В каком городе находится Лувр?', answer: 'Париж', price: 400, theme_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется стиль живописи, характеризующийся маленькими точками цвета, которые вместе формируют изображение?', answer: 'Пуантилизм', price: 600, theme_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какой музыкальный инструмент имеет 88 клавиш?', answer: 'Фортепиано', price: 800, theme_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая картина Леонардо да Винчи известна своей улыбкой?', answer: 'Мона Лиза', price: 1000, theme_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Questions', questions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
