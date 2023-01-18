import "./DownloadApp.css";
import downloadScreen from "../../images/download screen 1.png";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

function DownloadApp(){
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <>
            <section className="downloadapp">
                <div className="left">
                    <h1>Download the RESTUP APP</h1>
                    <p>RESTUP app will be  made available on both Android and iOS mobile devices. The program, however, will have integration with both Google Health and Apple Health. This implies there will be an integration with smartwatches and other wearable devices to enhance tracking accuracy.</p>
                    <button className="btn btn--light" onClick={openModal}>Download APP</button>
                </div>
                <div className="right">
                    <img src={downloadScreen} alt="..." className="right--image" />
                </div>
            </section>

            <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Download App Modal"
            >
            <h2 style={{textAlign: "center"}}>Coming Soon !!!</h2>
            </Modal>
        </>
    )
}

export default DownloadApp;