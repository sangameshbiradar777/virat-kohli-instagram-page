import './Error.css';

const Error = ({ error }) => (
  <div className='error'>
    <h4 className='error__message'>{error.message}</h4>
  </div>
)

export default Error;