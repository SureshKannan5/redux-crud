import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import PostsList from './feature/Posts/PostsList'
function App() {
  return (
    <div className="container">
      <h2 className="mb-5">React Redux boilerplate</h2>
      <PostsList />
    </div>
  )
}
export default App