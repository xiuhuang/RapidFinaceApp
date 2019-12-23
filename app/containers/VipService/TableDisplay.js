import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function TableDisplay (props) {
  const { columns = [], data = [] } = props
  return (
    <View style={styles.table}>
      {
          columns.map(c => (
            <View style={styles.table_cell} key={c.dataIndex}>
              <View style={styles.table_header}>
                <Text style={{fontSize: 16, color: '#666666', fontWeight: '500'}}>{c.title}</Text>
              </View>
              <View style={styles.table_row}> 
                {
                  data.map(i => {
                    if(c.render && typeof c.render === 'function') {
                      return (
                        <View style={styles.row_item}>
                          {
                            c.render(i[c.dataIndex], i)
                          }
                        </View>
                      )
                    } else {
                      return (
                        <View style={styles.row_item}>
                          <Text style={{fontSize: 14, color: '#666666'}}>{i[c.dataIndex]}</Text>
                        </View>
                      )
                    }
                  })
                }
              </View>
            </View>
          ))
        }
    </View>
  )
}

const styles = StyleSheet.create({
  table: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10, 
    paddingTop: 20,
  },
  table_cell: {
    backgroundColor: '#fff',
    width: '33.3%',
    borderColor: '#DCDCDC',
    borderWidth: 1,
  },
  table_header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    backgroundColor: '#F5F5F5'
  },
  table_row: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row_item: {
    height: 42,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DCDCDC'
  }
})

export default TableDisplay