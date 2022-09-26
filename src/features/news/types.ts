export type modalNews = {
    setNewModal: () => void;
    close: string;
    image: string;
    title: string;
    description: string;
}

export type modalPrem = {
    setModalPr: () => void;
    close: string;
    toSingImage: string;
}

export type noticeCard = {
    image: string;
    titulo: string;
    date: number | string;
    description?: string;
    setModal: () => void;
}

