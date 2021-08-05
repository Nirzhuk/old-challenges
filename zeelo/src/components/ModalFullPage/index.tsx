import React, { useEffect, useRef } from "react";
import { ModalFullPageContainer, ModalFullPageContent, ModalTitleSection, ModalFullPageBackground,CloseButton} from './ModalFullPage.styled'
import useClickOutside from "hooks/utils/useClickOutside";

interface ModalFullPageProps {
    isOpen: boolean;
    onClose(): void;
    title?: string;
    children: React.ReactNode;
}

const ModalFullPage = ({
    children,
    isOpen,
    onClose,
}: ModalFullPageProps) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => { document.body.style.overflow = 'unset' };
    }, [isOpen]);
    const ref = useRef(null);
    useClickOutside(ref, onClose);
    if (!isOpen) return null;

    return (
        <ModalFullPageBackground>
            <ModalFullPageContainer ref={ref}>
                <ModalFullPageContent>
                    <ModalTitleSection>
                        <CloseButton size={36} onClick={onClose} />
                    </ModalTitleSection>
                    {children}
                </ModalFullPageContent>
            </ModalFullPageContainer>
        </ModalFullPageBackground>
    );
};
export default ModalFullPage;
