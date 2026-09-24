/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { WorksPage } from './pages/WorksPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { PageRoute, Project } from './types/portfolio';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(PROJECTS[0]);

  // Synchronize state with URL hash for seamless bookmarking and navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project/')) {
        const projectId = hash.replace('project/', '');
        const found = PROJECTS.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
          setCurrentPage('case-study');
          return;
        }
      }

      if (['home', 'works', 'services', 'about', 'skills', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageRoute);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute, projectId?: string) => {
    setCurrentPage(page);
    if (page === 'case-study' && projectId) {
      window.location.hash = `project/${projectId}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#003028] text-[#F8F8F8] flex flex-col font-sans selection:bg-[#003828] selection:text-[#F8F8F8] relative">
      {/* Studio Magnetic Cursor Follower */}
      <CustomCursor />

      {/* 3-Zone Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Animated Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + (currentPage === 'case-study' ? `-${selectedProject?.id}` : '')}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={navigateTo}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            )}

            {currentPage === 'works' && (
              <WorksPage
                onNavigate={navigateTo}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage onNavigate={navigateTo} />
            )}

            {currentPage === 'about' && (
              <AboutPage onNavigate={navigateTo} />
            )}

            {currentPage === 'skills' && (
              <SkillsPage onNavigate={navigateTo} />
            )}

            {currentPage === 'contact' && (
              <ContactPage onNavigate={navigateTo} />
            )}

            {currentPage === 'case-study' && (
              <CaseStudyPage
                project={selectedProject}
                onNavigate={navigateTo}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Brand Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
