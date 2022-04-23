import React, { useState } from "react";
import "./test.scss";
interface IProps {
  isView?: boolean;
}
const Test1: React.FC<IProps> = ({ isView }) => {
  return (
    <div
      className={isView ? "item item-active" : "item item-nonActive"}
      style={
        isView
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
    >
      {" "}
      1번
    </div>
  );
};
const Test2: React.FC<IProps> = ({ isView }) => {
  return (
    <div
      className={isView ? "item item-active" : "item item-nonActive"}
      style={
        isView
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
    >
      {" "}
      2번
    </div>
  );
};
const Test3: React.FC<IProps> = ({ isView }) => {
  return (
    <div
      className={isView ? "item item-active" : "item item-nonActive"}
      style={
        isView
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
    >
      3번
    </div>
  );
};
const Test: React.FC = () => {
  const style = {
    flex: "1",
    border: "1px solid red",
    transform: "translateX(-100%)",
  };
  const [currentNum, setNum] = useState(0);
  const tabNum = [0, 1, 2];
  const [isView, setView] = useState<IProps>();
  const lists = () => {
    switch (currentNum) {
      case 0:
        return (
          <>
            <Test1 isView={true} />
            <Test2 />
            <Test3 />
          </>
        );
      case 1:
        return (
          <>
            <Test1 />
            <Test2 isView={true} />
            <Test3 />
          </>
        );
      case 2:
        return (
          <>
            <Test1 />
            <Test2 />
            <Test3 isView={true} />
          </>
        );
    }
  };
  return (
    <div className="container tab">
      <div className="tabWarpper tab-container">
        {tabNum.map((item, i) => (
          <button
            className={currentNum === i ? "tab-btn tab-active" : "tab-btn"}
            value={i}
            onClick={(e) => setNum(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="contents">{lists()}</div>
    </div>
  );
};

export default Test;
