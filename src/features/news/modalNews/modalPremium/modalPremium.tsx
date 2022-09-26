import { modalPrem } from "../../types";
import {
    ContainerModal, CardModal,
    CloseButton, ImageModal,
    ContainerText, TituloModal,
    DescriptionModal,
    BotaoAssinar
} from "../../styled";

const titleModal = "Assine a nossa new sletter";

const descriptionModal = "Assine nossa newsletter e receba novidades de nossos personagens favoritos"

export function ModalPremium ({ setModalPr, close, toSingImage }: modalPrem)
{
    return (
        <ContainerModal>
            <CardModal>
                <CloseButton onClick={setModalPr}>
                    <img src={close} alt="close-button" />
                </CloseButton>
                <ImageModal src={toSingImage} alt="news-image" />
                <ContainerText>
                    <TituloModal>{titleModal}</TituloModal>
                    <DescriptionModal>{descriptionModal}</DescriptionModal>
                </ContainerText>
                <BotaoAssinar onClick={() => setTimeout(() => {alert("Suscripto!"); setModalPr()}, 1000)}>
                    Assinar
                </BotaoAssinar>
            </CardModal>
        </ContainerModal>
    )
}