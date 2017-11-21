class Tabs {
    constructor(elm) {
        if (!elm) return;
        this.tablist = elm.querySelector('.Tablist');
        this.tabs = [...this.tablist.querySelectorAll('.Tab')];
        if (!this.tabs || this.tabs.length === 0) {
            return;
        }
        this.panels = [...elm.querySelectorAll('.Panel')];

        this.tablist.setAttribute('role', 'tablist');

        this.tabs.forEach(this.initTab.bind(this));
        this.panels.forEach(this.initPanel.bind(this));

        this.tabs[0].removeAttribute('tabindex');
        this.tabs[0].setAttribute('aria-selected', 'true');
        this.panels[0].hidden = false;
    }

    switchTab(oldTab, newTab) {
        newTab.focus();
        // Make the active tab focusable by the user (Tab key)
        newTab.removeAttribute('tabindex');
        // Set the selected state
        newTab.setAttribute('aria-selected', 'true');
        oldTab.removeAttribute('aria-selected');
        oldTab.setAttribute('tabindex', '-1');
        // Get the indices of the new and old tabs to find the correct
        // tab panels to show and hide
        const index = this.tabs.indexOf(newTab);
        const oldIndex = this.tabs.indexOf(oldTab);
        this.panels[oldIndex].hidden = true;
        this.panels[index].hidden = false;
    }

    initTab(tab, i) {
        tab.setAttribute('role', 'tab');
        tab.setAttribute('id', 'tab' + (i + 1));
        tab.setAttribute('tabindex', '-1');
        tab.parentNode.setAttribute('role', 'presentation');

        // Handle clicking of tabs for mouse users
        tab.addEventListener('click', e => {
            e.preventDefault();
            const currentTab = this.tablist.querySelector('[aria-selected]');
            if (e.currentTarget !== currentTab) {
                this.switchTab(currentTab, e.currentTarget);
            }
        });

        // Handle keydown events for keyboard users
        tab.addEventListener('keydown', e => {
            // Get the index of the current tab in the tabs node list
            const index = this.tabs.indexOf(e.currentTarget);
            // Work out which key the user is pressing and
            // Calculate the new tab's index where appropriate
            const dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
            if (dir !== null) {
                e.preventDefault();
                // If the down key is pressed, move focus to the open panel,
                // otherwise switch to the adjacent tab
                dir === 'down' ? this.panels[i].focus() : this.tabs[dir] ? this.switchTab(e.currentTarget, this.tabs[dir]) : void 0;
            }
        });
    }

    initPanel(panel, i) {
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('tabindex', '-1');
        const id = panel.getAttribute('id');
        panel.setAttribute('aria-labelledby', this.tabs[i].id);
        panel.hidden = true;
    }
}

export default Tabs;