import React from 'react'

function ProgressBar(props) {
    const { progress = 0, variant = "" } = props
    let bgColor = "";
    switch (variant) {
        case "success": bgColor = "green";
            break;
        case "error": bgColor = "red";
            break;
        default: bgColor = "grey";
    }

    return (
        <div style={{ width: "100%", height: "30px", borderRadius: "20px", background: "lightGrey" }}>
            <div style={{ backgroundColor: bgColor, width: `${progress > 100 ? 100 : progress}%`, height: "30Px", borderRadius: "20px" }}>
                <p style={{ textAlign: 'center', padding: "4px", margin: "12px" }}>
                    {progress > 100 ? 100 : progress}%

                </p>
            </div>
        </div>
    )
}

export default ProgressBar
