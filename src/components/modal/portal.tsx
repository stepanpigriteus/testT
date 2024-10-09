import { createPortal } from 'react-dom';
import Portal_buttons from '../buttons/portal_buttons';



interface PortalProps {
    onClose: () => void;
    id: string;
    index: number;
}

export default function Portal({ onClose, id , index}: PortalProps) {
    const targetElement = document.getElementById("root");
    const parentTask = document.getElementById(String(index))
    console.log(parentTask)
    if (!targetElement) {
        return null;
    }


    return createPortal(
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-[30%] h-[40%] max-w-[90%] max-h-[90%]">
                <h3 className='font-semibold mb-2'>Добавьте подзадачу</h3>
                <Portal_buttons/>
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        targetElement
    );
}

