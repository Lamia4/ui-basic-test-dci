import React, { useState } from 'react';

function Timer()
{
    const [ startTime, setStartTime ] = useState(null);
    const [ difference, setDifference ] = useState(null);
    const [ suspension, setSuspension ] = useState(0);
    const [ interval, setInterval ] = useState(null);

    const start = () =>
    {
        if (startTime) {
            return;
        }

        setStartTime(+new Date() - suspension);
        setInterval(requestAnimationFrame(tick));
        setSuspension(0);
    }

    const stop = () =>
    {
        cancelAnimationFrame(interval);

        setStartTime(null);
        setSuspension(+difference)
    }

    const reset = () =>
    {
        cancelAnimationFrame(interval);

        setStartTime(null);
        setDifference(null);
        setSuspension(0);
        setInterval(null);
    }

    const tick = () =>
    {
        setDifference(new Date(+new Date() - startTime));
        setInterval(requestAnimationFrame(tick));
    }

    const addZero = (n) =>
    {
        return n < 10 ? "0" + n : n;
    }

    return(
        <section className="Chrono">
            <h1>
                {addZero(difference ? difference.getMinutes() : 0)}:
                {addZero(difference ? difference.getSeconds() : 0)}:
                {addZero(difference ? Math.round(difference.getMilliseconds()/10) : 0)}
            </h1>
            <div className="buttons">
              <button onClick={ start }>START</button>
              <button onClick={ stop }>STOP</button>
              <button onClick={ reset }>RESET</button>
            </div>
          </section>
    )
}

export default Timer;
