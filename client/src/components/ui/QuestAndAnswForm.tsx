import React, { useState } from 'react';
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
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import type { QuestionType } from '../../types/mygameTypes';

type QuestAndAnswFormPropType = {
  question: QuestionType;
};

export default function QuestAndAnswForm({ question }: QuestAndAnswFormPropType): JSX.Element {
  const [answer, setAnswer] = useState('');
  const [alertStatus, setAlertStatus] = useState<'success' | 'error' | null>(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === question.answer.toLowerCase()) {
      setAlertStatus('success');
    } else {
      setAlertStatus('error');
    }
  };

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    // Сбросить состояние алерта при изменении ввода
    setAlertStatus(null);
  };

  return (
    <Box p={3}>
      <h2>{`Вы выбрали вопрос за ${question.price}`}</h2>
      <Card>
        <CardBody>
          <Text>{question.question}</Text>
        </CardBody>
      </Card>
      {alertStatus === 'success' && (
        <Alert status="success" mt={4}>
          <AlertIcon />
          Вы ответили верно!
        </Alert>
      )}
      {alertStatus === 'error' && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          Вы ответили неверно.
        </Alert>
      )}
      <form onSubmit={submitHandler}>
        <FormControl>
          <FormLabel>Ваш ответ:</FormLabel>
          <Input type="text" name="answer" value={answer} onChange={handleInputChange} />
          <FormHelperText>Введите ответ необращая внимания на регистр</FormHelperText>
        </FormControl>
        <Button variant="outline" mt={3} type="submit">
          Ответить
        </Button>
      </form>
    </Box>
  );
}
