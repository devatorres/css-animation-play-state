import Signature from '@/components/signature'
import Action from '@/components/action'
import Breadcrumbs from '@/components/breadcrumbs'
import './styles.css'

const Home = () => {
  return (
    <div className="home">
      <header>
        <Breadcrumbs />
      </header>
      <main>
        <Action />
      </main>
      <footer>
        <Signature />
      </footer>
    </div>
  )
}

export default Home
