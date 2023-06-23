"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();

    const onChange = (open: boolean) => {
        if (!open) {
            //RESTAR FORMULÁRIO
            uploadModal.onClose();
        }
    }

    return(
        <Modal title="Modal Title" description="Modal Description" isOpen={uploadModal.isOpen} onChange={onChange} >
            Teste Modal
        </Modal>
    )
}

export default UploadModal;