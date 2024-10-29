import React, { useState } from 'react';
import { Box, Grid, TextField, MenuItem, Typography, IconButton, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const WorksOrderForm = () => {
    const [rows, setRows] = useState([{ id: 1, category: '', spec1: '', spec2: '', seNo: '', quantity: '', unit: '' }]);

    const handleAddRow = () => {
        setRows([...rows, { id: rows.length + 1, category: '', spec1: '', spec2: '', seNo: '', quantity: '', unit: '' }]);
    };

    const handleRemoveRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    return (
        <Box sx={{ ml: 7, p: 2 }}>
            <Box sx={{ backgroundColor: 'black', color: 'white', p: 1 }}>
                <Typography variant="h6">Works Order Management</Typography>
            </Box>

            <Box sx={{ mt: 2, backgroundColor: '#446c44', color: 'white', p: 1, borderRadius: 1 }}>
                <Typography variant="button">Works Order Details</Typography>
            </Box>

            <Grid container spacing={2} sx={{ mt: 2 }}>
                {/* Current Input Fields */}
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="WO ID#" variant="outlined" fullWidth defaultValue="1885" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select label="Product Categories" variant="outlined" fullWidth>
                        <MenuItem value="">Select Category</MenuItem>
                        {/* Add additional categories here */}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select label="Part No" variant="outlined" fullWidth>
                        <MenuItem value="">Select Part No</MenuItem>
                        {/* Add additional parts here */}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ width: '100%' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date"
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                        />
                    </LocalizationProvider>
                </Grid>

                {/* Row 2 */}
                <Grid item xs={12} sm={6} md={3} sx={{ width: '100%' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Due Date"
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                        />
                    </LocalizationProvider>
                </Grid>



                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="Product" variant="outlined" fullWidth placeholder="Product" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select label="Material Spec" variant="outlined" fullWidth>
                        <MenuItem value="">Select Material Spec</MenuItem>
                        {/* Add additional materials here */}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="Size" variant="outlined" fullWidth placeholder="Size" />
                </Grid>

                {/* Row 3 */}
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="DRG No" variant="outlined" fullWidth placeholder="DRG No" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="Remarks" variant="outlined" fullWidth placeholder="Remarks" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="Quantity" variant="outlined" fullWidth placeholder="Quantity" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select label="Priority" variant="outlined" fullWidth>
                        <MenuItem value="">Not Set</MenuItem>
                        {/* Add additional priority options here */}
                    </TextField>
                </Grid>
            </Grid>

            {/* Repeater Section for Bill of Materials */}
            <Box sx={{ mt: 4, backgroundColor: '#446c44', color: 'white', p: 1, borderRadius: 1 }}>
                <Typography variant="button">Bill of Materials</Typography>
            </Box>

            <Grid container spacing={2} sx={{ mt: 1 }}>
                {rows.map((row, index) => (
                    <React.Fragment key={row.id}>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                select
                                label="Category"
                                variant="outlined"
                                fullWidth
                                value={row.category}
                                onChange={(e) => {
                                    const updatedRows = [...rows];
                                    updatedRows[index].category = e.target.value;
                                    setRows(updatedRows);
                                }}
                            >
                                <MenuItem value="">Select Category</MenuItem>
                                {/* Add category options here */}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                label="Spec I"
                                variant="outlined"
                                fullWidth
                                value={row.spec1}
                                onChange={(e) => {
                                    const updatedRows = [...rows];
                                    updatedRows[index].spec1 = e.target.value;
                                    setRows(updatedRows);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                label="Spec II"
                                variant="outlined"
                                fullWidth
                                value={row.spec2}
                                onChange={(e) => {
                                    const updatedRows = [...rows];
                                    updatedRows[index].spec2 = e.target.value;
                                    setRows(updatedRows);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                label="SE No"
                                variant="outlined"
                                fullWidth
                                value={row.seNo}
                                onChange={(e) => {
                                    const updatedRows = [...rows];
                                    updatedRows[index].seNo = e.target.value;
                                    setRows(updatedRows);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={1}>
                            <TextField
                                label="Quantity"
                                variant="outlined"
                                fullWidth
                                value={row.quantity}
                                onChange={(e) => {
                                    const updatedRows = [...rows];
                                    updatedRows[index].quantity = e.target.value;
                                    setRows(updatedRows);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                select
                                label="Unit"
                                variant="outlined"
                                fullWidth
                                value={row.unit}
                                onChange={(e) => {
                                    const updatedRows = [...rows];
                                    updatedRows[index].unit = e.target.value;
                                    setRows(updatedRows);
                                }}
                            >
                                <MenuItem value="">Select Unit</MenuItem>
                                {/* Add unit options here */}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={1}>
                            <IconButton
                                color="error"
                                onClick={() => handleRemoveRow(row.id)}
                                disabled={rows.length === 1}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>

            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddRow}
                sx={{ mt: 2 }}
            >
                Add
            </Button>
        </Box>
    );
};

export default WorksOrderForm;
