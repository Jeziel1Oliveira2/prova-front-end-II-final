import {
    ContainerModal, CardModal, CloseButton,
    ImageModal, ContainerText, TituloModal, 
    DescriptionModal 
} from "../styled";
import { modalNews } from "../types";


export function ModalN ({setNewModal, close, image, title, description} : modalNews)
{
    return (
        <ContainerModal>
            <CardModal>
                <CloseButton onClick={setNewModal}>
                    <img src={close} alt="close-button" />
                </CloseButton>
                <ImageModal src={image} alt="news-image" />
                <ContainerText>
                    <TituloModal>{title}</TituloModal>
                    <DescriptionModal>{description}</DescriptionModal>
                </ContainerText>
            </CardModal>
        </ContainerModal>
    )
}