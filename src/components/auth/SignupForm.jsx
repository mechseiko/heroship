import Input from '../Input';
import Button from '../Button';

const SignupForm = ({ name, email, password, setName, setEmail, setPassword, onSignup }) => (
  <form className="space-y-4">
    <Input
      label="Name"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your name"
    />
    <Input
      label="Email"
      type="email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="you@example.com"
    />
    <Input
      label="Password"
      type="password"
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="••••••••"
    />
    <Button onClick={onSignup}>Sign Up</Button>
  </form>
);

export default SignupForm;
