import tw from 'twin.macro';

import { AccountInGameInfo } from '~/types';

interface Props {
  data?: AccountInGameInfo[];
}
export const PortfolioInGameInfos = ({ data }: Props) => {
  const isEmpty = !data || data?.length === 0;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>In-game info</Title>
        {isEmpty && <TotalValueEmpty>No assets</TotalValueEmpty>}
      </TitleWrapper>
      {!isEmpty &&
        data?.map(gameInfo => (
          <InfoWrapper key={gameInfo.id}>
            <GameInfoWrapper>
              {gameInfo.game.logo && (
                <GameLogo style={{ backgroundImage: `url(${gameInfo.game.logo})` }} />
              )}
              <GameTitleWrapper>
                <GameTitle>{gameInfo.game.name}</GameTitle>
                <UserId>{gameInfo.user}</UserId>
              </GameTitleWrapper>
            </GameInfoWrapper>

            <InfoCardWrapper>
              {gameInfo.infos?.map(info => (
                <GameInfoCard key={info.value}>
                  <GameInfoLabelWrapper>
                    <GameInfoLabel>{info.label}</GameInfoLabel>
                    <GameInfoValue>{info.value}</GameInfoValue>
                  </GameInfoLabelWrapper>
                  {info.logo && <GameInfoIcon style={{ backgroundImage: `url(${info.logo})` }} />}
                </GameInfoCard>
              ))}
            </InfoCardWrapper>

            {gameInfo.items?.map(items => (
              <GameItemWrapper key={items.label}>
                <GameItemLabel>{items.label}</GameItemLabel>
                <GameItemInnerWrapper>
                  {items.type === 'col'
                    ? items.items?.map(item => (
                        <GameItemContentCol key={item.value}>
                          {item.logo && (
                            <GameItemIcon
                              style={{
                                backgroundImage: `url(${item.logo.src})`,
                                width: `${item.logo?.width ?? 24}px`,
                                height: `${item.logo?.width ?? 24}px`,
                              }}
                            />
                          )}
                          {item.value}
                        </GameItemContentCol>
                      ))
                    : items.items?.map(item => (
                        <GameItemContentRow key={item.value}>
                          {item.logo && (
                            <GameItemIcon
                              style={{
                                backgroundImage: `url(${item.logo.src})`,
                                width: `${item.logo?.width ?? 24}px`,
                                height: `${item.logo?.width ?? 24}px`,
                              }}
                            />
                          )}
                          {item.value}
                        </GameItemContentRow>
                      ))}
                </GameItemInnerWrapper>
              </GameItemWrapper>
            ))}
          </InfoWrapper>
        ))}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-24
`;

const TitleWrapper = tw.div`
  flex items-center justify-between
`;

const Title = tw.div`
  font-sb-18 text-white
`;

const TotalValueEmpty = tw.div`
  font-r-16 text-grayscale-4
`;

const InfoWrapper = tw.div`
  flex flex-col p-24 gap-16 bg-grayscale-6 rounded-8
`;

const GameInfoWrapper = tw.div`
  flex gap-16 items-center
`;

const GameLogo = tw.div`
  w-32 h-32 bg-center bg-no-repeat bg-cover
`;
const GameTitleWrapper = tw.div`
  flex flex-col
`;
const GameTitle = tw.div`
  font-sb-14 text-white
`;
const UserId = tw.div`
  font-r-12 text-grayscale-3
`;

const InfoCardWrapper = tw.div`
  flex gap-12 flex-wrap
`;

const GameInfoCard = tw.div`
  flex gap-12 items-center bg-grayscale-7 min-w-158 px-16 py-8 rounded-8
`;

const GameInfoLabelWrapper = tw.div`
  flex flex-col
`;
const GameInfoLabel = tw.div`
  font-r-12 text-grayscale-3
`;
const GameInfoValue = tw.div`
  font-r-12 text-grayscale-2
`;
const GameInfoIcon = tw.div`
  w-40 h-40 bg-center bg-no-repeat bg-cover
`;

const GameItemWrapper = tw.div`
  w-full flex flex-col gap-4 bg-grayscale-7 px-16 py-12 rounded-8
`;
const GameItemInnerWrapper = tw.div`
  flex gap-12 justify-between
`;
const GameItemLabel = tw.div`
  font-r-12 text-grayscale-3
`;
const GameItemContentCol = tw.div`
  min-w-152 flex flex-col gap-2 font-r-12 text-grayscale-2
`;
const GameItemContentRow = tw.div`
  min-w-152 flex gap-8 items-center font-r-12 text-grayscale-2
`;
const GameItemIcon = tw.div`
  w-40 h-40 bg-center bg-no-repeat bg-cover
`;
