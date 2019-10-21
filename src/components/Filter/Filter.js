import React from 'react';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));


const filterTypes =[
    'A',
    'B',
    'C',
    'D'
]

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  


export default function Filter(){

    return(
        <FormControl className={clsx(classes.formControl, classes.noLabel)}>
        <Select multiple displayEmpty value={personName} onChange={handleChange} input={<Input id="select-multiple-placeholder" />}
        renderValue={selected => {
            if (selected.length === 0) {
            return <em>Placeholder</em>;
            }

            return selected.join(', ');
        }}
        MenuProps={MenuProps}
        >
            <MenuItem disabled value="">
                <em>Placeholder</em>
            </MenuItem>
        {filterTypes.map(type => (
            <MenuItem key={type} value={type} style={getStyles(type, personName, theme)}>
            {type}
            </MenuItem>
        ))}
        </Select>
</FormControl>

    );
}