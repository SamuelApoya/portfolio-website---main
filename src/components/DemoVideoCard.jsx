import React from 'react'

function DemoVideoCard({ title, description, videoId, githubLink }) {
  // Extract video ID from YouTube URL if full URL is provided
  const getVideoId = (url) => {
    if (!url) return '';
    
    // If it's already just the video ID
    if (url.length === 11 && !url.includes('/')) {
      return url;
    }
    
    // Extract from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const embedId = getVideoId(videoId);

  return (
    <div className="project-card">
      <div className="project-image">
        {embedId ? (
          <iframe
            width="100%"
            height="250"
            src={`https://www.youtube.com/embed/${embedId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: '0',
              objectFit: 'cover'
            }}
          ></iframe>
        ) : (
          <div style={{
            width: '100%',
            height: '250px',
            background: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '1.1rem'
          }}>
            Video Coming Soon
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              View Code
            </a>
          )}
          {embedId && (
            <a href={`https://www.youtube.com/watch?v=${embedId}`} target="_blank" rel="noopener noreferrer" className="demo-link">
              Watch on YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default DemoVideoCard