const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event){
        // HIDE OTHER TAB PANELS
        tabPanels.forEach(panel=>{
                panel.hidden = true;
        })
        // MARK ALL TABS AS UNSELECTED
        tabButtons.forEach(tab=>{
                tab.setAttribute('aria-selected', false);
        });
        // MARK THE CLICKED TAB AS SELECTED
        event.currentTarget.setAttribute('aria-selected', true);
        // FIND THE ASSOCIATED TABPANEL AND SHOW IT
        const {id} = event.currentTarget;
        console.log(id);
        // Method 1: Use The id In A Query Selector
                // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
                // tabPanel.hidden = false;
        // Method 2: Use A Find In The Array Of tabPanels
        const tabPanel = tabPanels.find(
                panel => panel.getAttribute('aria-labelledby') === id);
        tabPanel.hidden = false;
}
tabButtons.forEach(button => button.addEventListener ('click', handleTabClick));