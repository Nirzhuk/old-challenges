import { Book } from "modules/books/types";
import {
  CardContent,
  CardContentContainer,
  CardImage,
  CardImageContainer,
  CardStyled,
} from "./Card.styled";


interface CardProps {
    onClick(book:Book): void;
    book: Book;
}


const Card = ({
    onClick,
    book
}: CardProps) => {
    return (
        <CardStyled>
            <CardImageContainer>
                <CardImage onClick={() => onClick(book)} src={book.image} />
            </CardImageContainer>
            <CardContentContainer>
                <CardContent>
                    <strong>{book.title}</strong>
                </CardContent>
            </CardContentContainer>
        </CardStyled>
    );
};

export default Card;
