import { useState, useEffect } from 'react';
import useKeyPress from '../../hooks/keyPress';
import ResultItem from '../../components/ResultItem/ResultItem';

import './Results.scss';

const Results = ({ list }) => {
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const [selected, setSelected] = useState(undefined);
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  useEffect(() => {
    if (list.length && downPress) {
      setCursor((prevState) =>
        prevState < list.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (list.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);

  useEffect(() => {
    if (list.length && enterPress) {
      setSelected(list[cursor]);
      window.location.href = list[cursor].html_url;
    }
  }, [cursor, enterPress]);

  useEffect(() => {
    if (list.length && hovered) {
      setCursor(list.indexOf(hovered));
    }
  }, [hovered]);

  return (
    <div>
      <label className='label'> Github Users </label>
      <ul className='list'>
        {list.map((results, i) => {
          return (
            <ResultItem
              key={results.id}
              active={i === cursor}
              item={results}
              setSelected={setSelected}
              setHovered={setHovered}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Results;
