import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
import BigCatalog from '~/Components/BigCatalog';

interface Props {
  url: string;
  onPress: (id: number) => void;
}

const BigCatalogList = ({url, onPress}: Props) => {
  const [data, setData] = useState<Array<IMovie>>([]);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res.data.movies);
      })
      .catch(error => {
        console.log(error);
      });
  }, [url]);

  return (
    <Container>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={data}
        keyExtractor={(item, index) => {
          return `bigScreen-${index}`;
        }}
        renderItem={({item, index}) => (
          <BigCatalog
            id={(item as IMovie).id}
            image={(item as IMovie).large_cover_image}
            year={(item as IMovie).year}
            title={(item as IMovie).title}
            genres={(item as IMovie).genres}
            onPress={onPress}
          />
        )}
      />
    </Container>
  );
};

const Container = Styled.View`
    height:300px;
    margin-bottom: 8px;
`;

export default BigCatalogList;
