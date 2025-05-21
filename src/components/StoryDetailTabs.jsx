import { useState } from 'react';
import './StoryDetailTabs.css';

function StoryDetailTabs({ story }) {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button onClick={() => setActiveTab('summary')} className={activeTab === 'summary' ? 'active' : ''}>Summary</button>
        <button onClick={() => setActiveTab('author')} className={activeTab === 'author' ? 'active' : ''}>Author</button>
        <button onClick={() => setActiveTab('content')} className={activeTab === 'content' ? 'active' : ''}>Content</button>
      </div>

      <div className="tab-content">
        {activeTab === 'summary' && <p>{story.summary || 'No summary available'}</p>}
        {activeTab === 'author' && <p>{story.author || 'No author info'}</p>}
        {activeTab === 'content' && <p>{story.content || 'No content available'}</p>}
      </div>
    </div>
  );
}

export default StoryDetailTabs;















