import React     from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.PureComponent {
    render() {
        const {saveClickCallBack,options,parentContainerClass,optionsInlineText,selectWrapperClass} = this.props;
        const option = options.map((value,index)=>{
            return(
            <option value={value} key={index}>{value} {optionsInlineText}</option>
            )
        })
        return (
            <span className={parentContainerClass}>
                <select className={selectWrapperClass} onChange={saveClickCallBack}>
                    {option}
                </select>
            </span>
        );
    }
}

Select.propTypes = {
    saveClickCallBack: PropTypes.func.isRequired
}