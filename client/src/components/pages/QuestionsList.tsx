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
  ];
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={2}>
      {themes.map((theme) => (
        <>
          <Box
            colSpan={1}
            bg="blue.100"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="150px"
          >
            <Text fontWeight="bold">{theme.theme}</Text>
          </Box>
          {theme.questions.map((question) => (
            <QuestionModal buttonName={question.price}>
              <QuestAndAnswForm question={question}>
              </QuestAndAnswForm>
            </QuestionModal>
          ))}
        </>
      ))}
    </Grid>
  );
}
