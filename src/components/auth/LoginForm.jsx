import Input from '../Input';
import Button from '../Button';

const LoginForm = ({ email, password, setEmail, setPassword, onLogin }) => (
  <form className="space-y-4">
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
    <Button onClick={onLogin}>Login</Button>
  </form>
);

export default LoginForm;
