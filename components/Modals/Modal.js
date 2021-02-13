import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import cx from 'classnames'

import { CloseButton } from '@/icons/index'

ReactModal.setAppElement('body')
export default function Modal({ children, className, isOpen, closeModal }) {
  return (
    isOpen && (
      <ReactModal
        className={cx('modal', { [`${className}`]: className })}
        overlayClassName="overlay"
        isOpen={isOpen}
        shouldReturnFocusAfterClose={false}
        shouldFocusAfterRender={false}
        onRequestClose={closeModal}
      >
        {children}
        {closeModal && (
          <button className="modal__close-button" onClick={closeModal}>
            <CloseButton aria-label="popup close button" />
          </button>
        )}
      </ReactModal>
    )
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  closeModal: PropTypes.func,
  children: PropTypes.any,
}

Modal.defaultTypes = {
  isOpen: false,
}
