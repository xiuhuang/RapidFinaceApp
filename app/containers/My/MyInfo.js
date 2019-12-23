import React, { Component } from 'react'
import { StyleSheet, View, SectionList, Text, PixelRatio, Picker } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button, Input } from 'react-native-elements'
import PickerSelect from '../../components/PickerSelect';
import IcoMoonIcon from '../../assets/icomoon'

const RowSelect = ({ item, onValueChange, ...rest }) => (
    <PickerSelect
        style={{
            viewContainer: {
                height: '100%',
            },
            inputIOS: {
                fontSize: 15,
                height: '100%',
                color: '#333'
            },
            inputAndroid: {
                fontSize: 15,
                height: '100%',
                color: '#333'
            }
        }}
        placeholder={{
            label: item && item.placeholder ? item.placeholder : "请选择" + item.title,
            value: null,
            color: '#9EA0A4',
        }}
        onValueChange={onValueChange}
        items={item.options || []}
        doneText="确认"
        Icon={() => null}
        {...rest}
    />
)

@connect(({ app }) => ({ ...app }))
class MyInfo extends Component {

    state = {
        isEidt: false
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '个人资料',
        headerRight: (
            <Button
                style={{ marginRight: 6 }}
                title={navigation.state.params ? navigation.state.params.rightTitle : null}
                type="clear"
                onPress={navigation.state.params ? navigation.state.params.navigatePress : null}
            />
        ),
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
        return (
            <ListItem
                title={titleDom}
                style={{ marginTop: 1 / PixelRatio.get() }}
                leftAvatar={<Text style={{ fontSize: 15, color: '#686868', width: 68 }}>{item.title}</Text>}
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
            title: '头像',
            type: 'Avatar'
        }, {
            title: '姓名',
            name: '张三',
        }, {
            title: '身份证号',
            name: '431208197808126754',
        }, {
            title: '性别',
            name: '男',
            type: 'Select',
            options: [
                { label: '男', value: '1' },
                { label: '女', value: '2' },
            ]
        }, {
            title: '年龄',
            name: '37',
        }, {
            title: '住址',
            name: '12312312',
        }];

        const section2 = [{
            title: '公司名称',
            name: '上海XXXXX有限责任公司'
        }, {
            title: '企业性质',
            name: '民营企业',
            type: 'Select',
            options: [
                { label: '国企', value: '1' },
                { label: '民营', value: '2' },
                { label: '外企', value: '3' },
            ]
        }, {
            title: '职务',
            name: '投资经理',
            type: 'Select',
            options: [
                { label: '投资总监', value: '1' },
                { label: '投资经理', value: '2' },
                { label: '投资顾问', value: '3' },
            ]
        }, {
            title: '行业',
            name: '金融投行',
            type: 'Select',
            options: [
                { label: '互联网', value: '1' },
                { label: '大消费', value: '2' },
                { label: '生产制造', value: '3' },
                { label: '能源环保', value: '4' },
                { label: '农林牧渔', value: '5' },
                { label: '政府民生', value: '6' },
            ]
        }, {
            title: '地区',
            name: '上海',
            type: 'Select',
            options: [
                { label: '上海', value: '1' },
                { label: '北京', value: '2' },
                { label: '广州', value: '3' },
                { label: '深圳', value: '4' },
                { label: '天津', value: '5' },
                { label: '南京', value: '6' },
            ]
        }];

        const section3 = [{
            title: '投资城市',
            name: '上海',
            type: 'Select',
            options: [
                { label: '上海', value: '1' },
                { label: '北京', value: '2' },
                { label: '广州', value: '3' },
                { label: '深圳', value: '4' },
                { label: '天津', value: '5' },
                { label: '南京', value: '6' },
            ]
        }, {
            title: '投资行业',
            name: '物联网',
            type: 'Select',
            options: [
                { label: '互联网', value: '1' },
                { label: '大消费', value: '2' },
                { label: '生产制造', value: '3' },
                { label: '能源环保', value: '4' },
                { label: '农林牧渔', value: '5' },
                { label: '政府民生', value: '6' },
            ]
        }, {
            title: '投资阶段',
            name: '天使轮',
            type: 'Select',
            options: [
                { label: '天使轮', value: '1' },
                { label: 'A轮', value: '2' },
                { label: 'B轮', value: '3' },
                { label: 'C轮', value: '4' },
                { label: 'D轮', value: '5' },
            ]
        }, {
            title: '投资方式',
            name: '股权质押',
            type: 'Select',
            options: [
                { label: '房产抵押', value: '1' },
                { label: '股权质押', value: '2' },
                { label: '融资租赁', value: '3' },
                { label: '资产出售', value: '4' },
                { label: '保理', value: '5' },
            ]
        }, {
            title: '投资期限',
            name: '2年',
            type: 'Select',
            options: [
                { label: '1年', value: '1' },
                { label: '2年', value: '2' },
                { label: '3年', value: '3' },
                { label: '4年', value: '4' },
            ]
        }, {
            title: '单笔投额',
            name: '1000万人民币',
            type: 'Select',
            options: [
                { label: '1000万人民币', value: '1' },
                { label: '2000万人民币', value: '2' },
                { label: '3000万人民币', value: '3' },
                { label: '4000万人民币', value: '4' },
            ]
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
                        { title: "企业信息", data: section2 },
                        { title: "投资偏好", data: section3 }
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
        backgroundColor: 'rgba(239, 243, 246, 1)'
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
