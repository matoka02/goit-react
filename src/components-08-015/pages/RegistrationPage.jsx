// import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'servises/auth-service';

const RegistrationPage = () => {
  const navigate = useNavigate();
  
  const handleSubmit = evt => {
    evt.preventDefault();
    const newUser = {
      name: evt.target.elements.name.value,
      email: evt.target.elements.email.value,
      password: evt.target.elements.password.value,
      avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
    };
    console.log(newUser);
    const data = signUp(newUser)
      // .then(resp => toast.success('Created'))
      // .catch(error => toast.error(error.responce.data.message));
      .then(() => {
        console.log('Created');
        navigate('/login');
      })
      .catch((error)=>console.error(error));
    console.log(data);
  };

  return (
    <div
      className="card position-absolute top-50 start-50 translate-middle p-2"
      style={{ minWidth: '350px' }}
    >
      <h1 className="text-center">SignUp</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputName1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
