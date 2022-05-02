import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
const App = () => {
  console.log("saishou");
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwithchShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です!</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <button onClick={onClickSwithchShowFlg}> on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>^0^</p>}
    </>
  );
};

export default App;
