import './ResultItem.scss';

const ResultItem = ({ item, active, setSelected, setHovered }) => {
  return (
    <div
      className={`item ${active ? 'active' : ''} item-container`}
      onClick={() => setSelected(item)}
      onMouseEnter={() => setHovered(item)}
      onMouseLeave={() => setHovered(undefined)}
    >
      <a className='link' href={item.html_url}>
        <li className='flex'>
          <img className='avatar' src={item.avatar_url} alt={item.login} />
          <p className='username'>{item.login}</p>
        </li>
      </a>
    </div>
  );
};

export default ResultItem;
