import {Dimensions } from 'react-native'

  let dimensions = Dimensions.get('window')
 
  function mywidth(){
      let randwidth = []
      for(let i=0; i < 4; i++){
        randwidth[i] = Math.random()*160+200
      } 
      return randwidth
  }
export default {
    main:{
        flex:1,
        justifyContent: 'center'
    },
    item:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 23,
        alignItems: "center",
        alignSelf: "center",
        paddingTop:'20%',
        marginTop:2,
        height:'30%',
    },
    itemsContainer:{
        width: mywidth(),
        height: Math.round((dimensions.width*9 / 10)),
        backgroundColor: 'pink',
        marginLeft:20,
        marginRight:10
    },
    scrollItem:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 60,
        alignItems: "center",
        alignSelf: "center",
        paddingTop:'30%',
        marginTop:2
    }
}