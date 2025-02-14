// import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
// import { RegistrationFormControlled } from './RegistrationFormControlled';
import { UserForm } from './UserForm';
import './App.css';

function App() {
  return (
    <>
      <UserForm />
      <UserForm user={{ username: 'John', password: 'johnknows!123' }} />
    </>
  );
}

export default App;
