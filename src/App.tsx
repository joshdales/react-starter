import './App.css'

const App: React.FC = () => {
  return (
    <>
      <main>
        <h1>This is a basic React app</h1>

        <p>It's for quickly creating a Typescript based react app with settings that I like.</p>

        <p>
          It doesn't do anything fancy, it's just an easy setup for getting started with some tools
          like eslint and prettier.
        </p>

        <p>
          And as an added bonus you can easily deploy it to Github Pages by manually running the{' '}
          <strong>Deploy Project</strong> workflow
        </p>
      </main>

      <footer>
        <p>
          Made with the <a href="https://github.com/joshdales/react-starter">react-starter</a>{' '}
          template
        </p>
      </footer>
    </>
  )
}

export default App
