import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './modal.scss';

export default class Modal extends React.PureComponent {
    componentDidMount() {
        document.body.classList.add('oh');
    }

    componentWillUnmount() {
        document.body.classList.remove('oh');
    }

    renderFooter = () => {
        const { showFooter, customModalFooter } = this.props;

        if (!showFooter) return;
        if (customModalFooter) {
            return (
                <div className='modalFooter'>
                    {customModalFooter}
                </div>
            );
        }
        else {
            const { primaryBtn, secondaryBtn } = this.props;
            return (
                <div className='modalFooter default'>
                    {primaryBtn && primaryBtn.show && (
                        <button type='button' className='primary-btn' {...primaryBtn}>
                            {primaryBtn.text || 'Save'}
                        </button>
                    )}
                    {secondaryBtn && secondaryBtn.show && (
                        <button type='button' className='secondary-btn' {...secondaryBtn}>
                            {secondaryBtn.text || 'Cancel'}
                        </button>
                    )}
                </div>
            )
        }
    }

    render() {
        const {
            modalBody,
            customWrapperClass,
            heading,
            subHeading,
            cancelClickCallback,
            renderAt,
            customInlineStyle
        } = this.props;
        const modal = (
            <div className={`overlay-dark modal-overlay ${customWrapperClass}`} >
                <div className="modalContainer" style={{width:`${customInlineStyle.width}`,height:`${customInlineStyle.height}`}}>
                    <div className='modalHeader'>
                        <div>
                            <div className="modalHeading">{heading}</div>
                            {subHeading && <div className="modalSubheading">{subHeading}</div>}
                        </div>
                        <a className='modalCloseLink' onClick={cancelClickCallback}>✖</a>
                    </div>

                    <div className='modalBody'>
                        {modalBody}
                    </div>
                    {this.renderFooter()}
                </div>
            </div>
        );

        return ReactDOM.createPortal(modal, renderAt);
    };
};

const noop = () => { }

Modal.defaultProps = {
    renderAt: document.body,
    customWrapperClass: '',
    heading: 'Modal Heading',
    subHeading: '',
    showFooter: true,
    cancelClickCallback: noop,
}

Modal.propTypes = {
    customWrapperClass: PropTypes.string,
    renderAt: PropTypes.object,
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    subHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    modalBody: PropTypes.object.isRequired,
    customInlineStyle:PropTypes.object,
    showFooter: PropTypes.bool,
    customModalFooter: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    cancelClickCallback: PropTypes.func.isRequired,
    primaryBtn: PropTypes.shape({
        id: PropTypes.string,
        show: PropTypes.bool,
        text: PropTypes.string,
        disabled: PropTypes.bool,
        onClick: noop,
    }),
    secondaryBtn: PropTypes.shape({
        id: PropTypes.string,
        show: PropTypes.bool,
        text: PropTypes.string,
        disabled: PropTypes.bool,
        onClick: noop,
    }),
}