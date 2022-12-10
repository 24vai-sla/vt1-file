var modal = document.getElementById('demo');


window.onclick = function(event) {
  if (event.target == modal)
   {
    modal.style.display = "none";
  }
  

}
   data.filter((item) => {
    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
})

    {data.filter((item) => {
              return ser_team.toLowerCase() === '' ? item : item.team.toLowerCase().includes(ser_team);
        })
        .map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.designation}</td>
            <td>{item.team}</td>
            
            </tr>))}
        