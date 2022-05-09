import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Subscription() {
    const [clickableButton, setClickableButton] = useState(false);
    const [inputData, setInputData] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const [showDone, setShowDone] = useState(false);
    const [showComponent, setShowComponent] = useState(true);

    return (
        <>
            {showComponent && <div className="subscription">
                <h2>Subscribe to our newsletter</h2>

                <form>
                    {showLoading && <div className="lds-dual-ring"></div>}

                    {showDone && <p>Subscribed!</p>}

                    {showForm && <>
                        <TextField id="outlined-basic" label="Enter your e-mail" variant="outlined" type="email" required onChange={e => {
                            setInputData(e.target.value);
                            (e.target.value.includes('@') && e.target.value.includes('.')) ? setClickableButton(true) : setClickableButton(false)
                        }}
                        />

                        <Button variant="outlined" type="submit" disabled={!clickableButton} onClick={e => {
                            e.preventDefault();

                            setShowForm(false);
                            setShowLoading(true);

                            const fetchSettings = {
                                method: 'POST',
                                body: {
                                    "email": inputData
                                }
                            }

                            fetch("https://demoapi.com/api/series/newsletter", fetchSettings)
                                .then(async data => {
                                    if (data.status === 201) {
                                        setShowLoading(false);
                                        setShowDone(true);

                                        setTimeout(_ => setShowComponent(false), 5000);
                                    }
                                })
                        }}>Subscribe!</Button>
                    </>}
                </form>
            </div>}
        </>
    )
}

export default Subscription