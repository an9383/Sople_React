import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    }); //의존성배열없이 작성시에는 mount 이후 실행하라는 의미이다.
    // componentDidMount()과 componentUpdate()와 동일한역할을 하게 됨.
    // 컴포넌트가 마운트 된 이후에 실행된다.
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을때 실행됨.
    // 의존성 배열에 빈배열([])을 넣으면 마운트와 언마운시에 단 한번씩만 실행됨.
    // 의존성 배열 생략시 컴포넌트 업데이트 시마다 실행됨.

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
      // 컴포넌트가 마운트 해제되기전에 실행됨.
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
