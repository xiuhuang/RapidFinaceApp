import React, { Component } from 'react'
import { StyleSheet, View, SectionList, Text, PixelRatio, Picker } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button, Input } from 'react-native-elements'
import PickerSelect from '../../components/PickerSelect';
import IcoMoonIcon from '../../assets/icomoon'

const RowSelect = ({ item, onValueChange, icon, style, inputAndroid, ...rest }) => (
    <PickerSelect
        style={{
            viewContainer: {
                height: '100%',
                overflow: 'hidden',
            },
            inputIOS: {
                fontSize: 15,
                height: '100%',
                color: '#333'
            },
            inputAndroid: {
                fontSize: 15,
                height: '100%',
                color: '#333',
                flex: 1,
                width: '100%',
                whiteSpace: 'normal',
                ...inputAndroid,
            },
        }}
        placeholder={{
            label: item && item.placeholder ? item.placeholder : "请选择" + item.title,
            value: null,
            color: '#9EA0A4',
        }}
        onValueChange={onValueChange}
        items={item.options || []}
        doneText="确认"
        Icon={icon ? true : () => null}
        {...rest}
    />
)

@connect(({ app }) => ({ ...app }))
class MyInfo extends Component {

    state = {
        isEidt: true
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '新建项目',
    })

    componentDidMount() {
        this.props.navigation.setParams({
            rightTitle: '编辑',
            navigatePress: this.changeEdit
        })
    }


    renderItem = ({ item }) => {
        const { isEidt } = this.state;
        if (item.type === 'Avatar') {
            return (
                <ListItem
                    chevron={isEidt ? <IcoMoonIcon name="Rectangle" size={15} color='#D1D1D6' /> : false}
                    leftAvatar={<Text style={{ fontSize: 15, color: '#686868', width: 68 }}>{item.title}</Text>}
                    rightAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                />
            )
        }

        if (item.type === 'upload') {
            return (
                <ListItem
                    leftAvatar={
                        <View>
                            <View style={{ 
                                width: 44, 
                                height: 44, 
                                borderRadius: 2, 
                                backgroundColor: 'rgba(245,245,245,1)',
                                justifyContent:'center',
                                alignItems:'center',
                                 }}>
                                <IcoMoonIcon name="fujian" size={22} color='#999999' style={{fontWeight: '500'}} />
                            </View>
                        </View>
                    }
                    title={<Text style={{color:'#666'}}><Text style={{color:'#FF2D2D'}}>*</Text>可上传PDF格式的项目附件</Text>}
                />
            )
        }

        let titleDom = <Text style={{ fontSize: 15, color: '#333' }}>{item.name}</Text>;
        if (isEidt) {
            if (item.type === 'Select') {
                titleDom = <RowSelect item={item} onValueChange={() => { console.log(12312) }} />;
            } else {
                const inputProps = {
                    containerStyle: {
                        paddingHorizontal: 0
                    },
                    inputStyle: {
                        fontSize: 15
                    },
                    inputContainerStyle: {
                        borderBottomWidth: 0
                    }
                }
                titleDom = <Input {...inputProps} placeholder={item.placeholder ? item.placeholder : "请输入" + item.title} defaultValue={item.name} />;
            }
        }
        let rightType = null;
        if (item.type === 'Money') {
            rightType = <RowSelect
                item={{ options: [{ label: '万人民币', value: 1 }, { label: '万美元', value: 2 }] }}
                icon
                onValueChange={() => { console.log(12312) }}
                placeholder={{}}
                inputAndroid={{
                    width: '146%',
                    fontSize: 12,
                }}
            />
        }
        return (
            <ListItem
                title={titleDom}
                style={{ marginTop: 1 / PixelRatio.get() }}
                leftAvatar={<Text style={{ fontSize: 15, color: '#686868', width: 78 }}>{item.title}</Text>}
                rightTitle={rightType}
                containerStyle={styles.itemStyle}
                chevron={isEidt && item.type === 'Select' ? <IcoMoonIcon name="Rectangle" size={15} color='#D1D1D6' /> : false}
            />
        )
    }

    changeEdit = () => {
        this.setState({
            isEidt: !this.state.isEidt
        }, () => {
            this.props.navigation.setParams({
                rightTitle: this.state.isEidt ? '保存' : '编辑'
            })
        })

    }


    render() {
        const section1 = [{
            title: 'Logo',
            type: 'Avatar'
        }, {
            title: '投资名称',
        }, {
            title: '预期收益'
        }, {
            title: '投资金额',
            type: 'Money'
        }, {
            title: '投资行业',
            type: 'Select',
            options: [
                { label: '互联网', value: 1 },
                { label: '文娱', value: 2 },
                { label: '大消费', value: 3 },
                { label: '科技', value: 4 },
                { label: '生产制造', value: 5 },
                { label: '能源环保', value: 6 }
            ]
        }, {
            title: '可投城市',
            type: 'Select',
            options: [
                { label: '北京', value: 1 },
                { label: '上海', value: 2 },
                { label: '南京', value: 3 },
                { label: '杭州', value: 4 },
                { label: '重庆', value: 5 },
                { label: '武汉', value: 6 }
            ]
        }, {
            title: '资金性质',
            type: 'Select',
            options: [
                { label: '房产抵押', value: 1 },
                { label: '股权质押', value: 2 },
                { label: '融资租赁', value: 3 },
                { label: '资产出售', value: 4 }
            ]
        }, {
            title: '投资阶段',
            type: 'Select',
            options: [
                { label: '天使轮', value: 1 },
                { label: 'A轮', value: 2 },
                { label: 'B轮', value: 3 },
                { label: 'C轮', value: 4 }
            ]
        }, {
            title: '投资期限',
            type: 'Select',
            options: [
                { label: '1年', value: 1 },
                { label: '2年', value: 2 },
                { label: '3年', value: 3 },
                { label: '4年', value: 4 }
            ]
        }, {
            title: '投资方式',
            type: 'Select',
            options: [
                { label: '房产抵押', value: 1 },
                { label: '股权质押', value: 2 },
                { label: '融资租赁', value: 3 },
                { label: '资产出售', value: 4 },
                { label: '保理', value: 5 },
                { label: '票据', value: 6 }
            ]
        }, {
            title: '投资人',
        }, {
            title: '最低投额',
            type: 'Money'
        }, {
            title: '最高投额',
            type: 'Money'
        }];

        const section2 = [{
            title: '机构评级',
            type: 'Select',
            options: [
                { label: '无', value: 1 },
                { label: 'AA-', value: 2 },
                { label: 'AA', value: 3 },
                { label: 'AA+', value: 4 },
                { label: 'AAA', value: 5 },
                { label: 'AAAA', value: 6 }
            ]
        }, {
            title: '尽调周期',
            type: 'Select',
            options: [
                { label: '1周内', value: 1 },
                { label: '1-2周', value: 2 },
                { label: '2-4周', value: 3 },
                { label: '1-3个月', value: 4 },
                { label: '3个月以上', value: 5 },
            ]
        }, {
            title: '审批周期',
            type: 'Select',
            options: [
                { label: '1周内', value: 1 },
                { label: '1-2周', value: 2 },
                { label: '2-4周', value: 3 },
                { label: '1-3个月', value: 4 },
                { label: '3个月以上', value: 5 },
            ]
        }, {
            title: '可投总金额',
            type: 'Select',
            options: [
                { label: '1000', value: 1 },
                { label: '2000', value: 2 },
                { label: '3000', value: 3 },
                { label: '4000', value: 4 },
                { label: '5000', value: 5 },
            ]
        }];

        const section3 = [{
            type: 'upload',
        }];

        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={({ section: { title } }) => (
                        title !== undefined ? <Text style={{ fontSize: 13, color: 'rgba(153, 153, 153, 1)', height: 34, lineHeight: 34, marginLeft: 16 }}>{title}</Text> : null
                    )}
                    sections={[
                        { title: "基础信息", data: section1 },
                        { title: "机构信息", data: section2 },
                        { title: "附件信息", data: section3 }
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(239, 243, 246, 1)',
    },
    headTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        color: '#383838',
        fontSize: 16,
    },
    desc: {
        color: '#00A0E9',
        fontSize: 14,
        marginLeft: 10,
        backgroundColor: 'rgba(0, 160, 233, 0.1)',
        paddingHorizontal: 5,
        paddingVertical: 3
    },
    itemStyle: {
        height: 50,
        ...Platform.select({
            ios: {
                paddingVertical: 0,
                paddingHorizontal: 14,
            },
            default: {
                paddingVertical: 0,
                paddingHorizontal: 16
            },
        }),
    }
})

export default MyInfo
