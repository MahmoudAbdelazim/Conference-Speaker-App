import Speaker from "./Speaker";
import {data} from "../../SpeakerData"
import { useState } from "react";

const SpeakersList = ({ showSessions }) => {

  const [speakerData, setSpeakerData] = useState(data);

  const onFavoriteToggle = (speakerId) => {
    const prevSpeakerRec = speakerData.find((rec) => rec.id === speakerId);
    const newSpeakerRec = {
      ...prevSpeakerRec,
      favorite: !prevSpeakerRec.favorite
    };
    const newSpeakersData = speakerData.map((rec) => {
      return rec.id === speakerId ? newSpeakerRec : rec;
    });
    setSpeakerData(newSpeakersData);
  }

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map((speaker) => {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
              showSessions={showSessions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
