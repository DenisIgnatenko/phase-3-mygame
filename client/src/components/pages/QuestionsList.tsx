import React from 'react';
import { Grid } from '@chakra-ui/react';
import type { ThemeType } from '../../types/mygameTypes';
import ThemeWrapper from '../ui/ThemeWrapper';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks';
import { fetchThemesThunk } from '../../redux/thunkActions/questionsThunkAction';

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


// return (
//   <Grid templateColumns="repeat(auto-fill, minmax(240px, 1fr))" gap={1}>
//     {themes.map((theme) => (
//       <Box key={theme.id} bg="yellow.200" p={1}>
//         <ThemeWrapper themeData={theme} />
//       </Box>
//     ))}
//   </Grid>
// );

// const themes: ThemeType[] = [
//   {
//     id: 1,
//     theme: 'История',
//     Questions: [
//       { id: 1, price: 100 },
//       { id: 2, price: 200 },
//       { id: 3, price: 300 },
//       { id: 4, price: 400 },
//       { id: 5, price: 500 },
//     ],
//   },
//   {
//     id: 2,
//     theme: 'Наука',
//     Questions: [
//       { id: 4, price: 100 },
//       { id: 5, price: 200 },
//       { id: 6, price: 300 },
//       { id: 7, price: 400 },
//       { id: 8, price: 500 },
//     ],
//   },
//   {
//     id: 3,
//     theme: 'Искусство',
//     Questions: [
//       { id: 9, price: 100 },
//       { id: 10, price: 200 },
//       { id: 11, price: 300 },
//       { id: 12, price: 400 },
//       { id: 13, price: 500 },
//     ],
//   },
//
//   {
//     id: 4,
//     theme: 'Кино',
//     Questions: [
//       { id: 14, price: 100 },
//       { id: 15, price: 200 },
//       { id: 16, price: 300 },
//       { id: 17, price: 400 },
//       { id: 18, price: 500 },
//     ],
//   },
// ];
