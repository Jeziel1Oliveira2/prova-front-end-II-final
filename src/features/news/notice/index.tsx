import {
    CardNoticia, ImageCardNoticia,
    TituloCardNoticia, DateCardNoticia,
    DescriptionCardNoticia, BotaoLeitura
} from ".././styled"
import { noticeCard } from "../types";

export function CardNews({ image, titulo, date, description, setModal }: noticeCard) {
    return (
        <CardNoticia>
            <ImageCardNoticia src={image} />
            <TituloCardNoticia>{titulo}</TituloCardNoticia>
            <DateCardNoticia>{date}</DateCardNoticia>
            <DescriptionCardNoticia>{description}</DescriptionCardNoticia>
            <BotaoLeitura onClick={setModal}>Ver mais</BotaoLeitura>
        </CardNoticia>
    )
}