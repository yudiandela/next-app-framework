const styles = {
  maxWidth: '800px',
  textAlign: 'center',
  border: '1px solid #ccc',
  textDecoration: 'none',
  padding: '20px',
  margin: 'auto',
  h1: {
    color: 'red'
  },
  p: {
    color: 'green'
  }
}

const Index = () => (
  <div style={styles}>
    <h1 style={styles.h1}>Next App Framework core by ReactJS</h1>
    <p style={styles.p}>Change this text in the pages/index.js</p>
  </div>
)

export default Index
