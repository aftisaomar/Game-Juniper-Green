import {
    StyleSheet
  } from 'react-native';
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      containerGame : {
        
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',

      },

      buttonContainer: {
        backgroundColor: '#f9c2ff',
        borderRadius: 5,
        padding: 10,
        margin: 20
      },
      containerStudent: {
        padding: 5,
        margin: 10
      },
      btnNav: {
        fontSize: 20,
        color: '#fff'
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      text: {
        fontSize: 24,     
        fontWeight: 'bold',  
      }
    });
  
    export default styles;