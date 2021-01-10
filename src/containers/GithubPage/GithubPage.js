import { useState } from 'react';
import _ from 'lodash';
import requestUsersData from '../../services/getUsersData';
import Input from '../../components/Input/Input';
import Results from '../../components/Results/Results';
import './GithubPage.scss';

const GithubPage = () => {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [resultsList, setResultsList] = useState([]);

  const handleChange = (value) => {
    setQuery(value);
    const search = _.debounce(sendQuery, 600);
    setSearchQuery((prevSearch) => {
      if (prevSearch.cancel) {
        prevSearch.cancel();
      }
      return search;
    });
    if (!value) {
      setResultsList([]);
    } else {
      search(value);
    }
  };

  const sendQuery = (value) => {
    requestUsersData(value)
      .then((res) => {
        if (res.data.total_count === 0) {
          const users = [
            {
              login: 'Sorry, no results found',
              avatar_url:
                'https://cdn.pixabay.com/photo/2015/03/25/13/04/page-not-found-688965_960_720.png',
              id: 404,
            },
          ];
          setResultsList(users);
        } else {
          const users = res.data.items.slice(0, 7);
          setResultsList(users);
        }
      })
      .catch(console.warn);
  };

  return (
    <div className='container'>
      <div>
        <div className='search flex'>
          <div className='icon'></div>
          <Input query={handleChange} />
        </div>
      </div>
      <Results list={resultsList} />
    </div>
  );
};

export default GithubPage;
