import "./App.css";
import Nomina from './Nomina'

export default function App() {
  return (
    <div className="app">
      <div className="flex justify-center items-center bg-red-300 h-full w-full">
        <h1 className="font-bold text-5xl text-white underline">
          React, Typescript, Tailwind!
        </h1><br />
        <Nomina />
      </div>
    </div>
  );
}
