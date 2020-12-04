/**
 * @format
 */

import { AppRegistry, ViewPagerAndroidBase} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Touchable from './components/Touchable';
import VerticalScrollView from "./components/VerticalScrollView";
import HorizontalScrollView from "./components/HorizointalScrollView";
import ViewPagerAndroid from './components/ViewPagerAndroid';
import MyFlatlist from './components/MyFlatlist'
import SwipeListViewText from './components/SwipeListViewTest';
import SwipeListViewTest from './components/SwipeListViewTest';
import AnimatedTest from './components/AnimatedTest'
import Counter from './components/Counter'
import BasicSectionList from './components/BasicSectionList'
import LifeCyleComponent from './components/LifeCycleComponent'
import LifeCycleComponent from './components/LifeCycleComponent';
AppRegistry.registerComponent(appName, () =>LifeCycleComponent);
