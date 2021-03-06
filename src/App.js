import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import { getPeople } from "./fakePeopleAPI";
import AddPersonModal from "./components/Modal/Modal";

// hook for getting data
function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await getPeople();
    setData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return [data, loading];
}

function App() {
  const [data, loading] = useFetch();

  const columns = React.useMemo(
    () => [
      {
        Header: "People",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Favourite Colour",
            accessor: "favourite_color",
          },
          {
            Header: "Favourite Food",
            accessor: "favourite_food",
          },
          {
            Header: "Friends",
            accessor: "friends",
          },
        ],
      },
    ],
    []
  );

  return (
    <div>
      <AddPersonModal buttonName="Add Person" title="Add New Person" />
      {!loading ? <Table columns={columns} data={data} /> : null}
    </div>
  );
}

export default App;
