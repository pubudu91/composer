/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import log from 'log';
import * as PositioningUtils from '../positioning-util';

/**
 * Position visitor class for Resource Definition.
 *
 * @class ResourceDefinitionPositionCalcVisitor
 * */
class ResourceDefinitionPositionCalcVisitor {

    /**
     * can visit the visitor.
     *
     * @return {boolean} true.
     *
     * @memberOf ResourceDefinitionPositionCalcVisitor
     * */
    canVisit() {
        log.debug('can visit ResourceDefinitionPositionCalc');
        return true;
    }

    /**
     * begin visiting the visitor.
     *
     * @param {ASTNode} node - Resource Definition node.
     *
     * @memberOf ResourceDefinitionPositionCalcVisitor
     * */
    beginVisit(node) {
        log.debug('begin visit ResourceDefinitionPositionCalc');
        // populate inner panel BBox position.
        PositioningUtils.populateInnerPanelDecoratorBBoxPosition(node);
        // populate panel heading positions.
        PositioningUtils.populatePanelHeadingPositioning(node, this.createPositioningForParameter);
    }

    /**
     * visit the visitor.
     *
     * @memberOf ResourceDefinitionPositionCalcVisitor
     * */
    visit() {
        log.debug('visit ResourceDefinitionPositionCalc');
    }

    /**
     * visit the visitor at the end.
     *
     * @memberOf ResourceDefinitionPositionCalcVisitor
     * */
    endVisit() {
        log.debug('end visit ResourceDefinitionPositionCalc');
    }

    /**
     * Sets positioning for a parameter.
     *
     * @param {object} parameter - The resource parameter node.
     * @param {number} x - The x position
     * @param {number} y - The y position
     * @return {number} The x position of the next parameter node.
     *
     * @memberOf ResourceDefinitionPositionCalcVisitor
     */
    createPositioningForParameter(parameter, x, y) {
        const viewState = parameter.getViewState();
        // Positioning the parameter
        viewState.bBox.x = x;
        viewState.bBox.y = y;

        // Positioning the delete icon
        viewState.components.deleteIcon.x = x + viewState.w;
        viewState.components.deleteIcon.y = y;

        return viewState.components.deleteIcon.x + viewState.components.deleteIcon.w;
    }
}

export default ResourceDefinitionPositionCalcVisitor;
