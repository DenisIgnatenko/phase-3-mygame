import React from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import type { QuestionType } from '../../types/mygameTypes';

type QuestAndAnswFormPropType = {
  question: QuestionType;
};

export default function QuestAndAnswForm({ question }: QuestAndAnswFormPropType): JSX.Element {
  // const { submitHandler } = useAnswHandler();
  return (
    <Box p={3}>
      <h2>{`Вы выбрали вопрос за ${question.price}`}</h2>
      <Card>
        <CardBody>
          <Text>{question.question}</Text>
        </CardBody>
      </Card>
      <form>
        <FormControl>
          <FormLabel>Ваш ответ:</FormLabel>
          <Input type="text" name="answer" />
          <FormHelperText>введите ответ не обращая внимания на рагеистр</FormHelperText>
        </FormControl>
        <Button variant="outline" mt={3} type="submit">
          Ответить
        </Button>
      </form>
    </Box>
  );
}
