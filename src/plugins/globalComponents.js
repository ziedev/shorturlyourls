
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";
import BaseNav from "../components/BaseNav";
import BaseTable from "../components/BaseTable";
import BaseHeader from "../components/BaseHeader";
import Card from "../components/Card";
import TabPane from "../components/Tabs/TabPane";
import Tabs from "../components/Tabs/Tabs";

export default {
  install(Vue) {
    
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(Card.name, Card);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Tabs.name, Tabs);
  }
};
