import * as ProductActionCreators from './product'
import * as FilterActionCreators from './filter'

export default {
   ...ProductActionCreators,
   ...FilterActionCreators,
}
