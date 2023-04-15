import * as ProductActionCreators from './product'
import * as FilterActionCreators from './filter'
import * as ManufacturerActionCreators from './manufacturer'

export default {
   ...ProductActionCreators,
   ...FilterActionCreators,
   ...ManufacturerActionCreators
}
