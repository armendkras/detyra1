import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../store/actions/users";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    width: 130,
    height: 40,
  },
  input: {
    width: 130,
    height: 40,
  },
}));

const createData = (id, name, company, email, country, phone) => ({
  id,
  name,
  company,
  email,
  country,
  phone,
  isEditMode: false,
});

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

export default function Appi() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    setRows(
      users.map((dd) =>
        createData(dd.id, dd.name, dd.company, dd.email, dd.country, dd.phone)
      )
    );
  }, [users]);
  console.log("users", users);
  const [rows, setRows] = React.useState(
    users.map((dd) =>
      createData(dd.id, dd.name, dd.company, dd.email, dd.country, dd.phone)
    )
  );

  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return state.map((row) => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }

        return row;
      }, rows);
    });

    // rows.map((row) => {
    //   if (row.id === id) {
    //     dispatch(
    //       actions.edit(
    //         row.id,
    //         row.name,
    //         row.company,
    //         row.email,
    //         row.country,
    //         row.phone
    //       )
    //     );
    //   } else {
    //     return;
    //   }
    // });
  };

  const onRevert = (id) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state) => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };

  const onChange = (e, row) => {
    console.log("change");
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onSave = (id) => {
    //  console.log(
    //   "rows",
    //   rows.map((r) => {
    //     if (r.id === id) {
    //       return r.name;
    //     }
    //   })
    // );
    rows.map((row) => {
      if (row.id === id) {
        dispatch(
          actions.edit(
            row.id,
            row.name,
            row.company,
            row.email,
            row.country,
            row.phone
          )
        );
      } else {
        return;
      }
    });
    onToggleEditMode(id);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <caption>A barbone structure table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Country</TableCell>
            <TableCell align="left">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                    >
                      <RevertIcon />
                    </IconButton>
                    <IconButton
                      aria-label="done"
                      onClick={() => onSave(row.id)}
                    >
                      <DoneIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "name", onChange }} />
              <CustomTableCell {...{ row, name: "company", onChange }} />
              <CustomTableCell {...{ row, name: "email", onChange }} />
              <CustomTableCell {...{ row, name: "country", onChange }} />
              <CustomTableCell {...{ row, name: "phone", onChange }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
