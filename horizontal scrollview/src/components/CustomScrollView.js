import React, { useState } from 'react'
import styles from '../styles/app_styles'
import { ScrollView, View, Text, Dimensions } from 'react-native'


export const CustomScrollView = (props) => {
    var Width = Dimensions.get('window').width
    const [current_page, set_current_page] = useState(1)
    const on_scroll = e => {
        set_current_page(Math.min(Math.max(Math.floor(e.nativeEvent.contentOffset.x / Width + 0.9) + 1.0), React.Children.count(props.children)))
    }
    
    return (
        <View style={styles.main}>
            <Text style={styles.item}>{current_page}</Text>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={on_scroll}
            >
              {props.children}  
            </ScrollView>
        </View>
    )
}

export default CustomScrollView