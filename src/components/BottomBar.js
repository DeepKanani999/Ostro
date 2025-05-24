import { useState } from 'react';

export default function BottomTab({ visible, closeTab }) {
    // const [visible, setVisible] = useState(true);

    // const closeTab = () => {
    //     setVisible(false);
    // };

    return (
        <div style={{ backgroundColor: "#fffbe6", marginBottom: "10px" }}>
            {visible && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", padding: "0px 10px", }}>
                    <div >
                        <span style={{ backgroundColor: "#24D07A", height: "8px", width: "8px", borderRadius: "50%", marginRight: "5px" }}></span>
                        <span>Business available now for call</span>
                        <a href="tel:+1234567890" className="call-now">- Call Now!</a>
                    </div>
                    <button style={{ border: "none", fontSize: "18px", cursor: "pointer", color: "#666", padding: "0px 5px", backgroundColor: "#fffbe6" }} onClick={closeTab}>x</button>
                </div>
            )}
        </div>
    );
}
