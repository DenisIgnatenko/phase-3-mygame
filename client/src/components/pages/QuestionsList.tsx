import React from 'react';
import { Grid, GridItem, VStack, Box, Text } from '@chakra-ui/react';
import type { ThemeType } from '../../types/mygameTypes';
import ThemeWrapper from '../ui/ThemeWrapper';
import QuestionModal from '../ui/QuestionModal';
import QuestAndAnswForm from '../ui/QuestAndAnswForm';

export default function QuestionsList(): JSX.Element {
  const themes: ThemeType[] = [
    {
      id: 1,
      theme: 'История',
      questions: [
        { id: 1, price: 100, question: 'Какой планете Солнечной системы принадлежит кольцо?' },
        { id: 2, price: 200, question: 'Как называется самая древняя цивилизация на Земле?' },
        { id: 3, price: 300, question: 'Кто был первым президентом Соединенных Штатов?' },
        { id: 4, price: 400, question: 'В каком году началась Вторая мировая война?' },
        { id: 5, price: 500, question: 'Какая страна была известна как Персия до 1935 года?' },
      ],
    },
    {
      id: 2,
      theme: 'Наука',
      questions: [
        { id: 1, price: 100, question: 'Какой элемент таблицы Менделеева имеет атомный номер 1?' },
        { id: 2, price: 200, question: 'Какая планета известна как Красная планета?' },
        { id: 3, price: 300, question: 'Что изучает биология?' },
        { id: 4, price: 400, question: 'Как называется ближайшая к Земле звезда?' },
        { id: 5, price: 500, question: 'Что такое ДНК?' },
      ],
    },
    {
      id: 3,
      theme: 'Искусство',
      questions: [
        { id: 1, price: 100, question: 'Кто написал "Мона Лизу"?' },
        { id: 2, price: 200, question: 'В какой стране находится Лувр?' },
        { id: 3, price: 300, question: 'Кто композитор "Времен года"?' },
        { id: 4, price: 400, question: 'Какой стиль искусства ассоциируется с Пабло Пикассо?' },
        { id: 5, price: 500, question: 'Как называется самая известная скульптура Микеланджело?' },
      ],
    },
    {
      id: 4,
      theme: 'Кино',
      questions: [
        { id: 1, price: 100, question: 'Какой фильм получил Оскар за лучший фильм в 1994 году?' },
        { id: 2, price: 200, question: 'Кто сыграл Главную роль в фильме "Титаник"?' },
        { id: 3, price: 300, question: 'Как называется первый фильм о Гарри Поттере?' },
        { id: 4, price: 400, question: 'Кто режиссер фильма "Крестный отец"?' },
        {
          id: 5,
          price: 500,
          question: 'В каком году был выпущен фильм "Звездные войны: Новая надежда"?',
        },
      ],
    },
  ];

  return (
    <Grid gap={1}>
      {themes.map((theme) => (
        <ThemeWrapper key={theme.id} themeData={theme} />
      ))}
    </Grid>
  );
}
