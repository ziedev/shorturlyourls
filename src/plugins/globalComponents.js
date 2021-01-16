
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";
import BaseNav from "../components/BaseNav";
import BaseRadio from "../components/BaseRadio";
import BaseSlider from "../components/BaseSlider";
import BaseTable from "../components/BaseTable";
import BaseHeader from "../components/BaseHeader";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import TabPane from "../components/Tabs/TabPane";
import Tabs from "../components/Tabs/Tabs";

export default {
  install(Vue) {
    
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(Card.name, Card);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Tabs.name, Tabs);
  }
};
