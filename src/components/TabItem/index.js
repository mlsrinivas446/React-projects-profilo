import './index.css'

const TabItem = props => {
  const {tabDetails, UpdateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const addStyleToTadItem = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    UpdateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${addStyleToTadItem}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
