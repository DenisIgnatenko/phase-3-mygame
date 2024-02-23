import React from 'react';
import {
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
    <>
      <Card>
        <CardBody>
          <Text>{question.question}</Text>
        </CardBody>
      </Card>

      <FormControl>
        <FormLabel>Ваш ответ:</FormLabel>
        <Input type="text" name="answer" />
        <FormHelperText>введите ответ не обращая внимания на рагеистр</FormHelperText>
      </FormControl>
    </>
  );
}
