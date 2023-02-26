const Session = (props) => {
  const { title, room } = props;
  return (
    <span className="session w-100">
      {title} <strong>Room: {room} </strong>
    </span>
  );
};

const Sessions = ({ sessions }) => {
  return (
    <div className="sessionBox card h-250">
      <Session title={sessions[0].title} room={sessions[0].room.name} />
    </div>
  );
};

const SpeakerImage = ({ id, first, last }) => {
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
};

const SpeakerFavorite = ({ favorite, onFavoriteToggle }) => {
  return (
    <div className="action padB1">
      <span onClick={onFavoriteToggle}>
        <i
          className={favorite ? "fa fa-star orange" : "fa fa-star-o orange"}
          style={{ marginRight: "5px" }}
        ></i>
        Favorite
      </span>
    </div>
  );
};

const SpeakerDemographics = ({ speaker, onFavoriteToggle }) => {
  const { first, last, bio, company, twitterHandle, favorite } = speaker;
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite
        favorite={favorite}
        onFavoriteToggle={onFavoriteToggle}
      />
      <div>
        <p className="card-description">{bio}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const Speaker = ({ speaker, showSessions, onFavoriteToggle }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4 speaker-card">
        <SpeakerImage
          id={speaker.id}
          first={speaker.first}
          last={speaker.last}
        />
        <SpeakerDemographics
          speaker={speaker}
          onFavoriteToggle={onFavoriteToggle}
        />
        {showSessions ? <Sessions sessions={speaker.sessions} /> : null}
      </div>
    </div>
  );
};

export default Speaker;
