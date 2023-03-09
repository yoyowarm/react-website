import TitleGroup from '../TitleGroup'
import './index.css'
const ArticleList = ({ articles }) => {
  return (
    <div className="article">
      <TitleGroup title="Spotlight: GEMs" />
      <TitleGroup title="Spotlight: Missions" />
      <h1>Article List</h1>
    </div>
  );
}

export default ArticleList;