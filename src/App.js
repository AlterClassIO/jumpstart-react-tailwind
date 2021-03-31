import { Lightning } from './icons';

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-9 p-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-semibold tracking-wide flex flex-col sm:flex-row items-center justify-center">
          <Lightning className="w-12 h-12 mb-1 sm:mb-0 sm:mr-1 flex-shrink-0 animate-pulse" />{' '}
          Jumpstart React
        </h1>
        <p className="text-xl">
          Now it's your turn. Build and style this application.
        </p>
      </div>
      <div className="text-xl text-center space-y-2 px-4 sm:px-8 py-4 bg-gray-100 rounded-lg max-w-lg">
        <p>
          If you need help, feel free to go to the{' '}
          <a
            href="http://discord.gg/HTQvwxA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
          >
            Discord server
          </a>{' '}
          and ask the community.
        </p>
      </div>
    </div>
  );
}

export default App;
