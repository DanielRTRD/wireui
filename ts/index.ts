import { notify, confirmNotification, Notify, Confirm } from './notifications'
import { showDialog, showConfirmDialog, ShowConfirmDialog, ShowDialog } from './dialog'
import { dataGet, DataGet } from './utils/dataGet'
import { Alpine } from './components/alpine'
import { WireUiHooks } from './hooks'
import './directives/confirm'
import './browserSupport'
import './components'
import './global'

export interface $WireUi {
  notify: Notify
  confirmNotification: Confirm
  confirmAction: ShowConfirmDialog
  dialog: ShowDialog
  confirmDialog: ShowConfirmDialog
  dataGet: DataGet
}

export interface WireUI extends WireUiHooks {
  colors: {
    [key: string]: {
      [key: string]: string
    }
  }
}

declare global {
  interface Window {
    $wireui: $WireUi
    Wireui: WireUI
    Livewire: any
    Alpine: Alpine
    $openModal: CallableFunction
  }
}

const wireui = {
  notify,
  confirmNotification,
  confirmAction: showConfirmDialog,
  dialog: showDialog,
  confirmDialog: showConfirmDialog,
  dataGet
}

window.$wireui = wireui
document.addEventListener('DOMContentLoaded', () => window.Wireui.dispatchHook('load'))

export default wireui
