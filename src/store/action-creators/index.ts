import * as ProductActionCreators from './product'
import * as FilterActionCreators from './filter'
import * as CartActionCreators from './cart'


export default {
   ...ProductActionCreators,
   ...FilterActionCreators,
   ...CartActionCreators,
}
