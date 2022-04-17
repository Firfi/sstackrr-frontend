import cx from 'classnames';
import { useMemo } from 'react';
import { useLastClaimedPlayer } from '../player/claim/useLastClaimedPlayer';
import { NewGameButton } from '../game/newGameButton';
import { makeGameRoute } from '../game/route';
import { useLocalStorageContext } from '../localStorage/context';

function ContinueButton() {
  const { data: playerToken } = useLastClaimedPlayer();
  const { playerTokenForGameToken } = useLocalStorageContext();
  const gameToken = useMemo(() => {
    const found = Array.from(playerTokenForGameToken.entries()).find(
      (e) => e[1] === playerToken,
    );
    return found ? found[0] : undefined;
  }, [playerTokenForGameToken]);
  return (
    <a
      href={gameToken ? makeGameRoute(gameToken) : '#'}
      className={cx('bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded', {
        'opacity-50 cursor-not-allowed': !gameToken,
      })}
    >
      Continue
    </a>
  );
}

export function HomePage() {
  return (
    <div className="pt-10 w-full flex content-center items-center">
      <div className="space-x-4">
        <NewGameButton />
        <ContinueButton />
      </div>
    </div>
  );
}