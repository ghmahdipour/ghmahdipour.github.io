
import React, { useEffect, useState } from 'react'
import CustomScrollView from './src/components/CustomScrollView'
import items_info from './src/resources/js/items_info'
import styles from './src/styles/app_styles'
import { View, Text } from 'react-native'

export const App = () => {

  const [viewable_items, set_viewable_items] = useState({data : [], dataLoded: false})
  
  useEffect(() => {
    items_info.map((items, key) => {
      let targetwidth = Math .round(styles.itemsContainer.width[key])
      viewable_items.data.push(
        <View key={key} style={[styles.itemsContainer.height,
            {width:targetwidth},
            {backgroundColor:items.backgroundColor}]}>
            <Text style={styles.scrollItem}>{items.value}</Text>
        </View>
      )
    })
    set_viewable_items({ data: viewable_items.data , dataLoded: true})
  },[])
      return(
        viewable_items.dataLoded
          ?
          <CustomScrollView>
            {viewable_items.data} 
          </CustomScrollView>
          :
          null   
      )
}

export default App
