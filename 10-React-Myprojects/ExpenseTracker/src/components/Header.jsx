const Header = ({ totalbalance }) => {
  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="balance">
        <h4>Your Balance - </h4>
        <h2>{totalbalance}</h2>
      </div>
    </>
  );
};

export default Header;