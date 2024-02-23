import React from 'react';
import { Grid, GridItem, VStack } from '@chakra-ui/react';
import type { ThemeType } from '../../types/mygameTypes';
import ThemeWrapper from '../ui/ThemeWrapper';

export default function QuestionsList(): JSX.Element {
  const themes: ThemeType[] = [
    {
      id: 1,
      theme: 'История',
      questions: [
        { id: 1, price: 100 },
        { id: 2, price: 200 },
        { id: 3, price: 300 },
        { id: 4, price: 400 },
        { id: 5, price: 500 },
      ],
    },
    {
      id: 2,
      theme: 'Наука',
      questions: [
        { id: 4, price: 100 },
        { id: 5, price: 200 },
        { id: 6, price: 300 },
        { id: 7, price: 400 },
        { id: 8, price: 500 },
      ],
    },
    {
      id: 3,
      theme: 'Искусство',
      questions: [
        { id: 9, price: 100 },
        { id: 10, price: 200 },
        { id: 11, price: 300 },
        { id: 12, price: 400 },
        { id: 13, price: 500 },
      ],
    },

    {
      id: 4,
      theme: 'Кино',
      questions: [
        { id: 14, price: 100 },
        { id: 15, price: 200 },
        { id: 16, price: 300 },
        { id: 17, price: 400 },
        { id: 18, price: 500 },
      ],
    },

    // Добавь столько объектов ThemeType, сколько тебе нужно для тестирования
  ];
  return (
    <VStack spacing={6} align="stretch">
      {themes.map((theme) => (
        <ThemeWrapper key={theme.id} themeData={theme} />
      ))}
    </VStack>
  );
}
