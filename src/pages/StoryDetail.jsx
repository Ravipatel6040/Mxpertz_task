import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./StoryDetail.css";

function StoryDetail() {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Full Story Data:", data);
        setStory(data);
      });
  }, [id]);

  if (!story) return <div>Loading...</div>;

  return (
    <div className="story-detail">
      <h1>{story.Title}</h1>

      {/* Main Images */}
      {story.Image?.length > 0 ? (
        <div className="main-images">
          {story.Image.map((img, idx) => (
            <img
              key={idx}
              src={`https://ik.imagekit.io/dev24/${img}`}
              alt="Story"
              className="main-story-image"
            />
          ))}
        </div>
      ) : (
        <p className="no-data">No images available.</p>
      )}

      {/* Story Adventure */}
      {story?.Storyadvenure?.Storytitle && (
        <>
          <h2>{story.Storyadvenure.Storytitle}</h2>
          {story.Storyadvenure.content?.length > 0 ? (
            story.Storyadvenure.content.map((section, index) => (
              <div className="story-section" key={index}>
                <div className="section-images">
                  {section.Storyimage?.map((img, i) => (
                    <img
                      key={i}
                      src={`https://ik.imagekit.io/dev24/${img}`}
                      alt="Section"
                    />
                  ))}
                </div>
                <div className="section-paragraphs">
                  {section.Paragraph?.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="no-data">No adventure content available.</p>
          )}
        </>
      )}

      {/* Word Explore */}
      <h2>Word Explore</h2>
      {story.Wordexplore?.length > 0 ? (
        <div className="word-explore">
          {story.Wordexplore.map((word, i) => (
            <div className="word-card" key={i}>
              <h3>{word.Storytitle}</h3>
              {word.Storyimage?.[0] && (
                <img
                  src={`https://ik.imagekit.io/dev24/${word.Storyimage[0]}`}
                  alt={word.Storytitle}
                />
              )}
              <p><strong>Text:</strong> {word.Storyttext}</p>
              <p><strong>Meaning:</strong> {word.Storyitext}</p>
              <p><strong>Synonyms:</strong> {word.Synonyms}</p>
              <p><strong>Antonyms:</strong> {word.Antonyms}</p>
              <p><strong>Type:</strong> {word.Noun}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data">No Word Explore content.</p>
      )}

      {/* Brain Quest */}
      <h2>Brain Quest</h2>
      {story.Brainquest?.length > 0 ? (
        <div className="quiz-section">
          {story.Brainquest.map((q, i) => (
            <div className="quiz-card" key={i}>
              <p><strong>Q{i + 1}:</strong> {q.Question}</p>
              <ul>
                {q.Option?.map((opt, j) => (
                  <li key={j}>{opt}</li>
                ))}
              </ul>
              <p><strong>Answer:</strong> {q.Answer}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data">No Brain Quest available.</p>
      )}
    </div>
  );
}

export default StoryDetail;
