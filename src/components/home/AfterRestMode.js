import screen1 from "../../images/screen 1.png";
import screen2 from "../../images/screen 2.png";
import screen3 from "../../images/screen 3.png";
import "./AfterRestMode.css";
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

function AfterRestMode() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <>
            <section className="after--rest--mode">
                <div className="mobile--list">
                    <img src={screen2} alt="..." className="screen" />
                    <img src={screen3} alt="..." className="screen" />
                    <img src={screen1} alt="..." className="screen" />
                </div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sagittis velit, sed mattis eros. Vestibulum eu lobortis libero. Quisque faucibus nibh sapien, id ultricies ligula mollis sagittis. Cras ultrices congue turpis. Donec</div>
                <div className="download--app">
                    <button className="btn btn--default" onClick={openModal}>Download App</button>
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

export default AfterRestMode;