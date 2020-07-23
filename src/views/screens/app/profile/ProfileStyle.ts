import {StyleSheet} from 'react-native';
import {Metrics,Colors} from '@shared';

const styles = StyleSheet.create({
container:{
    flex:1,
    
},

topContent:{ 
   paddingVertical:Metrics.spacing.medium,
    alignItems:'center',
  
},

centerContent:{
   flex:1,
    flexGrow:3,
    
},

introduce:{
    alignItems:'center',
    paddingVertical:Metrics.spacing.medium,
},
name:{
    fontSize:Metrics.FontSize.large,
    fontWeight:'bold',
    lineHeight:24
},
completeIntro:{
    color:Colors.Text.textAcient,
    fontSize:Metrics.FontSize.large,
    lineHeight:24
},

dots: {
    color: Colors.Primary,
    marginRight: Metrics.spacing.medium,
  },

});

export {styles};