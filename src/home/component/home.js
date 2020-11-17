import  React               from 'react';
import {COMPONENT_CONSTANT_FILTER,CHART_LIST_LABEL} from '../../constant/home/home.constant';
import Select               from '../../common/select/component/select';
import Modal                from '../../common/modal/component/modal';
import './home.scss';

export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterList:[COMPONENT_CONSTANT_FILTER.TIME,COMPONENT_CONSTANT_FILTER.ROW],
            chartList: [CHART_LIST_LABEL.SANKEY_CHART_LIST,CHART_LIST_LABEL.PARALLEL_COORDINATES_CHART,CHART_LIST_LABEL.SIMPLE_LINE_CHART],
            filterConfig: {
                time:"",
                row:""
            },
            selectedChart:CHART_LIST_LABEL.SIMPLE_LINE_CHART,
            data:{},
            isModalOpen: false,
            modalStyle:{
                height:'400px',
                width:'400px'
            }
        };
    }

    componentDidMount(){
        this.getDataFromUser();
    }

    getDataFromUser=()=>{
        this.isModalOpen(true);
    }

    isModalOpen=(isModalOpen)=>{
        this.setState({
            isModalOpen
        })
    }

    updateSelectedChart=(e)=>{
        this.setState({
            selectedChart: e.target.value
        })
    }

    generateModalBody=()=>{
        const {chartList}=this.state
        return (
            <>
                <div className="mt-20">
                    <Select 
                        options={chartList}
                        optionsInlineText={""}
                        saveClickCallBack={this.updateSelectedChart}
                    />
                </div>
                <div className="mt-20">
                    <textarea style={{width:"300px",height:"200px"}} />
                </div>
            </>
        )
    }

    updateTime=(e)=>{
        console.log(e.target.value)
    }

    generatedFilterBody=(component)=>{
        switch (component){
            case null:
                return;
            case COMPONENT_CONSTANT_FILTER.TIME:
                return (
                    <>
                        <h4>TIME</h4>
                        <span className="spanLabel">
                            <label>Time Granularity</label>
                            <label className="pl-10">Since</label>
                        </span>
                        <div>
                            <Select 
                                options={[1,2,3,4,5,7]}
                                optionsInlineText={"hour"}
                                saveClickCallBack={this.updateTime}
                                parentContainerClass={"alignLeftTime"}
                                selectWrapperClass={"selectWrapperClass"}
                            />
                            <Select 
                                options={[1,2,3,4,5,7]}
                                optionsInlineText={"hour"}
                                saveClickCallBack={this.updateTime}
                                parentContainerClass={"alignLeftTime"}
                                selectWrapperClass={"selectWrapperClass"}
                            />
                        </div>
                    </>
                )
                case COMPONENT_CONSTANT_FILTER.ROW:
                    return (
                        <>
                            <h4>ROW</h4>
                            <Select 
                                options={[1000,2000,3000,4000,5000,7000]}
                                optionsInlineText={""}
                                saveClickCallBack={this.updateTime}
                                parentContainerClass={"alignLeftTime"}
                                selectWrapperClass={"selectWrapperClass"}
                            />
                        </>
                    )
        }
    }

    

    render() {
        const {filterList,isModalOpen,modalStyle}  = this.state
        const leftPanel = filterList.map((component,index)=>{
            return(
                <li className="pointer" key={index}>
                    {this.generatedFilterBody(component)}
                </li>  
            )
        })
        return (
            <React.Fragment>
                <div className="header text">
                    Couture Storybook
                </div>
                <div className="container">
                    <section className="left-panel">
                        <ul>
                            <li>Filter</li>
                            {leftPanel}
                        </ul>
                    </section>
                    <section className="right-panel">
                        
                    </section>
                </div>
                { isModalOpen && 
                    <Modal
                    heading= {"Select chart type & enter json"}
                    modalBody={this.generateModalBody()}
                    primaryBtn={{
                        id: 'primaryButton',
                        show: true,
                        text: 'Submit',
                        onClick: ()=> this.saveClickCallback()
                    }}
                    secondaryBtn={{
                        id: 'secondaryButton',
                        show: true,
                        text: 'Cancel',
                        onClick: ()=> this.isModalOpen(false)
                    }}
                    customWrapperClass={"modalCustomWrapper"}
                    customInlineStyle={modalStyle}
                    cancelClickCallback={()=>this.isModalOpen(false)}
                    />
                }
            </React.Fragment>
        );
    }
}
