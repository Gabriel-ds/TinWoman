import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {RectButton} from 'react-native-gesture-handler';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const Container = styled.SafeAreaView``;

export const Content = styled.View`
  background-color: #2f2e41;
  border-radius: 20;
  elevation: 10;
  width: ${width * 0.9};
  margin-top: 20px;
`;

export const HeaderLinear = styled(LinearGradient).attrs({
  colors: ['#FF00AB', '#6263FF'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: ${height * 0.03};
`;

export const Separator = styled.Image`
  margin-top: 20px;
`;

export const ContainerInfo = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Avatar = styled.Image`
  width: ${width * 0.36};
  height: ${height * 0.17};
  border-radius: 100px;
`;

export const ContainerPicture = styled(LinearGradient).attrs({
  colors: ['#FF00AB', '#6263FF'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  width: 160px;
  height: 160px;
  border-radius: 80px;

  align-items: center;
  justify-content: center;
`;

export const ViewGradient = styled.View`
  margin: 2px;
  width: 95%;
  height: 95%;
  background-color: #2f2e41;
  padding: 20px;
  border-radius: ${(width + height) / 2};
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #e6e6e6;
  font-weight: bold;
  margin-top: 8px;
`;

export const Profession = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  color: #ff00ab;
`;
export const ContainerGroup = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Age = styled.Text`
  font-size: 14px;
  color: #e6e6e6;
`;
export const Address = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  color: #e6e6e6;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #e6e6e6;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonAction = styled.View`
  flex-direction: row;
`;
export const ButtonLike = styled(RectButton)`
  border-radius: 60px;
  background-color: #2f2e41;
  width: ${width * 0.24};
  height: ${height * 0.12};
  margin-top: 20px;

  align-items: center;
  justify-content: center;

  margin-left: 50px;
  elevation: 10;
`;
export const ButtonDislike = styled(RectButton)`
  border-radius: 60px;
  background-color: #2f2e41;
  width: ${width * 0.24};
  height: ${height * 0.12};
  margin-top: 20px;
  padding: 30px;
  elevation: 10;

  align-items: center;
  justify-content: center;
`;
