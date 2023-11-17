import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
// import { Typewriter } from "./components/Typewriter";
// import { Cursor } from "./components/Cursor";
// import { useTypewriter } from "./hooks/useTypewriter";
// import "./styles.module.css";

/**
 * Old demo
 * https://codesandbox.io/s/react-typewriting-effect-8ulgs
 *
 * Github
 * https://github.com/awran5/react-simple-typewriter/
 */

// const TypewriterHook = () => {
//   const [text, flags] = useTypewriter({
//     words: ["Hello", "World", "This", "is", "Typewriter", "Hook"],
//     loop: 2,
//     // typeSpeed: 20,
//    // onLoopDone: () => console.log("done from typewriter hook")
//   });

//   const { isDelete, isType, isDelay, isDone } = flags;

//   return (
//     <div>
//       <span>{text}</span>
//       <Cursor />

//       {isType && <div>typing..</div>}
//       {isDelay && <div>delay..</div>}
//       {isDelete && <div>deleting..</div>}
//       {isDone && <div>done!</div>}
//     </div>
//   );
// };

export default function App() {
  const [count, setCount] = useState(0);
  const handleDone = () => {
    console.log("done from typewriter component");
  };
  // const handleType = (counter: number) => {
  //   setCount(counter);
  // };

  return (
    <div className="text-3xl text-red-400 text-center mx-auto " style={{ padding: 20 }}>
      <h3>Hurry up!</h3>

      <Typewriter
        words={[
          "the offer is about to close ",
          " grab you BOOk as easrly as possible"
        ]}
        loop={100}
        // typeSpeed={40}
        cursor
        onLoopDone={handleDone}
        // onType={handleType}
      />
      {/* <h5>Runing count: {count}</h5> */}
      {/* <h3>Hook</h3> */}
      {/* //<TypewriterHook /> */}
    </div>
  );
}
