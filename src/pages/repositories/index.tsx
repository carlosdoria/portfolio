import { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

import ApiGithub from '../../services/api';
import { IRepositoriesUser, repositoriesInfos } from '../api/interfaces';

import * as S from '../../styles/repositoriesStyles';

export const getStaticProps = async () => {
  const res = await ApiGithub.get('/repos');
  const responseRepositories = res.data;

  return {
    props: {
      repositoriesInfos: responseRepositories,
    },
  };
};

const Repositories = ({ repositoriesInfos }: IRepositoriesUser) => {
  const [repositories, setRepositories] = useState<[repositoriesInfos]>();

  useEffect(() => {
    setRepositories(repositoriesInfos);
  }, [repositoriesInfos]);

  return (
    <>
      <Navbar />
      <S.Container>
        <S.Title>Meus Repositórios</S.Title>
        {repositories?.map(item => {
          if (item.fork === false) {
            // return <div key={item.id}>{item.name}</div>;
            return (
              <Card
                key={item.id}
                title={item.name}
                description={item.description}
                url={item.html_url}
              />
            );
          }
        })}
      </S.Container>
    </>
  );
};

export default Repositories;
