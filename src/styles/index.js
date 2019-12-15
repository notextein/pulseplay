import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  headerLogo: {
    position: 'absolute',
    width: 120,
    height: 60,
    left: 10,
    top: 30
  },
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 24
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  },
  articleSnippet: {
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 10,
    marginVertical: 5,
    height: 175,
    borderColor: '#d6d7da'
  },
  articleSnippetTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D4E4F'
  },
  articleSnippetAuthor: {
    fontSize: 11,
    opacity: 0.8,
    color: '#4D4E4F'
  },
  articleSnippetContent: {
    padding: 10,
    fontSize: 12,
    alignItems: 'center'
  },
  articleSnippetAvatar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10
  },
  articleSnippetReadMore: {
    fontSize: 11,
    opacity: 0.8,
    color: '#4D4E4F',
    position: 'absolute',
    bottom: 10,
    left: 10
  }
});

export default styles;
