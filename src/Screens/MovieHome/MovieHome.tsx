import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Styled from 'styled-components/native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import BigCatalogList from './BigCatalogList';
import SubCatalogList from './SubCatalogList';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const MovieHome = ({navigation}: Props) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _logout = () => {
    AsyncStorage.removeItem('key');
    navigation.navigate('LoginNavigator');
  };

  useEffect(() => {
    navigation.setParams({logout: _logout});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <BigCatalogList
        url="http://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {id});
        }}
      />
      <SubCatalogList
        title="최신 등록순"
        url="http://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {id});
        }}
      />
      <SubCatalogList
        title="평점순"
        url="http://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {id});
        }}
      />
      <SubCatalogList
        title="다운로드순"
        url="http://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {id});
        }}
      />
    </Container>
  );
};
interface INaviProps {
  navigation: NavigationScreenProp<NavigationState>;
}
MovieHome.navigationOptions = ({navigation}: INaviProps) => {
  const logout = navigation.getParam('logout');
  return {
    title: 'MOVIEAPP',
    headerTintColor: '#E70915',
    headerStyle: {
      backgroundColor: '#141414',
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: null,
    headerRight: (
      <StyleButton
        onPress={() => {
          if (logout && typeof logout === 'function') {
            logout();
          }
        }}>
        <Icon source={require('~/Assets/Images/logout.png')} />
      </StyleButton>
    ),
  };
};

const Container = Styled.ScrollView`
    flex:1;
    background-color:#141414;
`;
const StyleButton = Styled.TouchableOpacity`
    padding:8px;
`;
const Icon = Styled.Image`
width:25px;
height:25px;
`;

export default MovieHome;
