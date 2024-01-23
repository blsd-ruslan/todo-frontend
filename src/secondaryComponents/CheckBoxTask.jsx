import Checkbox from '@mui/material/Checkbox';
import CircleCheckedFilled from '@mui/icons-material/CheckCircle';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';

function CheckBoxTask() {
    return (
        <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            sx={{
                color: 'var(--secondary-color)',
                '&.Mui-checked': {color: 'var(--inactive-color)'},
            }}
        />
    )
}

export default CheckBoxTask;