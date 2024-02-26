import React from 'react';
import { Grid } from '@chakra-ui/react';
import type { ThemeType } from '../../types/mygameTypes';
import ThemeWrapper from '../ui/ThemeWrapper';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks';
import { fetchThemesThunk } from '../../redux/thunkActions/questionsThunkAction';
import QuestionModal from '../ui/QuestionModal';
import QuestAndAnswForm from '../ui/QuestAndAnswForm';

export default function QuestionsList(): JSX.Element {
  const themesAndQuestions = useAppSelector((state) => state.mygame.themes);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    void dispatch(fetchThemesThunk());
  }, [dispatch])

  const themes: ThemeType[] = themesAndQuestions;

  console.log('Themes and actions', themesAndQuestions);
  return (
    <Grid gap={1} bg="yellow.400">
      {themes.map((theme) => (
        <ThemeWrapper key={theme.id} themeData={theme} />
      ))}
    </Grid>
  );
}