import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    ScrollView,
    Dimensions,
    PixelRatio,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight,
    View,
} from 'react-native';
import IcoMoonIcon from '../../assets/icomoon'

const {width:wWidth,height:wHeight} = Dimensions.get('window');

const COLOR_HIGH = '#3895FF';
const COLOR_NORMAL = '#6c6c6c';

const LINE = 1 / PixelRatio.get();

const TopMenuItem = (props) => {
    const onPress = () => {
        props.onSelect(props.index);
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.item}>
                <Text style={props.selected ? styles.menuTextHigh : styles.menuText}>{props.label}</Text>
                {
                    props.selected?<IcoMoonIcon style={{marginLeft:3}} name="shang" size={6} color='#3895FF' />:<IcoMoonIcon style={{marginLeft:3}} name="xia" size={6} color='#999999' />
                }
                
            </View>
        </TouchableWithoutFeedback>
    );
};

const Subtitle = (props) => {
    let textStyle = props.selected ?
        [styles.tableItemText, styles.highlight, styles.marginHigh] :
        [styles.tableItemText, styles.margin];

    let rightTextStyle = props.selected ? [styles.tableItemText, styles.highlight] : styles.tableItemText;

    let onPress = () => {
        props.onSelectMenu(props.index, props.subindex, props.data);
    }

    return (
        <TouchableHighlight onPress={onPress} underlayColor="#f5f5f5">
            <View style={styles.tableItem}>
                <View style={styles.row}>
                    {/* {props.selected && <Check />} */}
                    <Text style={textStyle}>{props.data.title}</Text>
                </View>
                <Text style={rightTextStyle}>{props.data.subtitle}</Text>
            </View>
        </TouchableHighlight>
    );
};

const Title = (props) => {
    let textStyle = props.selected ?
        [styles.tableItemText, styles.highlight, styles.marginHigh] :
        [styles.tableItemText, styles.margin];

    let rightTextStyle = props.selected ? [styles.tableItemText, styles.highlight] : styles.tableItemText;


    let onPress = () => {
        props.onSelectMenu(props.index, props.subindex, props.data);
    }

    return (
        <TouchableHighlight onPress={onPress} underlayColor="#f5f5f5">
            <View style={styles.titleItem}>
                {/* {props.selected && <Check />} */}
                <Text style={textStyle}>{props.data.title}</Text>
            </View>
        </TouchableHighlight>
    );
};

export default class TopMenu extends Component {

    constructor(props) {
        super(props);
        let array = props.config;
        let top = [];
        let maxHeight = [];
        let subselected = [];
        let height = [];
        //最大高度
        var max = parseInt((wHeight - 80) * 0.8 / 43);

        for (let i = 0, c = array.length; i < c; ++i) {
            let item = array[i];
            top[i] = item.data[item.selectedIndex];
            maxHeight[i] = Math.min(item.data.length, max) * 43;
            subselected[i] = item.selectedIndex;
            height[i] = new Animated.Value(0);
        }


        //分析数据
        this.state = {
            top: top,
            maxHeight: maxHeight,
            subselected: subselected,
            height: height,
            fadeInOpacity: new Animated.Value(0),
            selectedIndex: null
        };


    }


    componentDidMount() {

    }

    createAnimation = (index, height) => {
        
        return Animated.timing(
            this.state.height[index],
            {
                toValue: height,
                duration: 250
            }
        );
    }

    createFade = (value) => {
        return Animated.timing(
            this.state.fadeInOpacity,
            {
                toValue: value,
                duration: 250
            }
        );
    }


    onSelect = (index) => {
        if (index === this.state.selectedIndex) {
            //消失
            this.hide(index);
        } else {
            this.setState({selectedIndex: index, current: index});
            this.onShow(index);
        }
    }

