import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProductForm from './components/products/ProductForm';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import ProductList from './components/products/ProductList';
import NotFound from './components/common/NotFound';

// Protected route component
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} />
      <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Register />} />
      
      {/* Protected routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/products" 
        element={
          <ProtectedRoute>
            <Layout>
              <ProductList />
            </Layout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/products/new" 
        element={
          <ProtectedRoute>
            <Layout>
              <ProductForm />
            </Layout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/products/:id/edit" 
        element={
          <ProtectedRoute>
            <Layout>
              <ProductForm />
            </Layout>
          </ProtectedRoute>
        } 
      />
        
      {/* Redirect root to dashboard or login */}
      <Route 
        path="/" 
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      
      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
