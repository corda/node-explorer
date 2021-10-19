<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>


| Property    | Type                      | Required? | Notes                                                                                                                           |
| :---------- | :------------------------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------ |
| columns     | memoized array of objects | yes       | Refer to the table below for the make up of the objects in the array.                                                           |
| data        | memoized array of objects | yes       | Refer to the table below for the make up of the objects in the array.                                                           |
| className   | string                    | no        | Classnames can be passed to the `<table>` element of the component.                                                             |
| rowsPerPage | number                    | no        | Specify how many elements should appear on each page. If not set, all elements will be visible and there will be no pagination. |


<Anchor idToScrollTo="columns"><h3>Columns</h3></Anchor>


| Property  | Type   | Required? | Notes                                                                |
| :-------- | :----- | :-------- | :------------------------------------------------------------------- |
| Header    | string | yes       | The text that appears on top of the column.                          |
| accessor  | string | yes       | This should correspond to the relevant property in the data objects. |
| className | string | no        | Any additional classes that should be passed to the column.          |
| style     | number | no        | In case you want to pass in specific styles instead of classnames.   |

\
Example:

```javascript
const columns = React.useMemo(
  () => [
    {
      Header: 'Name',
      accessor: 'item.name',
      className: 'text-rightwhitespace-no-wrap',
    },
    {
      Header: 'Address',
      accessor: 'item.address',
    },
    {
      Header: 'Phone number',
      accessor: 'item.phoneNumber',
      className: 'text-center',
    },
  ],
  []
);
```

<Anchor idToScrollTo="data"><h3>Data</h3></Anchor>


| Property              | Required? | Notes                                                                                                                                                                                 |
| :-------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name of the object    | yes       | Each object is a separate row in the column. This should correspond to the first part of the accessors in the columns.                                                                |
| Content of the object | yes       | Each property is a separate cell in the respective row in the column. Each property name should respond to the second part of the accessor accessor for the respective column header. |

\
Example:


```javascript
const data = React.useMemo(
  () => [
    {
      item: {
        name: 'John Doe',
        address: '1 Example Street',
        phoneNumber: '111-111-111',
      },
    },
    {
      item: {
        name: 'Jane Doe',
        address: '2 Example Street',
        phoneNumber: '222-222-222',
      },
    },
  ],
  []
);
```

Full reference to [react-table](https://react-table.tanstack.com/docs/overview) documentation