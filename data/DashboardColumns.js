// const columns=["Id", "Title", "Team Leader","Email", "Department", "Year", "More"];
export const columns = [
  {
    name: "entry_id",
    label: "Id",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "title",
    label: "Title",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "team_leader",
    label: "Team Leader",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "email",
    label: "Email Id",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "department",
    label: "Department",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "year",
    label: "Year",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    label: "More",
    name:"entry_id",
    options: {
      customBodyRender: (entry_id) => {
        return (
          <a href={`/profile/${entry_id}`} rel="noopener noreferrer">
            {/* {value}
             */}
             Link
          </a>
        );
      },
    },
  },
];

