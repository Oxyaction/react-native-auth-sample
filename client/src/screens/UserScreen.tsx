import {Text} from 'react-native';
// import { useRequest } from '../context/RequestContext';
import {useAuth} from '../context/AuthContext';

function UserScreen() {
  const {user} = useAuth();

  return <Text>Hello {user?.name}</Text>;
}

export default UserScreen;
