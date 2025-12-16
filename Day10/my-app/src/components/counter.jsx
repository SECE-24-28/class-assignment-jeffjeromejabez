import React from 'react';
import useCounter from '../hooks/useCounter';

function Counter() {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h3 className="mb-0">Counter Application</h3>
                        </div>
                        <div className="card-body text-center py-5">
                            <div className="display-1 text-primary mb-4">{count}</div>
                            <div className="btn-group" role="group">
                                <button className="btn btn-outline-success btn-lg" onClick={increment}>
                                    <i className="fas fa-plus"></i> +1
                                </button>
                                <button className="btn btn-outline-danger btn-lg" onClick={decrement}>
                                    <i className="fas fa-minus"></i> -1
                                </button>
                                <button className="btn btn-outline-warning btn-lg" onClick={reset}>
                                    <i className="fas fa-redo"></i> Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;