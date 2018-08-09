/**
 * Copyright (c) 2017-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

import ColorPropType from '../ColorPropType';
import ViewStylePropTypes from '../View/ViewStylePropTypes';

var PickerStylePropTypes = Object.assign({}, ViewStylePropTypes, {
  color: ColorPropType
});

export default PickerStylePropTypes;