

const Input = ({ label, type = "text", name, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-dark mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);

export default Input;
