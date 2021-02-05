import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchList from './components/search_list/search_list.jsx';
import VideoList from './components/video_list/video_list.jsx';
import VideoDetail from './components/video_detail/video_detail.jsx';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const search = (query) => {
    youtube.search(query).then((videos) => {
      setVideos(videos);
      setSelectedVideo(null);
    });
  };

  useEffect(() => {
    youtube.fetchYoutube().then((videos) => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchList onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
