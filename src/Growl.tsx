import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

type GrowlProps = {
  active?: boolean
  message: string
  onDismissed: () => void
}

export const Growl = ({ active, message, onDismissed }: GrowlProps) => (
  <div
    className={classNames(styles.growl, {
      [styles.active]: active
    })}
  >
    {message}
    <div onClick={onDismissed} className={styles.growlClose} />
  </div>
)
