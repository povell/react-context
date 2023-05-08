import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Categories from './pages/Categories'
import ElementDetails from './pages/ElementDetails'
import { AuthProvider } from './context/AuthProvider'
import { MainLayout } from './layout/MainLayout'
import { AuthStatus } from './components/AuthStatus'
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  return (
    <>
      <AuthProvider>
        <AuthStatus />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/characters">
              <Route index element={<PrivateRoute><Categories /></PrivateRoute>} />
              <Route path="/characters/:id" element={<PrivateRoute><ElementDetails /></PrivateRoute>} />
            </Route>
            <Route path="/locations">
              <Route index element={<PrivateRoute><Categories /></PrivateRoute>} />
              <Route path="/locations/:id" element={<PrivateRoute><ElementDetails /></PrivateRoute>} />
            </Route>
            <Route path="/episodes">
              <Route index element={<PrivateRoute><Categories /></PrivateRoute>} />
              <Route path="/episodes/:id" element={<PrivateRoute><ElementDetails /></PrivateRoute>} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;