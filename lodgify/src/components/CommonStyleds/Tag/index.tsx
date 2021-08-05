import React from 'react'
import { BookableStatusType } from '../../../core/types/App'
import { backgroundColorsTags, TagStyled } from './Tag.styled'

interface TagProps {
    children: React.ReactNode;
    state: BookableStatusType;
}
const Tag = ({ children, state }: TagProps) => {

    const getStateColor = (state: string) => {
        switch (state) {
            case 'BOOKED':
                return backgroundColorsTags[state]
            case 'UNAVAILABLE':
                return backgroundColorsTags[state]
            case 'AVAILABLE':
                return backgroundColorsTags[state]

            default:
                return backgroundColorsTags['BOOKED']
        }
    }
    return (
        <TagStyled stateColor={getStateColor(state)} data-testid="tag">
            {children}
        </TagStyled>
    )
}

export default Tag
