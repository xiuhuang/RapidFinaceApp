import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing } from 'react-native'
import { Button } from 'react-native-elements'
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
} from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import IcoMoonIcon from './assets/icomoon'
import Loading from './containers/Loading'
import Login from './containers/Login'
import VerificationCode from './containers/Login/verificationCode'
import VerificationName from './containers/Login/verificationName'
import GatheringFace from './containers/Login/gatheringFace';
import CompanyInfo from './containers/Login/companyInfo';
import ChooseIdentity from './containers/Login/chooseIdentity';
import SwitchIdentity from './containers/switchIdentity';
import Home from './containers/Home'
import News from './containers/News/index'
import System from './containers/News/system'
import Chats from './containers/News/chats'
import FindActivities from './containers/FindActivities'
import FindActivitiesDetail from './containers/FindActivities/Detail'
import HotTopicList from './containers/HotTopic/index'
import HotTopicDetail from './containers/HotTopic/Detail'
import HotTopicArticle from './containers/HotTopic/Article'
import MyActivities from './containers/MyActivities'
import My from './containers/My/index'
import MyInfo from './containers/My/MyInfo'
import MyInVestment from './containers/MyInvestment/list'
import InvestAdd from './containers/MyInvestment/Add'
import MyInvestDetail from './containers/MyInvestment/Detail'
import MyProject from './containers/MyProject/list'
import MyProjectAdd from './containers/MyProject/Add'
import MyProjectDetail from './containers/MyProject/Detail'
import Find from './containers/Find'
import InvestDetail from './containers/InvestDetail'
import ProjectDetail from './containers/ProjectDetail'
import FinanceService from './containers/FinancialService/index'
import FinanceDetail from './containers/FinancialService/detial'
import Progress from './containers/Progress/index'
import ProgressDetail from './containers/Progress/detail'
import Resources from './containers/Resources/index'
import ResourceDetail from './containers/Resources/detail'
import MemberCenter from './containers/MemberCenter/index'
import OpenVip from './containers/MemberCenter/openVip'
import Setting from './containers/Setting'
import College from './containers/College/index'
import CourseSort from './containers/College/courseSort'
import SortCourses from './containers/College/sortCourses'
import Recommend from './containers/College/courseRecommend'
import Introduce from './containers/College/courseIntroduce'
import Experience from './containers/College/courseExperience'
import MyCourse from './containers/College/myCourse'
import CommonSense from './containers/Find/commonSense'
import SenseDetail from './containers/Find/senseDetail'
import ResourcesSharing from './containers/ResourcesSharing'
import ChooseSharer from './containers/ResourcesSharing/ChooseSharer'
import MyFriends from './containers/MyFriends/index'
import MyFavorite from './containers/MyFavorite'
import VipService from './containers/VipService'
import ChoosePage from './containers/Choose'
import SearchPage from './containers/SearchPage'

const HomeNavigator = createBottomTabNavigator({
  Find: { screen: Find },
  Home: { screen: Home },
  News: { screen: News },
  My: { screen: My },
}, {
  tabBarOptions: {
    activeTintColor: '#00A0E9',
    // inactiveTintColor: '#999999'
  },
})

HomeNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  if (routeName === 'Find') {
    return {
      header: null,
    }
  } else if (routeName === 'Home') {
    return {
      headerTitle: '快资',
      headerRight: (
        <Button
          style={{ marginRight: 6 }}
          icon={<IcoMoonIcon name="sousuo" size={20} color='#B2B2B2' />}
          type="clear"
          onPress={() => navigation.navigate({ routeName: 'SearchPage' })}
        />
      ),
    };
  } else if (routeName === 'News') {
    return {
      headerTitle: '消息'
    }
  } else if (routeName === 'My') {
    return {
      header: null,
    }
  }
}

const MainNavigator = createStackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    ProjectDetail: { screen: ProjectDetail },
    InvestDetail: { screen: InvestDetail },
    HotTopicList: { screen: HotTopicList },
    HotTopicDetail: { screen: HotTopicDetail },
    HotTopicArticle: { screen: HotTopicArticle },
    MyInfo: { screen: MyInfo },
    MyInVestment: { screen: MyInVestment },
    InvestAdd: { screen: InvestAdd },
    MyInvestDetail: { screen: MyInvestDetail },
    MyProject: { screen: MyProject },
    MyProjectDetail: { screen: MyProjectDetail },
    MyProjectAdd: { screen: MyProjectAdd },
    MyActivities: { screen: MyActivities },
    FindActivitiesDetail: { screen: FindActivitiesDetail },
    FindActivities: { screen: FindActivities },
    System: { screen: System },
    Chats: { screen: Chats },
    FinanceDetail: { screen: FinanceDetail },
    FinanceService: { screen: FinanceService },
    Progress: { screen: Progress },
    ProgressDetail: { screen: ProgressDetail },
    Resources: { screen: Resources },
    ResourceDetail: { screen: ResourceDetail },
    MemberCenter: { screen: MemberCenter },
    OpenVip: { screen: OpenVip },
    Setting: { screen: Setting },
    College: { screen: College },
    CourseSort: { screen: CourseSort },
    SortCourses: { screen: SortCourses },
    Introduce: { screen: Introduce },
    Recommend: { screen: Recommend },
    Experience: { screen: Experience },
    MyCourse: { screen: MyCourse },
    CommonSense: { screen: CommonSense },
    SenseDetail: { screen: SenseDetail },
    ResourcesSharing: { screen: ResourcesSharing },
    ChooseSharer: { screen: ChooseSharer },
    VerificationCode: { screen: VerificationCode },
    VerificationName: { screen: VerificationName },
    GatheringFace: { screen: GatheringFace },
    CompanyInfo: { screen: CompanyInfo },
    ChooseIdentity: { screen: ChooseIdentity },
    SwitchIdentity: { screen: SwitchIdentity },
    MyFriends: { screen: MyFriends },
    MyFavorite: { screen: MyFavorite },
    VipService: { screen: VipService },
    ChoosePage: { screen: ChoosePage },
    SearchPage: { screen: SearchPage },
  },
  {
    headerMode: 'float',
  }
)



const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

const App = reduxifyNavigator(AppNavigator, 'root')

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { app, dispatch, router } = this.props
    if (app.loading) return <Loading />

    return <App dispatch={dispatch} state={router} />
  }
}

export default Router
