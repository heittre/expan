import { Sheet, Table } from "@mui/joy";

const MainTable = (props) => {
  // eslint-disable-next-line react/prop-types
  const rows = props.tableContent.map((element) => (
    <tr key={element.id}>
      <th scope="row">{element.igName}</th>
      <td>{element.apl.GV}</td>
      <td>{element.apl.GTa}</td>
      <td>{element.apl.GTe}</td>
      <td>{element.apl.total}</td>
      <td>{element.apd.GV}</td>
      <td>{element.apd.GTa}</td>
      <td>{element.apd.GTe}</td>
      <td>{element.apd.total}</td>
      <td>{element.re.GV}</td>
      <td>{element.re.GTa}</td>
      <td>{element.re.GTe}</td>
      <td>{element.re.total}</td>
    </tr>
  ));
  return (
    <Sheet
      variant="plain"
      invertedColors
      sx={{
        pt: 1,
        borderRadius: "sm",
        transition: "0.3s",
      }}
    >
      <Table borderAxis="both" variant="soft" size="md">
        <thead>
          <tr>
            <th style={{ width: "8%" }} rowSpan={2}>
              Entity
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              Applications
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              Approvals
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              Realizations
            </th>
          </tr>
          <tr>
            <th>GV</th>
            <th style={{ borderRightWidth: 0 }}>GTa</th>
            <th style={{ borderRightWidth: 0 }}>GTe</th>
            <th style={{ borderRightWidth: 0 }}>Total</th>
            <th>GV</th>
            <th style={{ borderRightWidth: 0 }}>GTa</th>
            <th style={{ borderRightWidth: 0 }}>GTe</th>
            <th style={{ borderRightWidth: 0 }}>Total</th>
            <th>GV</th>
            <th style={{ borderRightWidth: 0 }}>GTa</th>
            <th style={{ borderRightWidth: 0 }}>GTe</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Sheet>
  );
};

export default MainTable;
