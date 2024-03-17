import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const App = lazy(() => import('./app'));
const FallbackComponent = () => <div>Loading...</div>;

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<FallbackComponent />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);

// In addition, you can add an error boundary component to handle any unexpected errors:

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service
    console.error('Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

// And then wrap your Suspense component with the ErrorBoundary component:

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<FallbackComponent />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </HelmetProvider>
);
