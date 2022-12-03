import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list.map(item => {
          return (
            <ForbesListItem
              key={item.id}
              isIncrease={item.isIncrease}
              capital={item.capital}
              name={item.name}
              avatar={item.avatar}
            />
          );
        })}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
