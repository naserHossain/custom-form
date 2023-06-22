import React from "react";
import InputGroup from "../components/shared/forms/InputGroup";

const App = () => {
    return (
        <div className="root">
            <InputGroup
                name="title"
                placeholder="enter title"
                label="Title"
                error="error"
            />
        </div>
    );
};

export default App;
