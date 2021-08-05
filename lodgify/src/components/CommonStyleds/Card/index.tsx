import { memo, useState, useEffect } from "react";
import Button from "../Button";
import Paragraph from "../Paragraph";
import Tag from "../Tag";
import {
    ShowcaseContent,
    CardStyled,
    ShowcaseImageContainer,
    ShowcaseImageOverlay,
    CardTitle,
    ShowcaseImage,
    CardInnerContainer,
    TitleSection,
    BottomSection
} from "./Card.styled";
import { CheckCircle } from 'react-feather'
import { BookableStatusType } from "../../../core/types/App";


interface CardProps {
    id: string;
    name: string;
    image: string;
    bookable: boolean;
    booked: number;
}


const Card = ({
    id,
    name,
    image,
    booked,
    bookable,
}: CardProps) => {

    const [bookableState, setBookableState] = useState({
        bookable: false,
        booked: 0
    })
    const handleClick = () => {
        setTimeout(function () {//simulate api
            setBookableState({
                bookable: true,
                booked: 1
            })
        }, 200);

    }

    const renderBottomSection = (booked: number, bookable: boolean) => {
        if (!bookable) {
            return <Button disabled>Not Bookable</Button>
        }
        if (booked > 0 && bookable) {
            return <Paragraph color="#11A960"> <CheckCircle size="16px" /> Booked for {booked} days</Paragraph>
        }
        else if (bookable) {
            return <Button onClick={handleClick}>Book</Button>
        }
    }
    const renderTag = (booked: number, bookable: boolean)  => {
        if (!bookable) {
            return <Tag state={BookableStatusType.UNAVAILABLE}>unavailable</Tag>
        }
        if (booked > 0 && bookable) {
            return <Tag state={BookableStatusType.BOOKED}>booked</Tag>
        }
        else if (bookable) {
            return <Tag state={BookableStatusType.AVAILABLE}>available</Tag>
        }


    }

    useEffect(() => {
        setBookableState({
            bookable,
            booked
        });
    }, [])//eslint-disable-line react-hooks/exhaustive-deps
    return (
        <CardStyled data-testid="card">
            <CardInnerContainer>
                <ShowcaseImageContainer>
                    <ShowcaseImageOverlay>
                        {renderTag(bookableState.booked, bookableState.bookable)}
                    </ShowcaseImageOverlay>
                    <ShowcaseImage loading="lazy" src={image} alt={name}/>
                </ShowcaseImageContainer>
                <ShowcaseContent>
                    <TitleSection>
                        <Paragraph as="span" color="#999999">Id: {id}</Paragraph>
                        <CardTitle>{name}</CardTitle>
                    </TitleSection>
                    <BottomSection>
                        {renderBottomSection(bookableState.booked, bookableState.bookable)}
                    </BottomSection>
                </ShowcaseContent>
            </CardInnerContainer>
        </CardStyled>
    );
};

export default memo(Card);
