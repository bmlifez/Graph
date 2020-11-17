
# modal

Component description

## Usage

### Props

| Name        | Type    | Options                                          | default   |
| ----------- | ------- | ------------------------------------------------ | --------- |
| customWrapperClass For Modal   | string  |
| renderAt   | HTML Element  |
| heading   | React Component or string  | It accepts a plain string or a react component |
| subHeading   | React Component or string  | It accepts a plain string or a react component |
| modalBody   | React Component |
| showFooter   | boolean | | true |
| customModalFooter | React Component | Use this to override default footer | 
| cancelClickHandler | Function | callback which is called when close icon at top right is clicked | 
| primaryBtn | Object | This renders the primary button such as save. This is a required field only when showFooter prop is true. Structure: {text: 'Save', show: true, disabled: false, id: 'add-name-btn', onClick: () => {} |  
| secondaryBtn | Object | This renders the secondary button such as cancel. This is a required field only when showFooter prop is true. Structure: {text: 'Save', show: true, disabled: false, id: 'cancel-name-btn', onClick: () => {} |  

