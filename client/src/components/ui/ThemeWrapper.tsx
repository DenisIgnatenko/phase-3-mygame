import React from 'react';
import { Box, Grid, GridItem, Flex, Heading, Text } from '@chakra-ui/react';
import type { QuestionsType, ThemeType } from '../../types/mygameTypes';
import QuestionModal from './QuestionModal';
import QuestAndAnswForm from './QuestAndAnswForm';

export default function ThemeWrapper({ themeData }: ThemeType): JSX.Element {
  const cardSize = '120px'; // Устанавливаем фиксированный размер для карточек

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={1} bg="yellow.400">
      <Box
        colSpan={0}
        bg="blue.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="150px"
      >
        <Text fontWeight="bold">{themeData.theme}</Text>
      </Box>
      {themeData.Questions.map((question) => (
        <Box
          key={question.id}
          bg="blue.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="150px"
        >
          <QuestionModal buttonName={question.price}>
            <QuestAndAnswForm question={question} />
          </QuestionModal>
        </Box>
      ))}
    </Grid>
  );
}
