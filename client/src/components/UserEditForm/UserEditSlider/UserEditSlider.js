import Slider from '@material-ui/core/Slider';

const UserEditSlider = ({ handleSliderChange, inputValue, id, aria }) => {

    const marks = [
        {
            value: 0,
        },
        {
            value: 20,
        },
        {
            value: 37,
        },
        {
            value: 100,
        },
    ];

    
    return (
        <>
            <Slider id={id} aria-label={aria} onChange={handleSliderChange} value={inputValue} min={0} max={100} valueLabelDisplay="auto" />
        </>
    )
}

export default UserEditSlider