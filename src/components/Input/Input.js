import './Input.scss';

const Input = ({ query }) => {
  const handleUserInput = ({ target: { value } }) => {
    query(value);
  };

  return (
    <input
      className='input'
      placeholder='type a github username'
      onChange={handleUserInput}
    />
  );
};

export default Input;
