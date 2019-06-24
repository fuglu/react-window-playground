import React, { useEffect, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import "./App.css";
import { list as defaultList } from "./list";

const Row = ({ data, index, style }: any) => {
  const [playing, setPlaying] = useState(false);
  const item = data[index];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        setPlaying(!playing);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [playing]);

  return (
    <div style={style}>
      {String(playing)} => {item.modified}
    </div>
  );
};

const App: React.FC = () => {
  const [list, setList] = useState(defaultList);

  useEffect(() => {
    const interval = setInterval(() => {
      setList(
        defaultList.map(item => ({
          ...item,
          modified: item.id % 2 ? item.modified : Date.now()
        }))
      );
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="Foo">
        <AutoSizer>
          {({ width, height }) => (
            <FixedSizeList
              height={height}
              itemCount={list.length}
              itemSize={35}
              width={width}
              itemData={list}
            >
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default App;