    hide = (index, subselected) => {
        let opts = {selectedIndex: null, current: index};
        if (subselected !== undefined) {
            this.state.subselected[index] = subselected;
            this.state.top[index] = this.props.config[index].data[subselected];
            opts = {selectedIndex: null, current: index, subselected: this.state.subselected.concat()};
        }
        this.setState(opts);
        this.onHide(index);
    }


    onShow = (index) => {
        console.log(this.state.maxHeight[index]);
        Animated.parallel([this.createAnimation(index, this.state.maxHeight[index]), this.createFade(1)]).start();
    }


    onHide = (index) => {
        //其他的设置为0
        for (let i = 0, c = this.state.height.length; i < c; ++i) {
            if (index != i) {
                this.state.height[i].setValue(0);
            }
        }
        Animated.parallel([this.createAnimation(index, 0), this.createFade(0)]).start();

    }

    onSelectMenu = (index, subindex, data) => {
        this.hide(index, subindex);
        this.props.onSelectMenu && this.props.onSelectMenu(index, subindex, data);
    }


    renderList = (d, index) => {
        let subselected = this.state.subselected[index];
        let Comp = null;
        if (d.type == 'title') {
            Comp = Title;
        } else {
            Comp = Subtitle;
        }

        let enabled = this.state.selectedIndex == index || this.state.current == index;

        return (
            <Animated.View key={index} pointerEvents={enabled ? 'auto' : 'none'}
                           style={[styles.content, {opacity: enabled ? 1 : 0, height: this.state.height[index]}]}>
                <ScrollView style={styles.scroll}>
                    {d.data.map((data, subindex) => {
                        return <Comp
                            onSelectMenu={this.onSelectMenu}
                            index={index}
                            subindex={subindex}
                            data={data}
                            selected={subselected == subindex}
                            key={subindex}/>
                    })}
                </ScrollView>
            </Animated.View>
        );
    }

    render() {
        let list = null;
        if (this.state.selectedIndex !== null) {
            list = this.props.config[this.state.selectedIndex].data;
        }
        return (
            <View style={{flex: 1}}>
                <View style={styles.topMenu}>
                    {this.state.top.map((t, index) => {
                        return <TopMenuItem
                            key={index}
                            index={index}
                            onSelect={this.onSelect}
                            label={t.showTitle||t.title}
                            selected={this.state.selectedIndex === index}/>
                    })}
                </View>
                {this.props.renderContent()}
                <View style={styles.bgContainer} pointerEvents={this.state.selectedIndex !== null ? "auto" : "none"}>
                    <TouchableWithoutFeedback onPress={()=>this.hide(this.state.selectedIndex)}>
                        <Animated.View style={[styles.bg, {opacity: this.state.fadeInOpacity}]} />
                    </TouchableWithoutFeedback>
                    {this.props.config.map((d, index) => {
                        return this.renderList(d, index);
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    scroll: {flex: 1, backgroundColor: '#fff'},
    bgContainer: {position: 'absolute', top: 40, width: wWidth, height: wHeight},
    bg: {flex: 1, backgroundColor: 'rgba(50,50,50,0.4)'},
    content: {
        position: 'absolute',
        width: wWidth
    },

    highlight: {
        color: COLOR_HIGH
    },

    marginHigh: {marginLeft: 10},
    margin: {marginLeft: 10},


    titleItem: {
        height: 43,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: LINE,
        borderBottomColor: '#eee',
        flexDirection: 'row',
    },

    tableItem: {
        height: 43,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: LINE,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tableItemText: {fontWeight: '300', fontSize: 14},
    row: {
        flexDirection: 'row'
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuTextHigh: {
        marginRight: 3,
        fontSize: 14,
        color: COLOR_HIGH
    },
    menuText: {
        marginRight: 3,
        fontSize: 14,
        color: COLOR_NORMAL
    },
    topMenu: {
        flexDirection: 'row',
        height: 40,
        // borderTopWidth: LINE,
        // borderTopColor: '#bdbdbd',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        backgroundColor:'#fff'
    },
});