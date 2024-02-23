import React from 'react';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import type { QuestionsType, ThemeType } from '../../types/mygameTypes';

export default function ThemeWrapper({ themeData }: ThemeType): JSX.Element {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Heading size="md" mb={4}>
        {themeData.theme}
      </Heading>
      {themeData.questions.map((question) => (
        <Text key={question.id} p={2} borderBottomWidth="1px">
          {question.price}
        </Text>
      ))}
    </Box>
  );
}
