import React, { useState } from 'react';
import { ChevronRight, Folder, File, Code, Package, Settings, GitBranch, Terminal } from 'lucide-react';

// ===================================
// 1. PROJECT DATA STRUCTURE
// ===================================
const fileStructureData = [
  {
    name: 'FASHION-AI',
    type: 'folder',
    children: [
      { name: 'public', type: 'folder', children: [] },
      {
        name: 'src',
        type: 'folder',
        children: [
          {
            name: 'app',
            type: 'folder',
            children: [
              {
                name: 'api',
                type: 'folder',
                children: [
                  { name: 'ganarate', type: 'folder' },
                  { name: 'imgkit', type: 'folder' },
                  { name: 'ping', type: 'folder' },
                  { name: 'suggestion', type: 'folder' },
                  { name: 'vartual-try-on', type: 'folder' },
                ],
              },
              { name: 'components', type: 'folder' },
              { name: 'favicon.ico', type: 'file' },
              { name: 'globals.css', type: 'file' },
              { name: 'layout.js', type: 'file' },
              { name: 'page.js', type: 'file' },
              { name: 'middleware.js', type: 'file' },
            ],
          },
          {
            name: 'utils',
            type: 'folder',
            children: [
              { name: 'ganarateToken.js', type: 'file' },
              { name: 'responder.js', type: 'file' },
              { name: 'suggestionGanarator.js', type: 'file' },
              { name: 'verifyapikey.js', type: 'file' },
            ],
          },
        ],
      },
      // Adding common root files/folders for a typical Next.js project
      { name: 'node_modules', type: 'folder' },
      { name: '.gitignore', type: 'file' },
      { name: 'package.json', type: 'file' },
      { name: 'next.config.js', type: 'file' },
    ],
  },
];

// ===================================
// 2. ICON UTILITY
// ===================================

// Utility function to select the appropriate icon based on file type/extension
const getIcon = (node) => {
  if (node.type === 'folder') {
    return <Folder className="h-4 w-4 text-sky-400 mr-2 shrink-0" />;
  }
  
  const ext = node.name.split('.').pop();
  switch (ext) {
    case 'js':
    case 'jsx':
    case 'ts':
    case 'tsx':
      return <Code className="h-4 w-4 text-yellow-500 mr-2 shrink-0" />;
    case 'css':
      return <File className="h-4 w-4 text-blue-500 mr-2 shrink-0" />;
    case 'json':
      return <Package className="h-4 w-4 text-green-500 mr-2 shrink-0" />;
    case 'ico':
      return <Settings className="h-4 w-4 text-gray-400 mr-2 shrink-0" />;
    case 'gitignore':
      return <GitBranch className="h-4 w-4 text-red-400 mr-2 shrink-0" />;
    case 'config':
    case 'mjs':
      return <Terminal className="h-4 w-4 text-slate-400 mr-2 shrink-0" />;
    default:
      return <File className="h-4 w-4 text-gray-400 mr-2 shrink-0" />;
  }
};

// ===================================
// 3. RECURSIVE NODE COMPONENT
// ===================================

const FileNode = ({ node }) => {
  const isFolder = node.type === 'folder';
  // A folder only has children if the 'children' array exists AND has length
  const hasChildren = isFolder && node.children && node.children.length > 0;
  
  // Start with the top-level folder open, and others closed by default
  const [isOpen, setIsOpen] = useState(node.name === 'FASHION-AI');

  const toggleOpen = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <li className="list-none text-sm">
      <div 
        className={`
          flex items-center select-none py-1.5 px-2 rounded-md transition-colors 
          ${isFolder ? 'cursor-pointer hover:bg-gray-700/50' : 'cursor-default hover:bg-gray-800/50'}
        `}
        onClick={toggleOpen}
      >
        {/* Indentation for a visually straight line */}
        {isFolder && hasChildren ? (
          <ChevronRight 
            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
          />
        ) : (
          // Spacer for files or empty folders to align content with toggle icons
          <div className="h-4 w-4" /> 
        )}
        
        {/* Icon and Name */}
        {getIcon(node)}
        <span className={isFolder ? 'font-medium text-white' : 'text-gray-300'}>
          {node.name}
        </span>
      </div>

      {/* RENDER CHILDREN RECURSIVELY */}
      {isFolder && isOpen && hasChildren && (
        // The core of the tree-line look: pl for indent, border-l for the line
        <ul className="pl-4 border-l border-gray-700/50 ml-2">
          {node.children.map((childNode, index) => (
            <FileNode key={index} node={childNode} />
          ))}
        </ul>
      )}
    </li>
  );
};

// ===================================
// 4. MAIN EXPORT COMPONENT
// ===================================

export function FileExplorer() {
  // We render the structure starting from the single root node
  const rootNode = fileStructureData[0]; 

  return (
    <>
    <h1 className='text-center my-5 text-4xl'>hey Developer...</h1>
    <div className="bg-gray-800 text-gray-200 p-4 rounded-xl shadow-2xl mx-auto w-[90vw] font-sans mb-[40vh]">
      <h2 className="text-xl font-extrabold mb-3 text-emerald-400 border-b-2 border-gray-700 pb-2">
        📂 Project Structure
      </h2>
      <ul className="p-0">
        <FileNode node={rootNode} />
      </ul>
    </div>
    </>
  );
}

// ===================================
// 5. Example Usage (Optional)
// ===================================
/*
// To use this in your Next.js page:
// 1. Save the code above as src/components/FileExplorer.jsx
// 2. Import and use it in your page:

import { FileExplorer } from '@/components/FileExplorer';

export default function MyPage() {
  return (
    <div className="flex justify-center p-8 bg-gray-900 min-h-screen">
      <FileExplorer />
    </div>
  );
}
*/