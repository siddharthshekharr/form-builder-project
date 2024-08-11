// src/components/Dashboard.js

import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import { toast } from 'react-toastify';
import styles from '../styles/dashboard.module.css';

const Dashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [folders, setFolders] = useState([]);
  const [forms, setForms] = useState([]);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      fetchFoldersAndForms();
    }
  }, [user, navigate]);

  const fetchFoldersAndForms = async () => {
    try {
      const [foldersRes, formsRes] = await Promise.all([
        api.get('/folders'),
        api.get('/forms')
      ]);
      setFolders(foldersRes.data);
      setForms(formsRes.data);
    } catch (error) {
      toast.error('Error fetching data');
    }
  };

  const handleCreateFolder = async () => {
    try {
      await api.post('/folders', { name: newFolderName });
      setNewFolderName('');
      setShowCreateFolder(false);
      fetchFoldersAndForms();
      toast.success('Folder created successfully');
    } catch (error) {
      toast.error('Error creating folder');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
    navigate('/login');
    toast.info('You have been logged out.');
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.headerActions}>
          <button onClick={() => setShowCreateFolder(true)} className={styles.createFolderBtn}>
            <span className={styles.folderIcon}>📁</span> Create a folder
          </button>
          <div className={styles.dropdown}>
            <button onClick={() => setShowDropdown(!showDropdown)} className={styles.dropdownBtn}>
              {user?.name}'s workspace ▼
            </button>
            {showDropdown && (
              <div className={styles.dropdownContent}>
                <a href="#settings">Settings</a>
                <a href="#" onClick={handleLogout}>Log Out</a>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className={styles.content}>
        <div className={styles.folders}>
          {folders.map(folder => (
            <div key={folder._id} className={styles.folder}>
              <span className={styles.folderIcon}>📁</span>
              {folder.name}
            </div>
          ))}
        </div>
        <div className={styles.forms}>
          <div className={styles.createForm}>
            <span className={styles.plus}>+</span>
            <span>Create a typebot</span>
          </div>
          {forms.map(form => (
            <div key={form._id} className={styles.form}>
              <span>{form.name}</span>
            </div>
          ))}
        </div>
      </main>
      {showCreateFolder && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Create New Folder</h2>
            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="Enter folder name"
            />
            <div className={styles.modalActions}>
              <button onClick={handleCreateFolder} className={styles.doneBtn}>Done</button>
              <button onClick={() => setShowCreateFolder(false)} className={styles.cancelBtn}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;