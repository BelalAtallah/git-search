import "./card.css";
import { ReactNode } from "react";

interface ICard {
  children: ReactNode;
  title: string;
}

export default function Card({ children, title }: ICard) {
  return (
    <div className="user-type-card">
      <h2 className="text-white text-xl">{title}</h2>
      {children}
    </div>
  );
}
