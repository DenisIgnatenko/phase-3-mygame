import React from 'react';
import { Box, Grid, GridItem, Flex, Heading, Text } from '@chakra-ui/react';
import type { QuestionsType, ThemeType } from '../../types/mygameTypes';

export default function ThemeWrapper({ themeData }: ThemeType): JSX.Element {
  const cardSize = '120px'; // Устанавливаем фиксированный размер для карточек

  return (
    <Box
      borderWidth="1px"
      borderColor="transparent"
      bg="blue.100"
      display="flex"
      alignItems="center"
      p={2}
      mb={2}
    >
      <Text fontWeight="bold" textAlign="center" flex="1">
        {themeData.theme}
      </Text>
      <Grid templateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap={0} flex="3">
        {themeData.questions.map((question: QuestionType) => (
          <Box
            key={question.id}
            width={cardSize}
            height={cardSize}
            bg="blue.100"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text>{question.price}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
