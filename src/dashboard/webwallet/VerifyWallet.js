import React, { Fragment, useState, useEffect } from "react";
import Panel from "../../ui/Panel";
import Card from "../../ui/Card";

const CreateWallet = ({ location }) => {
  const [mnemonic, setMnemonic] = useState(location.state.mnemonic.split(" "));
  const [shuffled, setShuffled] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [matches, setMatches] = useState(false);
  const [error, setError] = useState(false);

  useEffect(
    () => {
      function shuffle(array) {
        const a = array.slice(0);
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
        }

        return a.map(word => {
          return {
            word,
            show: true
          };
        });
      }

      setShuffled(shuffle(mnemonic));
    },
    [mnemonic]
  );

  function checkChips() {
    setError(false);
    if (answer.length === mnemonic.length) {
      for (let i = 0; i < answer.length; i++) {
        if (answer[i] !== mnemonic[i]) {
          setError(true);
          return setMatches(false);
        }
      }
      return setMatches(true);
    }
    return setMatches(false);
  }

  function chipClick(evt) {
    const chipText = evt.target.textContent;
    if (!answer.includes(chipText)) {
      answer.push(chipText);
      setAnswer(answer);

      setShuffled(
        shuffled.map(word => {
          return {
            word: word.word,
            show: !answer.includes(word.word)
          };
        })
      );

      checkChips();
    }
  }

  function answerClick(evt) {
    if (matches) {
      return;
    }
    setError(false);
    const answerText = evt.target.textContent;

    answer.splice(answer.indexOf(answerText), 1);
    setAnswer(answer);

    setShuffled(
      shuffled.map(word => {
        return {
          word: word.word,
          show: !answer.includes(word.word)
        };
      })
    );
  }

  function resetChips() {
    setError(false);
    setAnswer([]);
    setShuffled(
      shuffled.map(word => {
        return {
          word: word.word,
          show: true
        };
      })
    );
  }

  return (
    <Panel className="panel-wallet">
      <Card className="">
        {answer}
        <Card className="card-inner">
          <h2 style={matches ? { height: "1em" } : { height: "0em", overflow: "hidden", margin: 0 }} className="heading-2">
            Correct!
          </h2>
          <p style={matches ? { height: "0em", overflow: "hidden", margin: 0 } : { height: "3em" }}>
            Please restore your wallet passphrase by clicking each word in the correct order
          </p>
          <div className="chips" style={matches ? { height: "0em" } : { height: "20em" }}>
            {shuffled.map(word => {
              return (
                <div key={Math.random()} className={word.show ? "chip" : "chip hidden"} onClick={chipClick}>
                  {word.word}
                </div>
              );
            })}
          </div>
          <button className={matches ? "button button-outline hidden removed" : "button button-outline"} onClick={resetChips}>
            Reset
          </button>
          {error ? <div style={{ color: "red" }}>This passphrase does not match. Please try again.</div> : null}
          <div className="mnemonic" style={matches ? { color: "green", border: "solid 2px green" } : {}}>
            {answer.map(word => {
              return (
                <span key={Math.random()} className={"answer-word"} onClick={answerClick}>
                  {word}
                </span>
              );
            })}
          </div>
          <button className={matches ? "button button-outline" : "button button-outline hidden removed"}>Continue</button>
        </Card>
      </Card>
    </Panel>
  );
};

export default CreateWallet;
