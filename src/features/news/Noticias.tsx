import { useEffect, useState } from "react";
import { AssinarImage, CloseButton as Close } from "../../assets";
import { obterNoticias } from "./fakeRest";
import { INoticiasNormalizadas } from "./interface/interface";
import { dataFormat } from "./format/dataFormat";
import { titleFormat } from "./format/titleFormat";
import {  ContainerNoticias, ListaNoticias, TituloNoticias } from "./styled";
import { CardNews } from "./notice";
import { ModalPremium } from "./modalNews/modalPremium/modalPremium";
import { ModalN } from "./modalNews/modalNews";


const title = "Noticias dos Simpsons";

const News = () => 
{
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const obterInformacoes = async () => {
    const resposta = await obterNoticias();

    const data = resposta.map((noticia) => 
    {
      return {
        id: noticia.id,
        titulo: titleFormat(noticia.titulo),
        description: noticia.description,
        date: `Faz ${dataFormat(noticia.date)} minutos`,
        premium: noticia.premium,
        image: noticia.image,
        descriptionCurto: noticia.description.substring(0, 100),
      };
    });

    setNoticias(data);
  };

  useEffect(() => {
    obterInformacoes();
  }, []);

  return(
    <ContainerNoticias>
      <TituloNoticias>
        {title}
      </TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => (
          <CardNews
            key={noticia.id}
            image={noticia.image}
            titulo={noticia.titulo}
            date={noticia.date}
            description={noticia.descriptionCurto}
            setModal={() => setModal(noticia)}
            />
        ))}
        {modal ? (
          modal.premium ? (
            <ModalPremium
              setModalPr={() => setModal(null)}
              close={Close}
              toSingImage={AssinarImage}
            />
          ) : (
            <ModalN 
            setNewModal={() => setModal(null)}
            close={Close}
            image={modal.image}
            title={modal.titulo}
            description={modal.description}
            />
          )

        )
        : null 
        }
      </ListaNoticias>
    </ContainerNoticias>
  )
}



export default News;
