import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const names = [
    'DashBoard',
    'Scans',
];

function getStyles(name: string, moduleName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            moduleName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const ModuleSelect = () => {
    const theme = useTheme();
    const [moduleName, setModuleName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof moduleName>) => {
        const {
            target: { value },
        } = event;
        setModuleName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <FormControl sx={{ mt: 2, ml: 2, width: 200 }}>
            <InputLabel id="module-select-label">Module</InputLabel>
            <Select
                labelId="module-select-label"
                id="module-select-id"
                value={moduleName}
                onChange={handleChange}
                input={<OutlinedInput id="select-single-module" label="Module" />}
                renderValue={(selected) => (
                    <Box>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
            // MenuProps={MenuProps}
            >
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, moduleName, theme)}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default ModuleSelect;
