import PropTypes from 'prop-types';

const trackingButtonComponent = (Component) => {
    const WrappedComponent = (props) => {
        console.log("HoC tracking comp");
        const handleClick = () => {
            console.log("Logged in Fetch the Tracking Info", props.trackingInfo);
        }
        return (
            <div onClick={handleClick}>
                <h1>This is the Higher Order Component</h1>
                <Component {...props} />
            </div>
        );
    };

    WrappedComponent.displayName = `TrackingButton(${Component.displayName || Component.name || 'Component'})`;

    WrappedComponent.propTypes = {
        trackingInfo: PropTypes.any.isRequired,
    };

    return WrappedComponent;
};

export default trackingButtonComponent;
