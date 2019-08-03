import React from 'react';
import styles from './styles.module.css';
import SideBar from './ui/SideBar';
import Logo from './ui/Logo';
import Modal from './ui/Modal';
import ListPanel from 'core/ui/ListView';
import NetworkPanel from 'vis-modules/force-graph';
import { Store, useDataStore } from 'core/state/data';
import { Filters, useFilters } from 'core/state/filters';
import { UI, useUserInterface } from 'core/state/ui';
import { getDataModules } from 'core/module-loader';

function App() {
  let store = useDataStore();
  let ui = useUserInterface();
  let filters = useFilters();
  return (
    <Store.Provider value={store}>
      <UI.Provider value={ui}>
        <Filters.Provider value={filters}>
          <div className={styles.App}>
            <SideBar />
            <ListPanel />
            <NetworkPanel />
            <Modal />
            <Logo />
          </div>
        </Filters.Provider>
      </UI.Provider>
      {getDataModules().map(dataModule => React.createElement(dataModule))}
    </Store.Provider>
  );
}
export default App;
