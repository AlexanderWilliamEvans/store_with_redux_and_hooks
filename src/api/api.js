
export const fetchMerchandise = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(data => {
        const table =[];
        let key;
        try{
            for(key in data){
                if (data.hasOwnProperty(key)) {
                    table.push(
                        {
                         id: data[key].id,
                         name: data[key].name,
                         username: data[key].username,
                         email:data[key].email
                        }
                    );
                  }
            }
        }
        catch(e){
            console.error('Failed to get table: ' + e.toString());
        }
        return table;
      })
  }

