function Table({ data }) {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Participation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.participation}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;
  