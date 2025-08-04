import React from 'react';

export function EventData2() {
  const onClickStartStop = (e) => {
    let t = e.target.innerText;
    let s = (t === 'Start') ? 'Stop' : 'Start';
    e.target.innerText = s;
  };

  const onClickAdd = (ev) => {
    let t = ev.target.value;
    let r = eval(t);
    alert(`${t} = ${r}`);
  };

  return (
    <div style={{textAlign: 'center', marginTop: 20}}>
      <button onClick={onClickStartStop}>Start</button><br /><br />
      <button onClick={onClickAdd} value="10+20">10 + 20</button><br /><br />
      <button onClick={onClickAdd} value="30+40">30 + 40</button><br /><br />
    </div>
  );
}
