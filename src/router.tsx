import { lazy, Suspense } from 'react'
import { createHashRouter } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'

// Code splitting - lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function LazyPage({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="page-loader"><div className="skeleton" style={{ width: '100%', height: '200px', borderRadius: '16px' }} /><div className="skeleton" style={{ width: '60%', height: '24px', borderRadius: '8px', marginTop: '1rem' }} /><div className="skeleton" style={{ width: '80%', height: '16px', borderRadius: '8px', marginTop: '0.75rem' }} /></div>}>
      {children}
    </Suspense>
  )
}

export const router = createHashRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <LazyPage><Home /></LazyPage> },
      { path: 'projects', element: <LazyPage><Projects /></LazyPage> },
      { path: 'about', element: <LazyPage><About /></LazyPage> },
      { path: 'contact', element: <LazyPage><Contact /></LazyPage> },
      { path: '*', element: <LazyPage><NotFound /></LazyPage> }
    ]
  }
])
