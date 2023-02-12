import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useAuth} from '../context/AuthContext';

const logo = require('../assets/google-logo.png');
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsZXgiLCJpYXQiOjE1MTYyMzkwMjIsImlkIjoic29tZS11dWlkIiwiZW1haWwiOiJmb29iYXJAZ21haWwuY29tIn0.Oi9BfcdhNFen-K-jnU9w7HwWCsSm01RearnEhUQ0oEk';

function SignInScreen() {
  const {authenticate} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Social sign in</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => authenticate(token)}>
        <Image style={styles.image} source={logo} />
        <Text style={styles.buttonText}>Google Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SignInScreen;
