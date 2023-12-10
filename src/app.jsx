import { useState } from "preact/hooks";
import "./app.css";

const conversionFactors = {
  cs2: 1,
  valorant: 0.314,
  overwatch: 5,
  rainbowSix: 12.5,
  apexLegends: 1.818,
  fortnite: 0.0075,
  quakeChampions: 0.022,
  pubg: 0.7,
  battlefield: 0.1,
};

export const App = () => {
  const [sourceGame, setSourceGame] = useState("cs"); // Default to CS:GO
  const [targetGame, setTargetGame] = useState("cs"); // Default to CS:GO
  const [sourceSensitivity, setSourceSensitivity] = useState("");
  const [convertedSensitivity, setConvertedSensitivity] = useState("");

  const convertSensitivity = () => {
    // Define conversion factors within the function scope

    const sens = parseFloat(sourceSensitivity);

    const convertedSens =
      sens *
      (1 / conversionFactors[sourceGame]) *
      conversionFactors[targetGame];

    setConvertedSensitivity(convertedSens.toFixed(6));
  };

  return (
    <div className="app-container">
      <h2>Sensitivity Converter</h2>
      <div className="game-selection">
        <label>Select Source Game:</label>
        <select
          value={sourceGame}
          onChange={(e) => setSourceGame(e.target.value)}
        >
          {Object.keys(conversionFactors).map((game) => (
            <option key={game} value={game}>
              {game.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="game-selection">
        <label>Select Target Game:</label>
        <select
          value={targetGame}
          onChange={(e) => setTargetGame(e.target.value)}
        >
          {Object.keys(conversionFactors).map((game) => (
            <option key={game} value={game}>
              {game.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <label>Enter Sensitivity:</label>
        <input
          type="number"
          step="0.000000000001"
          value={sourceSensitivity}
          onChange={(e) => setSourceSensitivity(e.target.value)}
        />
      </div>
      <button onClick={convertSensitivity}>Convert</button>
      {convertedSensitivity && (
        <div className="result-container">
          <h3>Converted Sensitivity:</h3>
          <p>{convertedSensitivity}</p>
        </div>
      )}
    </div>
  );
};
