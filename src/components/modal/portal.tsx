import { createPortal } from 'react-dom';


interface PortalProps {
    onClose: () => void;
    id: string;
}

export default function Portal({ onClose, id }: PortalProps) {
    const targetElement = document.getElementById("root");
    console.log(targetElement)
    if (!targetElement) {
        return null;
    }


    return createPortal(
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <p>This child is placed in the document body.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        targetElement
    );
}