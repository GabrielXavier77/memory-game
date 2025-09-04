import Image from "next/image"

type CardsProps = {
  id: number;
  imageFlipped: string;
  image: string;
  flipped: boolean;
  matched: boolean;
  toggleFlipped: (id: number) => void;
}

export default function CardGame({
  id,
  imageFlipped,
  image,
  flipped,
  matched,
  toggleFlipped
}: CardsProps) {
  return (
    <div
      className={`select-none relative w-[100px] h-[140px] [perspective:1000px] ${matched ? "" : "cursor-pointer"}`}
      onClick={() => toggleFlipped(id)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute w-full h-full rounded-lg shadow-md backface-hidden">
          <Image
            src={image}
            alt="card back"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute w-full h-full rounded-lg shadow-md [transform:rotateY(180deg)] backface-hidden">
          <Image
            src={imageFlipped}
            alt="card front"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}