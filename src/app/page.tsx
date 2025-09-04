"use client";

import { useState, useEffect } from "react";
import CardGame from "@/components/CardGame";

type CardsProps = {
  imageFlipped: string;
  image: string;
  flipped: boolean;
  matched: boolean;
};

export default function MemoryGame() {
  const [cardsList, setCardsList] = useState<CardsProps[]>([
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/106740406415422_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/106740406415422_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/88032602496343_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/88032602496343_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/88033139494397_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/88033139494397_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/105642505382303_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/105642505382303_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/52780584775806_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/52780584775806_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/88033139494377_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/88033139494377_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/105559290393784_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/105559290393784_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/88035555413453_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
    {
      imageFlipped:
        "https://efootballhub.net/images/efootball24/players/88035555413453_l.webp",
      image:
        "https://opengameart.org/sites/default/files/card%20back%20blue.png",
      flipped: false,
      matched: false,
    },
  ]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    if (isStarted) {
      if (isWinner) return;
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    } else {
      setTime(0);
    }
  }, [isStarted, isWinner, time]);

  useEffect(() => {
    if (score === 8) {
      setIsWinner(true);
    } else {
      return;
    }
  }, [score]);

  const handleStart = () => {
    setCardsList(shuffleCards(cardsList))
    setIsWinner(false);
    setIsStarted(true);
  };

  const handleRestart = () => {
    setIsStarted(false);
    setIsWinner(false);
    setScore(0);
    setTime(0);
    setSelectedCards([]);
    const newCardsList = [...cardsList];
    newCardsList.map((card) => {
      card.flipped = false;
      card.matched = false;
    });
  };

  const handleTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const zeroToLeft = (time: number) => time.toString().padStart(2, "0");

    return `${zeroToLeft(minutes)}:${zeroToLeft(seconds)}`;
  };

  const shuffleCards = (cardsList: CardsProps[]): CardsProps[] => {
    const newCardsList = [...cardsList];
    for (let i = newCardsList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCardsList[i], newCardsList[j]] = [newCardsList[j], newCardsList[i]];
    }
    return newCardsList;
  };

  const toggleFlipped = (id: number) => {
    if (!isStarted) return;

    const newCardsList = [...cardsList];
    const card = newCardsList[id];

    if (card.flipped || card.matched || selectedCards.length === 2) return;

    card.flipped = !card.flipped;

    const newSelectedCardsList = [...selectedCards, id];
    setSelectedCards(newSelectedCardsList);
    setCardsList(newCardsList);

    if (newSelectedCardsList.length === 2) {
      const firstCard = newCardsList[newSelectedCardsList[0]];
      const secondCard = newCardsList[newSelectedCardsList[1]];
      if (firstCard.imageFlipped === secondCard.imageFlipped) {
        firstCard.matched = true;
        secondCard.matched = true;
        setScore(score + 1);
        setCardsList([...newCardsList]);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          newCardsList[newSelectedCardsList[0]].flipped = false;
          newCardsList[newSelectedCardsList[1]].flipped = false;
          setCardsList([...newCardsList]);
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center p-2">
      {isStarted && !isWinner && (
        <div className="grid grid-cols-4 w-[35%] gap-y-2 border-x-4 border-t-4 rounded-t-2xl border-purple-600 bg-purple-200 p-4 place-items-center">
          {cardsList.map((card, index) => (
            <CardGame
              key={index}
              id={index}
              imageFlipped={card.imageFlipped}
              image={card.image}
              flipped={card.flipped}
              matched={card.matched}
              toggleFlipped={toggleFlipped}
            />
          ))}
        </div>
      )}
      {!isStarted && !isWinner && (
        <div className="flex flex-col justify-center items-center w-[35%] h-[620px] border-x-4 border-t-4 rounded-t-2xl border-purple-600 bg-purple-200 p-4">
          <p className="text-purple-600 text-3xl font-bold mb-4">
            Jogo da Memoria!
          </p>
          <p className="text-lg">
            Clique{" "}
            <span className="px-4 py-2 font-bold rounded-2xl border-2 border-purple-600 text-purple-600 bg-purple-200">
              Start
            </span>{" "}
            para começar
          </p>
        </div>
      )}
      {isWinner && (
        <div className="flex flex-col justify-center items-center w-[35%] h-[620px] border-x-4 border-t-4 rounded-t-2xl border-purple-600 bg-purple-200 p-4">
          <p className="text-purple-600 text-3xl font-bold mb-4">
            Parabéns você venceu!
          </p>
          <p className="text-lg">Você ganhou em {handleTime(time)}</p>
        </div>
      )}
      <div className="flex bg-purple-600 p-4 justify-between items-center rounded-b-2xl text-white h-[88px] w-[35%]">
        <div className="flex flex-col justify-center items-center w-1/4">
          <p className="font-bold text-xl">Score</p>
          <p className="text-lg font-semibold">{score}</p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/4 font-bold">
          <button
            className={`${
              isStarted
                ? "bg-red-600 text-white"
                : "bg-purple-200 text-purple-600"
            } p-4 text-xl cursor-pointer rounded-2xl w-full`}
            onClick={isStarted ? () => handleRestart() : () => handleStart()}
          >
            {isStarted ? "Restart" : "Start"}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-1/4">
          <p className="font-bold text-xl">Timer</p>
          <p className="text-lg font-semibold">{handleTime(time)}</p>
        </div>
      </div>
    </div>
  );
}
