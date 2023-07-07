import { Component } from "react";

// // Нерабочий пример

// let total = 0;

// const  Counter = () => {
//     function handleClick(evt) {
//         // console.log(evt);           // SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button.btn.btn-outline-success.me-5, …}
//         total +=1;
//         console.log(total);
//     };

//     return (
//         <div className="position-absolute top-50 start-50 translate-middle">
//             <div 
//             className="card bg-dark text-white" 
//             style={{width: '600px'}} 
//             // // всплытие работает, но клик по 1 кнопке покажет клик по всем кнопкам
//             // onClick={handleClick}
//             >

//                 <div className="card-body">
//                     <h5 className="card-title text-center fs-1">Counter</h5>
//                     <p className="card-text text-center" style={{fontSize: '80px'}}>{total}</p>
//                     <div className="d-flex justify-content-center px-5">
//                         <button 
//                         className="btn btn-outline-success me-5" 
//                         onClick={handleClick}>
//                             <i className="bi bi-plus-circle fs-1"></i>
//                         </button>
//                         <button 
//                         className="btn btn-outline-danger ms-5" 
//                         onClick={handleClick}>
//                             <i className="bi bi-dash-circle fs-1"></i>
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// };


// Рефакторинг в класс

class Counter extends Component {
    // // старый синтаксис
    // constructor(){
    //     super()
    //     // постоянная константа - объект
    //     this.state ={
    //         value: 0
    //     }
    // };

    // рефакторинг конструктора
    state ={
        value: 0
    };

    // // метод объекта
    // handleClick(evt){
    //     // console.log(evt);
    //     this.state.value += 1;
    //     console.log(this);      // Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
    // }

    // // рефакторинг метода объекта
    // handleClick = (evt) => {
    //     // console.log(evt);
    //     this.setState({value: 1});
    //     console.log(this.setState);      
    // }

    // рефакторинг метода объекта
    handleClickIncrement = (evt) => {
        this.setState((prevState) => {
            console.log(prevState);   
            return {value: prevState.value +=1}
        });
    }

        
    handleClickDecrement = (evt) => {
        this.setState((prevState) => {
            console.log(prevState);   
            return {value: prevState.value -=1}
        });
    }

    render() {
        return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div 
            className="card bg-dark text-white" 
            style={{width: '600px'}} 
            >

                <div className="card-body">
                    <h5 className="card-title text-center fs-1">Counter</h5>
                    <p 
                    className="card-text text-center" 
                    style={{fontSize: '80px'}}
                    >{this.state.value}</p>
                    <div className="d-flex justify-content-center px-5">
                        <button 
                        className="btn btn-outline-success me-5" 
                        // onClick={this.handleClick.bind(this)}
                        onClick={this.handleClickIncrement}
                        >
                            <i className="bi bi-plus-circle fs-1"></i>
                        </button>
                        <button 
                        className="btn btn-outline-danger ms-5" 
                        onClick={this.handleClickDecrement}
                        >
                            <i className="bi bi-dash-circle fs-1"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
        )
    };
    
};


export default Counter;